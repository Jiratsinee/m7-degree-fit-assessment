// Source: "Find Your M7 — Degree Fit" result-card slides (Google Slides export) and
// page 52 of the original framework deck (closing M7 Consulting CTA). Copy transcribed
// verbatim; no content invented.

export type ResultId =
  | "mba-oriented"
  | "masters-oriented"
  | "experience-first-mba"
  | "experience-first-masters"
  | "exploration-first";

export type AccentKey = "blue" | "secondaryBlue" | "orange" | "navy";

export interface ResultContent {
  id: ResultId;
  label: string;
  subLabel?: string;
  tagline: string;
  accent: AccentKey;
  /** "Why You Received This Result" — one or more paragraphs. */
  whyText: string[];
  /** Emerging Degree Direction card — Experience-First results only. */
  emergingDirection?: { text: string };
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

  "experience-first-mba": {
    id: "experience-first-mba",
    label: "Experience-First",
    subLabel: "Tentatively MBA",
    tagline: "Your MBA direction is becoming clearer, but building stronger professional evidence first may help you gain more value from the degree.",
    accent: "orange",
    whyText: [
      "Your answers show growing alignment with broader business responsibility, leadership development, and strategic decision-making.",
      "However, your current profile may not yet include enough professional maturity, increasing responsibility, leadership evidence, or measurable impact for you to gain the greatest value from an MBA or compete strongly for your target programs.",
      "Strengthening these areas first can help you enter the MBA journey with a clearer story, stronger classroom contribution, and more competitive application.",
    ],
    emergingDirection: {
      text: "Your goals show stronger alignment with an MBA, but additional experience, responsibility, and evidence of impact may strengthen both your readiness and future application.",
    },
    meansHeadline: "An MBA may be the right future direction, but your profile could become stronger before you apply.",
    meansStatement: "An MBA may be the right future direction, but your profile could become stronger before you apply.",
    meansBullets: [
      "Experience-First does not mean that an MBA is unsuitable for you. It means that your goals are beginning to align with an MBA, but your current profile may still need stronger professional evidence.",
      "Your next step is to build the responsibility, leadership exposure, and measurable impact that will strengthen both your MBA experience and your future application.",
    ],
    nextStepIntro: "Over the next 12–24 months, focus on building:",
    nextStepBullets: [
      "Increasing responsibility",
      "Leadership exposure",
      "Cross-functional experience",
      "Clear professional achievements",
      "Measurable impact",
      "Stronger knowledge of your target field",
      "Evidence supporting your intended career transition",
    ],
    alternatePath:
      "While building your professional profile, you may consider short courses, certifications, stretch assignments, or leadership opportunities that strengthen the capabilities connected to your future MBA goals.",
    ctaHeading: "BUILD YOUR FUTURE MBA STRATEGY WITH M7",
    ctaSupportingText:
      "Work with an M7 admissions expert to build a focused 12–24 month profile-development roadmap for your future MBA application.",
  },

  "experience-first-masters": {
    id: "experience-first-masters",
    label: "Experience-First",
    subLabel: "Tentatively Master's",
    tagline:
      "Your Master's direction is becoming clearer, but building stronger subject knowledge and relevant evidence first may help you choose and pursue the right program.",
    accent: "orange",
    whyText: [
      "Your answers show growing alignment with focused expertise, specialist capability, and a clearly defined professional field.",
      "However, your current profile may not yet include enough relevant experience, subject exposure, academic preparation, or evidence of commitment to confirm the right specialization and compete strongly for your target programs.",
      "Building these foundations first can help you make a more confident program choice, present a clearer academic and career story, and gain greater value from the degree.",
    ],
    emergingDirection: {
      text: "Your goals show stronger alignment with a Specialized Master's, but further subject exploration, relevant experience, and academic preparation may strengthen your direction and application.",
    },
    meansHeadline: "A Specialized Master's may be the right future direction, but your profile could become more focused and competitive.",
    meansStatement: "A Specialized Master's may be the right future direction, but your profile could become more focused and competitive.",
    meansBullets: [
      "Experience-First does not mean that a Specialized Master's is unsuitable for you. It means that your interest in a specialist field is beginning to take shape, but you may need stronger evidence that this is the right academic and professional direction.",
      "Your next step is to build relevant exposure, subject knowledge, and achievements that connect clearly to your intended field.",
      "This preparation can help you choose the right specialization and explain why the degree is necessary for your next career step.",
    ],
    nextStepIntro: "Over the next 6–18 months, focus on building:",
    nextStepBullets: [
      "Relevant internships or professional exposure",
      "Projects connected to your intended field",
      "Stronger technical, analytical, or subject-specific capabilities",
      "Academic preparation for your target programs",
      "Clear evidence of interest and commitment",
      "A stronger understanding of potential career outcomes",
      "Achievements that demonstrate your ability to apply what you have learned",
    ],
    alternatePath:
      "While continuing to build your profile, you may consider a short course, certification, internship, research experience, or relevant project in your target field. These experiences can help you test your interest, strengthen your academic or technical foundation, and provide clearer evidence for your future application.",
    ctaHeading: "BUILD YOUR FUTURE MASTER'S STRATEGY WITH M7",
    ctaSupportingText: "Work with an M7 admissions expert to identify the right specialization and build a focused 6–18 month profile-development roadmap.",
  },

  "exploration-first": {
    id: "exploration-first",
    label: "Exploration-First",
    tagline: "Before choosing a degree, your most valuable next step is clarifying what you want graduate school to help you achieve.",
    accent: "navy",
    whyText: [
      "Your answers suggest that you are open to graduate study and interested in several possible directions, but there is not yet a clear pattern showing whether your future would be better served by broad business leadership or deeper specialist expertise.",
      "You may be thinking about graduate school because you want greater career progress, a change in direction, or access to new opportunities. However, the connection between the degree, your target role, and your longer-term direction may still need further clarification.",
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

/** Tie-breaker Step 4 ("Mixed Fit") — inserted into the primary result when MBA Fit and
 *  Master's Fit are exactly equal after all other tie-breakers are applied. */
export const mixedFitNote =
  "You show meaningful fit with both paths. Your final decision should depend on whether your next step requires broader business leadership or deeper specialist expertise.";

/** Closing brand CTA shown beneath every result (PDF page 52). */
export const closingCta = {
  eyebrow: "Ready to",
  headline: "Find Your M7?",
  subhead: "Complete your full M7",
  lines: ["We don't help you choose university.", "We help you design a future worth choosing."],
};
