// Source of truth: "Find Your M7 — Framework Series 1: Degree Fit" (M7 Consulting)
// Transcribed verbatim from the assessment PDF (pages 10-29).
// Score keys map to the four core dimensions computed by the assessment:
// mba (MBA Fit), masters (Master's Fit), clarity (Career Clarity), readiness (Readiness).
// A missing key means the choice contributes 0 points ("—" in the source tables).

export type ScoreKey = "mba" | "masters" | "clarity" | "readiness";

export type ScoreDelta = Partial<Record<ScoreKey, number>>;

export interface Choice {
  id: string;
  text: string;
  scores: ScoreDelta;
}

export interface Question {
  id: string; // q1..q15
  number: number; // 1-15
  sectionId: string;
  text: string;
  choices: Choice[];
}

export interface Section {
  id: string;
  number: number; // 1-5
  title: string;
  measures: string[];
  questionIds: string[];
}

export const sections: Section[] = [
  {
    id: "section-1",
    number: 1,
    title: "Where You Are Now",
    measures: [
      "Career stage",
      "Current level of responsibility",
      "Current career bottleneck",
      "Early indication of MBA or Master's readiness",
    ],
    questionIds: ["q1", "q2", "q3"],
  },
  {
    id: "section-2",
    number: 2,
    title: "Where You Want to Go",
    measures: [
      "Career direction",
      "Desired future role",
      "Specialist versus leadership orientation",
      "Clarity of career decision-making",
    ],
    questionIds: ["q4", "q5", "q6"],
  },
  {
    id: "section-3",
    number: 3,
    title: "What You Need from a Degree",
    measures: [
      "The outcome expected from graduate study",
      "Reason for considering graduate school now",
      "Connection between the degree and career direction",
      "Whether a graduate degree is strategically necessary",
    ],
    questionIds: ["q7", "q8", "q9"],
  },
  {
    id: "section-4",
    number: 4,
    title: "How You Want to Learn",
    measures: [
      "Learning style",
      "Classroom preference",
      "Preferred peer environment",
      "MBA versus Master's learning fit",
    ],
    questionIds: ["q10", "q11", "q12"],
  },
  {
    id: "section-5",
    number: 5,
    title: "How Ready You Are",
    measures: [
      "Timing",
      "Current application evidence",
      "Leadership and achievement",
      "Academic starting point",
    ],
    questionIds: ["q13", "q14", "q15"],
  },
];

