// Source: "Find Your M7 — Framework Series 1: Degree Fit" PDF (ver 2.1), pages 28-33
// (Result Cards), page 26 (Tie-Breaker Logic), and page 36 (closing M7 Consulting CTA).
// Copy transcribed verbatim; no content invented beyond what page 26 requires (see
// emergingDirectionText below).

export type ResultId = "mba-oriented" | "masters-oriented" | "exploration-first";

export type AccentKey = "blue" | "secondaryBlue" | "navy";

export interface ResultContent {
  id: ResultId;
  label: string;
  tagline: string;
  accent: AccentKey;
  /** "Why You Received This Result" — one or more paragraphs. */
  whyText: string[];
  /** "What This Result Means for You" */
  meansHeadline?: string;
  meansStatement: string;
  /** Lead-in sentence before meansBullets, e.g. "An MBA may be especially relevant if your next step involves:" */
  meansIntro?: string;
  meansBullets?: string[];
  /** "Recommended Next Step" */
  nextStepIntro: string;
  nextStepBullets?: string[];
  /** Exploration-First only: the four-stage strategic flow. */
  nextStepFlow?: string[];
  /** Exploration-First only: "During Exploration, You May Benefit From" */
  benefitFrom?: string[];
  /** "Alternative Path" — absent for Exploration-First. */
  alternatePath?: string;
  /** M7 CTA block heading, e.g. "BUILD YOUR MBA STRATEGY WITH M7" */
  ctaHeading: string;
  /** Supporting sentence under the "Book a Strategic Consultation" link. */
  ctaSupportingText: string;
}

/** Shared M7 Consulting CTA link, used on every result page. */
export const ctaButtonLabel = "Book a Strategic Consultation";
export const ctaLink = "https://bit.ly/DegreeFit_M7Framework";

