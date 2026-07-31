import { useMemo } from "react";
import { AssessmentProvider, useAssessment } from "./state/AssessmentContext";
import { IntroScreen } from "./components/IntroScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { LeadFormScreen } from "./components/LeadFormScreen";
import { ResultScreen } from "./components/ResultScreen";
import { determineResult } from "./logic/scoring";
import { questions } from "./data/questions";

function AssessmentFlow() {
  const { screen, questionIndex, answers, lead, startAssessment, selectAnswer, goNext, goPrev, submitLead, restart } =
    useAssessment();

  const result = useMemo(() => {
    if (screen !== "result") return null;
    return determineResult(answers);
  }, [screen, answers]);

  if (screen === "intro") {
    return <IntroScreen onStart={startAssessment} />;
  }

  if (screen === "question") {
    const question = questions[questionIndex];
    return (
      <QuestionScreen
        questionIndex={questionIndex}
        selectedChoiceId={answers[question.id]}
        onSelect={selectAnswer}
        onNext={goNext}
        onPrev={goPrev}
      />
    );
  }

  if (screen === "lead") {
    return <LeadFormScreen initialData={lead} onSubmit={submitLead} onPrev={goPrev} />;
  }

  if (screen === "result" && result) {
    return <ResultScreen result={result} respondentName={lead.name} onRestart={restart} />;
  }

  return null;
}

function App() {
  return (
    <AssessmentProvider>
      <AssessmentFlow />
    </AssessmentProvider>
  );
}

export default App;