export const questions: Question[] = [
  {
    id: "q1",
    number: 1,
    sectionId: "section-1",
    text: "Where are you currently in your career journey?",
    choices: [
      { id: "a", text: "I'm still in university or recently graduated.", scores: { masters: 2 } },
      {
        id: "b",
        text: "I have around 1–2 years of full-time work experience.",
        scores: { mba: 1, masters: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "I have 3 or more years of full-time work experience.",
        scores: { mba: 2, readiness: 2 },
      },
    ],
  },
  {
    id: "q2",
    number: 2,
    sectionId: "section-1",
    text: "Which description feels closest to your current role?",
    choices: [
      {
        id: "a",
        text: "I'm still learning how the industry and different roles work.",
        scores: { masters: 1 },
      },
      {
        id: "b",
        text: "I'm beginning to take ownership of projects or a specific area.",
        scores: { mba: 1, masters: 1, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "I'm responsible for making decisions, influencing others, or driving outcomes.",
        scores: { mba: 2, clarity: 2, readiness: 2 },
      },
      {
        id: "d",
        text: "My current role no longer gives me the growth or direction I'm looking for.",
        scores: { mba: 1, masters: 1, clarity: 1, readiness: 1 },
      },
    ],
  },
  {
    id: "q3",
    number: 3,
    sectionId: "section-1",
    text: "When you feel stuck at work, what is usually missing?",
    choices: [
      { id: "a", text: "A clearer understanding of what career paths are available.", scores: {} },
      {
        id: "b",
        text: "Stronger technical or functional skills.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "More confidence in making business decisions.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "d",
        text: "Access to better opportunities, people, or industries.",
        scores: { mba: 2, masters: 1, clarity: 1, readiness: 1 },
      },
    ],
  },
  {
    id: "q4",
    number: 4,
    sectionId: "section-2",
    text: "Imagine your career three years from now. Which change would feel most meaningful to you?",
    choices: [
      { id: "a", text: "I've discovered a field or role that genuinely fits me.", scores: { masters: 1 } },
      {
        id: "b",
        text: "I'm recognized for expertise in a specific area.",
        scores: { masters: 2, clarity: 2, readiness: 1 },
      },
      {
        id: "c",
        text: "I'm leading larger projects, teams, or business decisions.",
        scores: { mba: 2, clarity: 2, readiness: 1 },
      },
      {
        id: "d",
        text: "I've successfully moved into a new industry, function, or country.",
        scores: { mba: 2, masters: 1, clarity: 2, readiness: 1 },
      },
    ],
  },
  {
    id: "q5",
    number: 5,
    sectionId: "section-2",
    text: "Which type of challenge would you most enjoy working on?",
    choices: [
      {
        id: "a",
        text: "Exploring an unfamiliar problem and figuring out where to begin.",
        scores: { mba: 1, masters: 1, clarity: 1 },
      },
      {
        id: "b",
        text: "Solving a complex technical or analytical problem.",
        scores: { masters: 2, clarity: 2, readiness: 1 },
      },
      {
        id: "c",
        text: "Making decisions that involve people, markets, and business trade-offs.",
        scores: { mba: 2, clarity: 2, readiness: 1 },
      },
      {
        id: "d",
        text: "Bringing together different teams to move one goal forward.",
        scores: { mba: 2, clarity: 2, readiness: 1 },
      },
    ],
  },
  {
    id: "q6",
    number: 6,
    sectionId: "section-2",
    text: "If you received three attractive job offers today, what would help you decide?",
    choices: [
      { id: "a", text: "I would need more time to explore which path suits me.", scores: {} },
      {
        id: "b",
        text: "I would choose the role that builds the strongest specialist skills.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "I would choose the role with the clearest leadership and growth path.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "d",
        text: "I would choose the role that brings me closest to my long-term goal.",
        scores: { mba: 1, masters: 1, clarity: 2, readiness: 1 },
      },
    ],
  },
  {
    id: "q7",
    number: 7,
    sectionId: "section-3",
    text: "Which outcome would make a graduate degree feel worth the investment?",
    choices: [
      { id: "a", text: "Discovering a clearer direction for my career.", scores: {} },
      {
        id: "b",
        text: "Gaining skills I cannot easily build in my current role.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "Accessing employers, industries, or countries that are currently difficult to reach.",
        scores: { mba: 2, masters: 1, clarity: 2, readiness: 1 },
      },
      {
        id: "d",
        text: "Building the credibility and network to take on larger leadership roles.",
        scores: { mba: 2, clarity: 2 },
      },
    ],
  },
  {
    id: "q8",
    number: 8,
    sectionId: "section-3",
    text: "If graduate school were not an option next year, what would you most likely do instead?",
    choices: [
      { id: "a", text: "Try different roles or projects to understand what suits me.", scores: {} },
      {
        id: "b",
        text: "Take courses or certifications to strengthen a specific skill.",
        scores: { masters: 1, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "Look for a job with more responsibility or leadership exposure.",
        scores: { mba: 1, clarity: 2 },
      },
      {
        id: "d",
        text: "Continue pursuing the same goal through work experience and networking.",
        scores: { mba: 1, clarity: 2, readiness: 1 },
      },
    ],
  },
  {
    id: "q9",
    number: 9,
    sectionId: "section-3",
    text: "What has been pushing you to think about graduate school now?",
    choices: [
      {
        id: "a",
        text: "I see people around me moving ahead and do not want to fall behind.",
        scores: {},
      },
      {
        id: "b",
        text: "I've reached a point where my current skills are limiting me.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "A specific career opportunity requires a stronger profile or new qualification.",
        scores: { mba: 1, masters: 1, clarity: 2, readiness: 2 },
      },
      {
        id: "d",
        text: "My long-term direction is becoming clearer, and the degree feels like the next step.",
        scores: { mba: 1, masters: 1, clarity: 2, readiness: 2 },
      },
    ],
  },
  {
    id: "q10",
    number: 10,
    sectionId: "section-4",
    text: "How do you learn best?",
    choices: [
      {
        id: "a",
        text: "Lectures, technical coursework, and individual projects.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "b",
        text: "Group discussions, real-world business cases, and hands-on projects.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "Networking events, clubs, and learning from peers.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
    ],
  },
  {
    id: "q11",
    number: 11,
    sectionId: "section-4",
    text: "What would you value most from the people in your classroom?",
    choices: [
      {
        id: "a",
        text: "People with similar academic or technical interests.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "b",
        text: "People who can challenge how I think about business problems.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "People from different industries, functions, and countries.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      { id: "d", text: "People who are also exploring what direction suits them.", scores: {} },
    ],
  },
  {
    id: "q12",
    number: 12,
    sectionId: "section-4",
    text: "Which assignment would you be most excited to work on?",
    choices: [
      {
        id: "a",
        text: "Build a model, analysis, or technical solution.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "b",
        text: "Recommend a strategy for a real company facing a difficult decision.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "Lead a team with different opinions toward one final recommendation.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      { id: "d", text: "Research several career paths and identify which one fits me best.", scores: {} },
    ],
  },
  {
    id: "q13",
    number: 13,
    sectionId: "section-5",
    text: "What would make the timing of a degree work best for you?",
    choices: [
      {
        id: "a",
        text: "Starting soon so I can enter the job market with stronger skills.",
        scores: { masters: 2, clarity: 1, readiness: 2 },
      },
      {
        id: "b",
        text: "Having enough time to complete an internship and explore a new career path.",
        scores: { mba: 2, masters: 1, clarity: 2, readiness: 1 },
      },
      {
        id: "c",
        text: "Waiting until I have stronger work achievements to bring into the classroom.",
        scores: { mba: 1, clarity: 2 },
      },
      { id: "d", text: "I'm still unsure what the degree should help me achieve.", scores: {} },
    ],
  },
  {
    id: "q14",
    number: 14,
    sectionId: "section-5",
    text: "Which statement best reflects what you could talk about in an application today?",
    choices: [
      {
        id: "a",
        text: "I'm still building experiences that show what I'm interested in.",
        scores: {},
      },
      {
        id: "b",
        text: "I have a few relevant projects, courses, or internships.",
        scores: { masters: 2, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "I can point to clear achievements or increasing responsibility at work.",
        scores: { mba: 1, masters: 1, clarity: 2, readiness: 2 },
      },
      {
        id: "d",
        text: "I have led people, influenced decisions, or created measurable impact.",
        scores: { mba: 2, clarity: 2, readiness: 2 },
      },
    ],
  },
  {
    id: "q15",
    number: 15,
    sectionId: "section-5",
    text: "How would you describe your academic starting point?",
    choices: [
      {
        id: "a",
        text: "My academic record and test performance are among my strengths.",
        scores: { mba: 1, masters: 1, clarity: 1, readiness: 2 },
      },
      {
        id: "b",
        text: "My academic profile is solid, although there may be areas to improve.",
        scores: { mba: 1, masters: 1, clarity: 1, readiness: 1 },
      },
      {
        id: "c",
        text: "My work experience or practical achievements are stronger than my academic record.",
        scores: { mba: 2, clarity: 1, readiness: 1 },
      },
      { id: "d", text: "I have not reviewed the academic requirements yet.", scores: {} },
    ],
  },
];

export const TOTAL_QUESTIONS = questions.length;

// Maximum attainable raw score per dimension (stated in the PDF, verified against the
// per-question maximums above).
export const MAX_RAW: Record<ScoreKey, number> = {
  mba: 28,
  masters: 27,
  clarity: 23,
  readiness: 21,
};

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

export function getSection(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}
