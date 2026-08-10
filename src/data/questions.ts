// Source: "Find Your M7 — Framework Series 1: Degree Fit" (ver 2.1, M7 Consulting)
// Transcribed verbatim from the assessment PDF (pages 9-20).
//
// SCORING NOTE: unlike v1 of this deck, the v2 question slides do not print an explicit
// points table — each choice only carries a qualitative "M7 Perspective" note. The score
// model (MAX_RAW = 22/22 over 11 questions, i.e. up to 2 points per question) is stated on
// page 22. Per-choice point values below are inferred from each M7 Perspective's directional
// language (a clear single-degree recommendation scores 2 points to that dimension; language
// describing both paths, "depends on...", or an unresolved/exploring stance scores 0/0) and
// cross-checked against the explicit lean hints the deck gives for Q3 and Q10 in the
// Tie-Breaker Logic (page 26) — both check out under this rule, as does the fact that Option A
// is the Master's-leaning choice on every single question, a consistent pattern across the set.

export type ScoreKey = "mba" | "masters";

export type ScoreDelta = Partial<Record<ScoreKey, number>>;

export interface Choice {
  id: string;
  text: string;
  /**
   * M7's rationale for this choice. Intentionally NOT shown on the question screen — it
   * would telegraph which answer points toward which degree. Kept as reference data (the
   * source for each choice's scores below, and useful context for the result copy).
   */
  m7Perspective: string;
  scores: ScoreDelta;
}

export interface Question {
  id: string; // q1..q11
  number: number; // 1-11
  text: string;
  choices: Choice[];
}