export const results: Record<ResultId, ResultContent> = {
  "mba-oriented": {
    id: "mba-oriented",
    label: "MBA-Oriented",
    tagline: "Your goals, career direction, and preferred learning environment show stronger alignment with an MBA.",
    accent: "blue",
    whyText: [
      "Your answers show a consistent preference for broader business responsibility, strategic decision-making, and learning through real-world cases and diverse professional perspectives.",
      "Rather than developing only one specialist skill, you appear to be looking for the business judgment, leadership capability, and professional network needed to move into a larger role or make a meaningful career transition.",
    ],
    meansHeadline: "An MBA is currently more aligned with your goals than a Specialized Master's.",
    meansStatement: "An MBA is currently more aligned with your goals than a Specialized Master's.",
    meansIntro: "An MBA may be especially relevant if your next step involves:",
    meansBullets: [
      "Leadership or general management",
      "Career transformation",
      "Consulting, banking, or management-track roles",
      "Cross-functional business perspective",
      "Professional networks and recruiting access",
      "Broader strategic decision-making",
    ],
    nextStepIntro: "Your next step is to define the type of MBA program that best supports your career direction, based on:",
    nextStepBullets: [
      "Career goal",
      "Years of experience",
      "Target industry",
      "Preferred geography",
      "Recruiting priorities",
      "Preferred learning environment",
    ],
    alternatePath:
      "A Specialized Master's may still be relevant when your intended career transition requires a specific technical capability, such as Data Science, Business Analytics, Quantitative Finance, or another specialist qualification.",
    ctaHeading: "BUILD YOUR MBA STRATEGY WITH M7",
    ctaSupportingText:
      "Work with an M7 admissions expert to define your MBA direction, target-school strategy, and personalized application roadmap.",
  },

  "masters-oriented": {
    id: "masters-oriented",
    label: "Specialized Master's-Oriented",
    tagline: "Your goals, career direction, and preferred learning environment show stronger alignment with a Specialized Master's.",
    accent: "secondaryBlue",
    whyText: [
      "Your answers show a consistent preference for developing focused expertise, solving problems in depth, and building capabilities that connect directly to a defined professional field.",
      "Rather than seeking broad business exposure, you appear to be looking for the specialist knowledge, practical skills, and academic depth needed to enter or advance in your target career.",
    ],
    meansHeadline: "A Specialized Master's is currently the stronger fit for the direction you want to build.",
    meansStatement: "A Specialized Master's is currently the stronger fit for the direction you want to build.",
    meansIntro: "A Specialized Master's may be especially relevant if your next step requires focused expertise in areas such as:",
    meansBullets: [
      "Business Analytics",
      "Finance",
      "Marketing",
      "Data Science",
      "Supply Chain",
      "Management Science",
      "Sustainability",
      "Technology Management",
    ],
    nextStepIntro: "Your next step is to identify the type of Specialized Master's that best supports your target career, based on:",
    nextStepBullets: [
      "Curriculum depth",
      "Technical versus applied focus",
      "Internship access",
      "Recruiting outcomes",
      "Industry alignment",
      "Geographic opportunities",
      "Graduate employment pathways",
    ],
    alternatePath:
      "An MBA may become relevant later, after you have developed stronger professional experience and want to move from specialist expertise into broader leadership or general management.",
    ctaHeading: "BUILD YOUR MASTER'S STRATEGY WITH M7 CONSULTING",
    ctaSupportingText: "Work with an M7 admissions expert to define your specialization, target programs, and personalized application roadmap.",
  },

  "exploration-first": {
    id: "exploration-first",
    label: "Exploration-First",
    tagline: "Before choosing a degree, your most valuable next step is clarifying what you want graduate school to help you achieve.",
    accent: "navy",
    whyText: [
      "Your answers suggest you're open to graduate study and interested in several possible directions, but there isn't yet a clear, consistent pattern showing whether your future is better served by broad business leadership or deeper specialist expertise. Several of your responses reflect exploration rather than a settled direction.",
    ],
    meansHeadline: "It is currently too early to conclude that either an MBA or a Specialized Master's is the clearer fit.",
    meansStatement: "It is currently too early to conclude that either an MBA or a Specialized Master's is the clearer fit.",
    meansIntro: "Before choosing a degree, it would be more valuable to clarify:",
    meansBullets: [
      "What you want to change in your career",
      "What type of work you want to do",
      "Whether your main gap is skill, experience, network, or direction",
      "Whether a graduate degree is necessary for the target outcome",
      "What you need to be able to do after graduation",
    ],
    nextStepIntro: "Do not begin with rankings or a school list. Begin with:",
    nextStepFlow: ["Career Direction", "Degree Need", "Program Type", "Target Schools"],
    benefitFrom: [
      "Trying a new project or responsibility",
      "Speaking with professionals in target industries",
      "Reviewing job descriptions",
      "Taking a short course",
      "Comparing MBA and Master's curricula",
      "Completing a career-clarification session",
    ],
    ctaHeading: "CLARIFY YOUR NEXT STEP WITH M7",
    ctaSupportingText:
      "Work with an M7 admissions expert to clarify your career direction, degree need, and next-step roadmap before comparing schools.",
  },
};

/** Emerging Direction copy (PDF p.26): surfaced on the Exploration-First result when the
 *  Tie-Breaker Logic resolves an early lean. The deck doesn't print card copy for this state
 *  (only its own qualitative rule labels and the "not a final answer" framing it explicitly
 *  requires), so the sentence below is written to match that framing exactly rather than
 *  inventing separate marketing copy. */
export const emergingDirectionText: Record<"mba" | "masters", string> = {
  mba: "Your answers show an early lean toward an MBA. This is a signal worth exploring alongside your next step below — not a final answer.",
  masters:
    "Your answers show an early lean toward a Specialized Master's. This is a signal worth exploring alongside your next step below — not a final answer.",
};

/** Closing brand CTA shown beneath every result (PDF page 36). */
export const closingCta = {
  eyebrow: "Ready to",
  headline: "Find Your M7?",
  subhead: "Complete your full M7",
  lines: ["We don't help you choose university.", "We help you design a future worth choosing."],
};
