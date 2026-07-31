import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { TOTAL_QUESTIONS } from "../data/questions";
import { emptyLeadData, type LeadData } from "../data/leadForm";
import type { Answers } from "../logic/scoring";

export type Screen = "intro" | "question" | "lead" | "result";

interface PersistedState {
  screen: Screen;
  questionIndex: number;
  answers: Answers;
  lead: LeadData;
}

const STORAGE_KEY = "m7-degree-fit-assessment/v1";

const initialState: PersistedState = {
  screen: "intro",
  questionIndex: 0,
  answers: {},
  lead: emptyLeadData,
};

function loadPersistedState(): PersistedState {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      screen: parsed.screen ?? initialState.screen,
      questionIndex: parsed.questionIndex ?? initialState.questionIndex,
      answers: parsed.answers ?? initialState.answers,
      lead: { ...emptyLeadData, ...parsed.lead },
    };
  } catch {
    return initialState;
  }
}

interface AssessmentContextValue extends PersistedState {
  startAssessment: () => void;
  selectAnswer: (questionId: string, choiceId: string) => void;
  goNext: () => void;
  goPrev: () => void;
  submitLead: (data: LeadData) => void;
  restart: () => void;
  goToIntro: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(loadPersistedState);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // sessionStorage may be unavailable (e.g. private browsing quota) — fail silently,
      // the assessment still works, it just won't survive a refresh.
    }
  }, [state]);

  const startAssessment = useCallback(() => {
    setState((s) => ({ ...s, screen: "question", questionIndex: 0 }));
  }, []);

  const selectAnswer = useCallback((questionId: string, choiceId: string) => {
    setState((s) => ({ ...s, answers: { ...s.answers, [questionId]: choiceId } }));
  }, []);

  const goNext = useCallback(() => {
    setState((s) => {
      if (s.screen === "question") {
        if (s.questionIndex < TOTAL_QUESTIONS - 1) {
          return { ...s, questionIndex: s.questionIndex + 1 };
        }
        return { ...s, screen: "lead" };
      }
      return s;
    });
  }, []);

  const goPrev = useCallback(() => {
    setState((s) => {
      if (s.screen === "question") {
        if (s.questionIndex > 0) {
          return { ...s, questionIndex: s.questionIndex - 1 };
        }
        return { ...s, screen: "intro" };
      }
      if (s.screen === "lead") {
        return { ...s, screen: "question", questionIndex: TOTAL_QUESTIONS - 1 };
      }
      return s;
    });
  }, []);

  const submitLead = useCallback((data: LeadData) => {
    setState((s) => ({ ...s, lead: data, screen: "result" }));
  }, []);

  const restart = useCallback(() => {
    setState(initialState);
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const goToIntro = useCallback(() => {
    setState((s) => ({ ...s, screen: "intro" }));
  }, []);

  const value = useMemo<AssessmentContextValue>(
    () => ({ ...state, startAssessment, selectAnswer, goNext, goPrev, submitLead, restart, goToIntro }),
    [state, startAssessment, selectAnswer, goNext, goPrev, submitLead, restart, goToIntro],
  );

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

export function useAssessment(): AssessmentContextValue {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used within an AssessmentProvider");
  return ctx;
}
