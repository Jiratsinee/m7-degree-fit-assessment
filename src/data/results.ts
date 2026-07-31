// Source: "Find Your M7 — Degree Fit" PDF, pages 39-49 (Result Cards) and page 52
// (closing M7 Consulting CTA). Copy transcribed verbatim; no content invented.

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
  emergingDirection?: { title: string; text: string };
  /** "What This Means for Your Degree Choice" */
  meansHeadline?: string;
  meansStatement: string;
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
  resolveQuestion: string;
  ctaText: string;
}

export const results: Record<ResultId, ResultContent> = {
  "mba-oriented": {
    id: "mba-oriented",
    label: "MBA-Oriented",
    tagline:
      "You are likely to thrive in a degree that develops broad business judgment, leadership capability, and access to a strong professional network.",
    accent: "blue",
    whyText: [
      "Your answers suggest that you are not only looking to develop one specific skill. You want to understand how different parts of a business connect, make decisions in complex situations, and move toward roles with greater responsibility. You are also likely to value learning through real business cases, exchanging perspectives with professionals from different industries, and building a network that may support a career transition or leadership progression.",
    ],
    meansHeadline: "An MBA is currently more aligned with your direction than a Specialized Master's.",
    meansStatement: "An MBA is currently more aligned with your direction than a Specialized Master's.",
    meansBullets: [
      "Leadership or general management",
      "Career transformation",
      "Consulting, banking, or management-track roles",
      "Cross-functional business perspective",
      "Professional networks and recruiting access",
      "Broader strategic decision-making",
    ],
    nextStepIntro: "Begin identifying the type of MBA program that aligns with your:",
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
    resolveQuestion: "Do you need an MBA primarily to become a stronger leader, or to make a specific career transition?",
    ctaText: "Book a free strategy call — we'll map your MBA target list by goal, experience, and geography.",
  },

  "masters-oriented": {
    id: "masters-oriented",
    label: "Specialized Master's-Oriented",
    tagline:
      "You are likely to benefit most from a focused degree that develops deep expertise and prepares you for a clearly defined professional field.",
    accent: "secondaryBlue",
    whyText: [
      "Your answers suggest that you are motivated by the opportunity to develop focused knowledge and specialist capability. You are likely to enjoy analyzing problems in depth, working with specific tools or subject areas, and building a professional identity in a defined field. Rather than seeking only broad business exposure, you want expertise that can be directly connected to your target career.",
    ],
    meansHeadline: "A Specialized Master's is currently more aligned with your direction than an MBA.",
    meansStatement: "A Specialized Master's is currently more aligned with your direction than an MBA.",
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
    nextStepIntro: "Compare potential programs based on:",
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
      "An MBA may become relevant later, after you have developed stronger professional experience and want to move from a specialist role into leadership or general management.",
    resolveQuestion: "Which specific capability must you build to enter or advance in your target field?",
    ctaText: "Book a free strategy call — we'll shortlist programs by curriculum depth and recruiting outcomes.",
  },

  "experience-first-mba": {
    id: "experience-first-mba",
    label: "Experience-First",
    subLabel: "Tentatively MBA",
    tagline:
      "Your direction is beginning to take shape, but building stronger experience first may help you gain more value from graduate school.",
    accent: "orange",
    whyText: [
      "Your answers suggest that you are beginning to understand the direction in which you want to grow. You may already show meaningful fit with an MBA or Specialized Master's, but your current profile may not yet include enough experience, achievement, leadership evidence, or relevant preparation for you to gain the greatest value from the degree or compete strongly for your target programs.",
    ],
    emergingDirection: {
      title: "Future MBA Fit",
      text: "Stronger alignment with an MBA than a Specialized Master's — but more experience or evidence is needed before applying.",
    },
    meansStatement: "Your degree direction may be right, but your timing could become stronger.",
    meansBullets: [
      "Experience-First does not mean graduate school is unsuitable for you.",
      "It means the next step may be to strengthen the profile you'll eventually bring into the classroom and application.",
    ],
    nextStepIntro: "Over the next 12–24 months, focus on building:",
    nextStepBullets: [
      "Increasing responsibility",
      "Leadership exposure",
      "Relevant projects",
      "Clear professional achievements",
      "Measurable impact",
      "Stronger knowledge of your target field",
      "Evidence supporting your intended career transition",
    ],
    alternatePath:
      "When your goal requires an urgent technical capability, you may consider a short course, certification, or an early-career Specialized Master's while continuing to build professional experience.",
    resolveQuestion: "What experience would make your future application significantly stronger than it is today?",
    ctaText: "Book a free strategy call — we'll build your 12–24 month profile-development roadmap.",
  },

  "experience-first-masters": {
    id: "experience-first-masters",
    label: "Experience-First",
    subLabel: "Tentatively Master's",
    tagline:
      "Your direction is beginning to take shape, but building stronger experience first may help you gain more value from graduate school.",
    accent: "orange",
    whyText: [
      "Your answers suggest that you are beginning to identify the field, skills, or professional direction you want to pursue.",
      "You already show meaningful alignment with a Specialized Master's, particularly through your interest in developing deeper expertise and building capabilities that connect to a specific career path. However, your current profile may not yet include enough relevant experience, practical exposure, academic preparation, or evidence of commitment to compete strongly for your target programs.",
      "Building these foundations first can help you choose the right specialization, present a more convincing application, and gain greater value from the degree.",
    ],
    emergingDirection: {
      title: "Future Specialized Master's Fit",
      text: "Stronger alignment with a Specialized Master's, but more relevant experience or evidence is needed before applying.",
    },
    meansStatement: "Your degree direction may be right, but your profile could become more focused and competitive.",
    meansBullets: [
      "Experience-First does not mean that a Specialized Master's is unsuitable for you.",
      "It means that your interest in a specialist field is beginning to take shape, but you may need stronger evidence that this is the right long-term direction.",
      "Your next step is to build relevant exposure, skills, and achievements that connect clearly to your intended field of study.",
      "This preparation can help you identify the right specialization and demonstrate why the degree is necessary for your next career step.",
    ],
    nextStepIntro: "Over the next 6–18 months, focus on building:",
    nextStepBullets: [
      "Relevant internships or professional exposure",
      "Projects connected to your intended field",
      "Stronger technical or analytical capabilities",
      "Academic preparation for your target programs",
      "Clear evidence of interest and commitment",
      "A stronger understanding of potential career outcomes",
      "Achievements that demonstrate your ability to apply what you have learned",
    ],
    alternatePath:
      "While continuing to build your profile, you may consider taking a short course, certification, internship, or relevant project in your target field. These experiences can help you test whether the subject genuinely fits your interests, strengthen your technical foundation, and provide clearer evidence for your future application.",
    resolveQuestion: "What experience or evidence would confirm that this is the right field for you to specialize in?",
    ctaText:
      "Book a free strategy call — we'll help you identify the right specialization and build a focused 6–18 month profile-development roadmap.",
  },

  "exploration-first": {
    id: "exploration-first",
    label: "Exploration-First",
    tagline: "Before choosing a degree, your most valuable next step is clarifying what you want graduate school to help you achieve.",
    accent: "navy",
    whyText: [
      "Your answers suggest that you are interested in graduate study and open to several possibilities, but there is not yet a consistent pattern showing whether your future requires broad business leadership or deeper specialist expertise. You may be considering graduate school because you want greater career progress, a change in direction, or access to new opportunities — but the connection between the degree, your target role, and your longer-term direction may still need further clarification.",
    ],
    meansHeadline: "Do not begin with university rankings or a school list.",
    meansStatement: "It is currently too early to conclude that either an MBA or Specialized Master's is clearly the better fit.",
    meansBullets: [
      "What you want to change in your career",
      "What type of work you want to do",
      "Whether your main gap is skill, experience, network, or direction",
      "Whether a graduate degree is necessary for the target outcome",
      "What you need to be able to do after graduation",
    ],
    nextStepIntro: "Begin with:",
    nextStepFlow: ["Career Direction", "Degree Need", "Program Type", "School Selection"],
    benefitFrom: [
      "Trying a new project or responsibility",
      "Speaking with professionals in target industries",
      "Reviewing job descriptions",
      "Taking a short course",
      "Comparing MBA and Master's curricula",
      "Completing a career-clarification session",
    ],
    resolveQuestion: "What do you want to be able to do after graduation that you cannot do today?",
    ctaText: "Book a free career-clarification session — before comparing any schools or rankings.",
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
