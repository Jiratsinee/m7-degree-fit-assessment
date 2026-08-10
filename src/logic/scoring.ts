// Pure scoring / result-decision logic — no UI or React imports here, so it can be
// unit-tested and reasoned about independently of components.
//
// Source: "Find Your M7 — Framework Series 1: Degree Fit" PDF (ver 2.1), pages 22-26
// (Score Calculation & Result Logic) and pages 34-35 (CRM Integration / Lead Segmentation).

import { questions, MAX_RAW, type ScoreKey } from "../data/questions";
import type { ResultId } from "../data/results";
import { ctaButtonLabel } from "../data/results";
import type { LeadData } from "../data/leadForm";

/** Maps question id -> selected choice id, e.g. { q1: "b", q2: "c", ... } */
export type Answers = Record<string, string>;

export interface Scores {
  mba: number;
  masters: number;
}

export type Degree = "mba" | "masters";

export interface AssessmentResult {
  resultId: ResultId;
  raw: Scores;
  percent: Scores;
  /** Exploration-First only: an early, non-final lean surfaced by the Tie-Breaker Logic. */
  emergingDirection: Degree | null;
  /** The degree whose score row is highlighted (accent color) on the result page. */
  primaryDegree: Degree | null;
}

/** Score Calculation Step 1: sum raw points per dimension across all answered questions. */
export function computeRawScores(answers: Answers): Scores {
  const raw: Scores = { mba: 0, masters: 0 };
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

/** Score Calculation Step 2: normalize raw points into percentages, rounded to the nearest whole number. */
export function normalizeScores(raw: Scores): Scores {
  return {
    mba: Math.round((raw.mba / MAX_RAW.mba) * 100),
    masters: Math.round((raw.masters / MAX_RAW.masters) * 100),
  };
}

/** Tie-Breaker Logic (PDF p.26) — applied whenever the result gates to Exploration-First, to
 *  surface a non-final "Emerging Direction" alongside the standard next-step guidance. */
function applyTieBreaker(answers: Answers): Degree | null {
  // Step 1: Career Ambition (Q3).
  const q3 = answers.q3;
  if (q3 === "a") return "masters";
  if (q3 === "b" || q3 === "c") return "mba";

  // Step 2: Expected Outcome (Q10).
  const q10 = answers.q10;
  if (q10 === "a") return "masters";
  if (q10 === "b") return "mba";

  // Step 3: Career Stage & Direction (Q1 & Q8).
  const earlyCareer = answers.q1 === "a" || answers.q1 === "b";
  const experienced = answers.q1 === "c" || answers.q1 === "d";
  const specializing = answers.q8 === "a";
  const clearLeadership = answers.q8 === "b";
  if (earlyCareer && specializing) return "masters";
  if (experienced && clearLeadership) return "mba";

  // Step 4: No Clear Lean.
  return null;
}

/** Complete Decision Flow (PDF p.25). */
export function determineResult(answers: Answers): AssessmentResult {
  const raw = computeRawScores(answers);
  const percent = normalizeScores(raw);
  const diff = percent.mba - percent.masters;

  // Gate 1: both scores below 40%.
  const bothLow = percent.mba < 40 && percent.masters < 40;

  if (!bothLow && diff >= 10) {
    return { resultId: "mba-oriented", raw, percent, emergingDirection: null, primaryDegree: "mba" };
  }
  if (!bothLow && diff <= -10) {
    return { resultId: "masters-oriented", raw, percent, emergingDirection: null, primaryDegree: "masters" };
  }

  // Gate 1 (both < 40%) or Gate 4 (difference below 10 points): Exploration-First.
  return {
    resultId: "exploration-first",
    raw,
    percent,
    emergingDirection: applyTieBreaker(answers),
    primaryDegree: null,
  };
}

export function isAssessmentComplete(answers: Answers): boolean {
  return questions.every((q) => Boolean(answers[q.id]));
}

/** Suggested Lead Segmentation (PDF p.35). */
export function leadSegment(percent: Scores): string {
  if (percent.mba >= 70) return "High-Intent MBA Lead";
  if (percent.masters >= 70) return "High-Intent Master's Lead";
  if (percent.mba >= 50 && percent.mba > percent.masters) return "Emerging MBA Lead";
  if (percent.masters >= 50 && percent.masters > percent.mba) return "Emerging Master's Lead";
  return "Career-Clarification Lead";
}

/** CRM Integration payload (PDF p.34) — shape ready to hand to a CRM/API integration. */
export interface CrmPayload {
  primaryResult: string;
  mbaFit: number;
  mastersFit: number;
  degreeTypeCurrentlyConsidering: string;
  countryOfInterest: string;
  currentCareerStage: string;
  recommendedCta: string;
  leadSegment: string;
}

export function buildCrmPayload(result: AssessmentResult, resultLabel: string, lead: LeadData): CrmPayload {
  return {
    primaryResult: resultLabel,
    mbaFit: result.percent.mba,
    mastersFit: result.percent.masters,
    degreeTypeCurrentlyConsidering: lead.degreeType,
    countryOfInterest: lead.country,
    currentCareerStage: lead.careerStage,
    recommendedCta: ctaButtonLabel,
    leadSegment: leadSegment(result.percent),
  };
}
