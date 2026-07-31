// Pure scoring / result-decision logic — no UI or React imports here, so it can be
// unit-tested and reasoned about independently of components.
//
// Source: "Find Your M7 — Degree Fit" PDF, pages 31-38 (Score Calculation & Result Logic)
// and pages 50-51 (CRM Integration / Lead Segmentation).

import { questions, MAX_RAW, type ScoreKey } from "../data/questions";
import type { ResultId } from "../data/results";
import type { LeadData } from "../data/leadForm";

/** Maps question id -> selected choice id, e.g. { q1: "b", q2: "c", ... } */
export type Answers = Record<string, string>;

export interface Scores {
  mba: number;
  masters: number;
  clarity: number;
  readiness: number;
}

export type EmergingDirection = "mba" | "masters" | null;
export type Degree = "mba" | "masters";

export interface AssessmentResult {
  resultId: ResultId;
  raw: Scores;
  percent: Scores;
  /** Set only for Experience-First results (the higher of MBA/Master's fit). */
  emergingDirection: EmergingDirection;
  /** True when MBA Fit and Master's Fit were exactly tied after every tie-breaker. */
  isMixedFit: boolean;
  /** The "winning" degree used to pick MBA-Oriented vs Specialized Master's-Oriented,
   *  or the emerging direction for Experience-First. Null for Exploration-First. */
  primaryDegree: Degree | null;
  lowestDimension: ScoreKey;
}

/** Step 1 (Score Calculation): sum raw points per dimension across all answered questions. */
export function computeRawScores(answers: Answers): Scores {
  const raw: Scores = { mba: 0, masters: 0, clarity: 0, readiness: 0 };
  for (const question of questions) {
    const choiceId = answers[question.id];
    if (!choiceId) continue;
    const choice = question.choices.find((c) => c.id === choiceId);
    if (!choice) continue;
    for (const key of Object.keys(choice.scores) as ScoreKey[]) {
      raw[key] += choice.scores[key] ?? 0;
    }
  }
  return raw;
}

/** Step 2: normalize raw points into percentages, rounded to the nearest whole number. */
export function normalizeScores(raw: Scores): Scores {
  return {
    mba: Math.round((raw.mba / MAX_RAW.mba) * 100),
    masters: Math.round((raw.masters / MAX_RAW.masters) * 100),
    clarity: Math.round((raw.clarity / MAX_RAW.clarity) * 100),
    readiness: Math.round((raw.readiness / MAX_RAW.readiness) * 100),
  };
}

function lowestDimension(percent: Scores): ScoreKey {
  const entries = Object.entries(percent) as [ScoreKey, number][];
  return entries.reduce((min, entry) => (entry[1] < min[1] ? entry : min))[0];
}

/** Tie-breaker Step 2: classify the Q10-Q12 learning-preference pattern.
 *  Option A on each question = Master's pattern (technical coursework / similar
 *  academic interests / build a model). Options B & C = MBA pattern (business cases /
 *  challenge business thinking / diverse peers / strategy / team leadership).
 *  The degree supported by at least 2 of 3 questions wins; otherwise inconclusive. */
function classifyLearningPattern(answers: Answers): Degree | null {
  let mbaCount = 0;
  let mastersCount = 0;
  for (const id of ["q10", "q11", "q12"]) {
    const choice = answers[id];
    if (choice === "a") mastersCount += 1;
    else if (choice === "b" || choice === "c") mbaCount += 1;
    // "d" (Q11/Q12 only, still-exploring options) is neutral.
  }
  if (mastersCount >= 2) return "masters";
  if (mbaCount >= 2) return "mba";
  return null;
}

/** Full Tie-Breaker Logic (PDF p.37), applied when MBA Fit and Master's Fit are within
 *  10 percentage points of each other. Each step is a fallback for the previous one. */
function applyTieBreaker(answers: Answers, percent: Scores): { winner: Degree; isMixedFit: boolean } {
  // Step 1: Desired Career Outcome (Q4).
  const q4 = answers.q4;
  if (q4 === "b") return { winner: "masters", isMixedFit: false };
  if (q4 === "c" || q4 === "d") return { winner: "mba", isMixedFit: false };

  // Step 2: Learning Preference (Q10-Q12 pattern).
  const pattern = classifyLearningPattern(answers);
  if (pattern) return { winner: pattern, isMixedFit: false };

  // Step 3: Career Stage & Evidence (Q1 & Q14).
  const mastersIndicator = answers.q1 === "a" && answers.q14 === "b";
  const mbaIndicator = answers.q1 === "c" && answers.q14 === "d";
  if (mbaIndicator && !mastersIndicator) return { winner: "mba", isMixedFit: false };
  if (mastersIndicator && !mbaIndicator) return { winner: "masters", isMixedFit: false };

  if (percent.mba !== percent.masters) {
    return { winner: percent.mba > percent.masters ? "mba" : "masters", isMixedFit: false };
  }

  // Step 4: Mixed Fit — MBA Fit and Master's Fit are exactly equal.
  return { winner: "mba", isMixedFit: true };
}