export const questions: Question[] = [
  {
    id: "q1",
    number: 1,
    text: "Where are you currently in your professional journey?",
    choices: [
      {
        id: "a",
        text: "I'm a student or recent graduate (0–1 year).",
        m7Perspective:
          "A specialized Master's is often the strongest first step. It helps you build expertise and launch your career before investing in broader leadership education.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "I've started building my career (1–3 years).",
        m7Perspective:
          "You're at a transition point. A Master's can accelerate your career today, while an MBA may become more valuable after gaining additional leadership experience.",
        scores: {},
      },
      {
        id: "c",
        text: "I have 3–6 years of professional experience.",
        m7Perspective:
          "This is typically the ideal stage to consider an MBA. You have enough experience to contribute meaningfully in class while maximizing the program's career impact.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "I already manage teams, projects, or business outcomes.",
        m7Perspective: "An MBA can help you move from operational leadership to strategic leadership and prepare you for executive-level responsibilities.",
        scores: { mba: 2 },
      },
    ],
  },
  {
    id: "q2",
    number: 2,
    text: "What is your primary reason for pursuing graduate school?",
    choices: [
      {
        id: "a",
        text: "To become an expert in my field.",
        m7Perspective: "A specialized Master's is usually the best path when your goal is depth of expertise.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "To accelerate my career progression.",
        m7Perspective: "An MBA is designed for professionals looking to unlock bigger responsibilities and leadership opportunities.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "To switch industries or job functions.",
        m7Perspective:
          "Career transitions often require both a new network and a new narrative — making an MBA or a selected career-focused Master's worth exploring.",
        scores: {},
      },
      {
        id: "d",
        text: "To expand my international opportunities.",
        m7Perspective: "Both pathways can open global doors. The better choice depends on the career you ultimately want to build.",
        scores: {},
      },
    ],
  },
  {
    id: "q3",
    number: 3,
    text: "Which career ambition sounds most like you?",
    choices: [
      {
        id: "a",
        text: "I want to become a leading specialist.",
        m7Perspective: "Master's programs are designed to help you develop world-class expertise.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "I want to lead businesses and organizations.",
        m7Perspective: "Leadership development is one of the strongest reasons to pursue an MBA.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "I want to build my own company.",
        m7Perspective: "Entrepreneurs often benefit from MBA programs because they combine strategy, leadership, finance, and powerful peer networks.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "I'm still exploring different possibilities.",
        m7Perspective: "Before choosing a degree, you may first need greater clarity about your long-term direction.",
        scores: {},
      },
    ],
  },
  {
    id: "q4",
    number: 4,
    text: "Which outcome matters most to you?",
    choices: [
      {
        id: "a",
        text: "Building technical expertise.",
        m7Perspective: "A specialized Master's offers the greatest return when expertise is your priority.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "Developing leadership skills.",
        m7Perspective: "MBA programs are built around developing leaders rather than specialists.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "Building a global professional network.",
        m7Perspective: "Top MBA programs are particularly valuable for peer learning and lifelong networks.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "Finding clarity about my future.",
        m7Perspective: "The right degree begins with the right direction — not simply the highest ranking.",
        scores: {},
      },
    ],
  },
  {
    id: "q5",
    number: 5,
    text: "Which learning style do you enjoy most?",
    choices: [
      {
        id: "a",
        text: "Academic and technical learning.",
        m7Perspective: "This learning style aligns naturally with most specialized Master's programs.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "Business cases and strategic discussions.",
        m7Perspective: "Case-based learning is a hallmark of MBA education.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "Working with diverse teams.",
        m7Perspective: "Both MBA and Master's programs value collaboration, but MBA classrooms rely heavily on peer learning.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "Learning through real-world business exposure.",
        m7Perspective: "Experiential learning exists in both pathways — the right choice depends on your career stage.",
        scores: {},
      },
    ],
  },
  {
    id: "q6",
    number: 6,
    text: "What would you value most from the people in your classroom?",
    choices: [
      {
        id: "a",
        text: "People with similar academic or technical interests.",
        m7Perspective: "Learning alongside peers with shared technical interests can deepen your expertise, making a specialized Master's a natural fit.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "People who can challenge how I think about business problems.",
        m7Perspective: "MBA classrooms are designed around perspectives that challenge your assumptions and strengthen your strategic thinking.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "People from different industries, functions, and countries.",
        m7Perspective: "Diverse peer perspectives are one of the greatest strengths of an MBA, expanding both how you think and who you can learn from.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "People who are also exploring what direction suits them.",
        m7Perspective: "A collaborative environment can support your exploration, but greater clarity will help you choose the degree that creates the most value.",
        scores: {},
      },
    ],
  },
  {
    id: "q7",
    number: 7,
    text: "How would you describe your professional experience?",
    choices: [
      {
        id: "a",
        text: "Mostly internships, research, or university projects.",
        m7Perspective: "You're in a strong position to leverage a Master's before accumulating more professional experience.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "I've developed solid experience as an individual contributor.",
        m7Perspective: "Both MBA and Master's remain viable options depending on your next career objective.",
        scores: {},
      },
      {
        id: "c",
        text: "I've led major projects.",
        m7Perspective: "Leadership ownership strengthens both your MBA readiness and admissions competitiveness.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "I've managed teams or business outcomes.",
        m7Perspective: "You already have valuable leadership experiences that MBA classrooms are designed to build upon.",
        scores: { mba: 2 },
      },
    ],
  },
  {
    id: "q8",
    number: 8,
    text: "How clear is your long-term career direction?",
    choices: [
      {
        id: "a",
        text: "I know exactly what I want to specialize in.",
        m7Perspective: "Specialization usually points toward a Master's.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "I know where I want my career to go.",
        m7Perspective: "Clear career direction is one of the strongest foundations for a successful MBA.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "I'm still figuring it out.",
        m7Perspective: "Choosing a degree before defining your direction often leads to unnecessary detours.",
        scores: {},
      },
      {
        id: "d",
        text: "I'm planning a major career change.",
        m7Perspective: "An MBA is frequently used as a platform for career transformation.",
        scores: { mba: 2 },
      },
    ],
  },
  {
    id: "q9",
    number: 9,
    text: "Which opportunity excites you most?",
    choices: [
      {
        id: "a",
        text: "Becoming an expert.",
        m7Perspective: "Master's programs help develop deep expertise within a specific discipline.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "Leading organizations.",
        m7Perspective: "Leadership is one of the defining outcomes of an MBA.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "Working internationally.",
        m7Perspective: "Both pathways can support international careers — the right one depends on your long-term goals.",
        scores: {},
      },
      {
        id: "d",
        text: "Solving complex business challenges.",
        m7Perspective: "This strategic mindset naturally aligns with MBA education.",
        scores: { mba: 2 },
      },
    ],
  },
  {
    id: "q10",
    number: 10,
    text: "What do you expect your graduate degree to do for you?",
    choices: [
      {
        id: "a",
        text: "Increase my technical credibility.",
        m7Perspective: "A specialized Master's is often the fastest route toward becoming highly competitive in technical roles.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "Prepare me for senior leadership.",
        m7Perspective: "MBA programs are designed to accelerate leadership progression.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "Expand my career opportunities globally.",
        m7Perspective: "Global mobility depends less on the degree itself and more on how well it supports your career strategy.",
        scores: {},
      },
      {
        id: "d",
        text: "Create more long-term career options.",
        m7Perspective: "The best degree is the one that creates the greatest future optionality — not necessarily the most prestigious one.",
        scores: {},
      },
    ],
  },
  {
    id: "q11",
    number: 11,
    text: "Which statement resonates with you the most?",
    choices: [
      {
        id: "a",
        text: "I want to master my field.",
        m7Perspective: "Master's programs help you deepen your expertise and become a recognized specialist.",
        scores: { masters: 2 },
      },
      {
        id: "b",
        text: "I want to become a leader.",
        m7Perspective: "Leadership is exactly what MBA programs are designed to develop.",
        scores: { mba: 2 },
      },
      {
        id: "c",
        text: "I want to reinvent my career.",
        m7Perspective: "An MBA can provide the platform, network, and credibility needed to make a successful career transition.",
        scores: { mba: 2 },
      },
      {
        id: "d",
        text: "I want to maximize my long-term potential.",
        m7Perspective: "The most important decision isn't choosing an MBA or a Master's — it's choosing the path that best aligns with the future you want to build.",
        scores: {},
      },
    ],
  },
];

export const TOTAL_QUESTIONS = questions.length;

// Maximum attainable raw score per dimension (PDF p.22): 11 questions × 2 points.
export const MAX_RAW: Record<ScoreKey, number> = {
  mba: 22,
  masters: 22,
};

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
