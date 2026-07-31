import { getSection, questions, TOTAL_QUESTIONS } from "../data/questions";
import { ProgressBar } from "./ProgressBar";
import "./QuestionScreen.css";

interface QuestionScreenProps {
  questionIndex: number; // 0-based
  selectedChoiceId: string | undefined;
  onSelect: (questionId: string, choiceId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function QuestionScreen({ questionIndex, selectedChoiceId, onSelect, onNext, onPrev }: QuestionScreenProps) {
  const question = questions[questionIndex];
  const section = getSection(question.sectionId)!;
  const questionNumber = questionIndex + 1;
  const sessionQuestionIndex = section.questionIds.indexOf(question.id) + 1;

  return (
    <div className="question-screen">
      <div className="question-screen__part container">
        <h2 className="question-screen__part-title">
          Part {section.number}: <span>{section.title}</span>
        </h2>
      </div>

      <div className="question-screen__body">
        <div className="container question-screen__body-inner">
          <ProgressBar current={questionNumber} total={TOTAL_QUESTIONS} />

          <div className="question-screen__meta">
            <span className="pill-badge">
              Session {section.number} · Question {sessionQuestionIndex} of {section.questionIds.length}
            </span>
            <span className="question-screen__overall" aria-live="polite">
              Question {questionNumber} of {TOTAL_QUESTIONS}
            </span>
          </div>

          <fieldset className="question-screen__fieldset">
            <legend className="question-screen__question">{question.text}</legend>
            <div className="question-screen__choices" role="radiogroup" aria-label={question.text}>
              {question.choices.map((choice) => {
                const inputId = `${question.id}-${choice.id}`;
                const checked = selectedChoiceId === choice.id;
                return (
                  <label
                    key={choice.id}
                    htmlFor={inputId}
                    className={`question-screen__choice${checked ? " is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      id={inputId}
                      name={question.id}
                      value={choice.id}
                      checked={checked}
                      onChange={() => onSelect(question.id, choice.id)}
                    />
                    <span className="question-screen__choice-letter">{choice.id.toUpperCase()}</span>
                    <span className="question-screen__choice-text">{choice.text}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="question-screen__nav">
            <button type="button" className="btn btn-on-dark" onClick={onPrev}>
              ← Previous
            </button>
            <button type="button" className="btn btn-primary" onClick={onNext} disabled={!selectedChoiceId}>
              {questionNumber === TOTAL_QUESTIONS ? "Continue to Your Details" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