/** Complete Decision Flow (PDF p.38). */
export function determineResult(answers: Answers): AssessmentResult {
  const raw = computeRawScores(answers);
  const percent = normalizeScores(raw);
  const lowest = lowestDimension(percent);

  // Step 1: Exploration Gate.
  if (percent.clarity < 45) {
    return {
      resultId: "exploration-first",
      raw,
      percent,
      emergingDirection: null,
      isMixedFit: false,
      primaryDegree: null,
      lowestDimension: lowest,
    };
  }

  // Step 2: Experience Gate.
  if (percent.readiness < 45 && (percent.mba >= 50 || percent.masters >= 50)) {
    const emergingDirection: Degree = percent.mba >= percent.masters ? "mba" : "masters";
    const resultId: ResultId = emergingDirection === "mba" ? "experience-first-mba" : "experience-first-masters";
    return {
      resultId,
      raw,
      percent,
      emergingDirection,
      isMixedFit: false,
      primaryDegree: emergingDirection,
      lowestDimension: lowest,
    };
  }

  // Step 3: Degree-Fit Result.
  const diff = percent.mba - percent.masters;
  let winner: Degree;
  let isMixedFit = false;
  if (diff >= 10) {
    winner = "mba";
  } else if (diff <= -10) {
    winner = "masters";
  } else {
    const tieBreak = applyTieBreaker(answers, percent);
    winner = tieBreak.winner;
    isMixedFit = tieBreak.isMixedFit;
  }

  return {
    resultId: winner === "mba" ? "mba-oriented" : "masters-oriented",
    raw,
    percent,
    emergingDirection: null,
    isMixedFit,
    primaryDegree: winner,
    lowestDimension: lowest,
  };
}

export function isAssessmentComplete(answers: Answers): boolean {
  return questions.every((q) => Boolean(answers[q.id]));
}

const dimensionLabels: Record<ScoreKey, string> = {
  mba: "MBA Fit",
  masters: "Master's Fit",
  clarity: "Career Clarity",
  readiness: "Readiness",
};

export function dimensionLabel(key: ScoreKey): string {
  return dimensionLabels[key];
}

const recommendedCta: Record<ResultId, string> = {
  "mba-oriented": "MBA Strategy Call",
  "masters-oriented": "Master's Program Shortlisting Call",
  "experience-first-mba": "Profile-Building Consultation",
  "experience-first-masters": "Profile-Building Consultation",
  "exploration-first": "Career-Clarification Session",
};

/** Suggested Lead Segmentation (PDF p.51). */
export function leadSegment(result: AssessmentResult): string {
  const { resultId, percent } = result;
  if (resultId === "mba-oriented" && percent.readiness >= 70) return "High-Intent MBA Lead";
  if (resultId === "masters-oriented" && percent.readiness >= 70) return "High-Intent Master's Lead";
  if (
    (resultId === "mba-oriented" || resultId === "masters-oriented") &&
    percent.readiness >= 45 &&
    percent.readiness < 70
  ) {
    return "Preparation-Stage Lead";
  }
  if (resultId === "experience-first-mba" || resultId === "experience-first-masters") {
    return "Long-Term Nurture Lead";
  }
  return "Career-Clarification Lead";
}

/** CRM Integration payload (PDF p.50) — shape ready to hand to a CRM/API integration. */
export interface CrmPayload {
  primaryResult: string;
  emergingDegreeDirection: "MBA" | "Master's" | null;
  mbaFit: number;
  mastersFit: number;
  careerClarity: number;
  readiness: number;
  degreeTypeCurrentlyConsidering: string;
  countryOfInterest: string;
  currentCareerStage: string;
  lowestScoringDimension: string;
  recommendedCta: string;
  leadSegment: string;
}

export function buildCrmPayload(result: AssessmentResult, resultLabel: string, lead: LeadData): CrmPayload {
  return {
    primaryResult: resultLabel,
    emergingDegreeDirection: result.emergingDirection === "mba" ? "MBA" : result.emergingDirection === "masters" ? "Master's" : null,
    mbaFit: result.percent.mba,
    mastersFit: result.percent.masters,
    careerClarity: result.percent.clarity,
    readiness: result.percent.readiness,
    degreeTypeCurrentlyConsidering: lead.degreeType,
    countryOfInterest: lead.country,
    currentCareerStage: lead.careerStage,
    lowestScoringDimension: dimensionLabel(result.lowestDimension),
    recommendedCta: recommendedCta[result.resultId],
    leadSegment: leadSegment(result),
  };
}
