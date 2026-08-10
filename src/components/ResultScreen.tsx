import type { AssessmentResult } from "../logic/scoring";
import { results, closingCta, ctaButtonLabel, ctaLink, emergingDirectionText, contactUsLabel, contactUsLink } from "../data/results";
import type { ScoreKey } from "../data/questions";
import { M7Logo } from "./M7Logo";
import "./ResultScreen.css";

interface ResultScreenProps {
  result: AssessmentResult;
  respondentName: string;
  onRestart: () => void;
}

const scoreOrder: { key: ScoreKey; label: string }[] = [
  { key: "mba", label: "MBA Fit" },
  { key: "masters", label: "Master's Fit" },
];

export function ResultScreen({ result, respondentName, onRestart }: ResultScreenProps) {
  const content = results[result.resultId];
  const firstName = respondentName.trim().split(/\s+/)[0];

  function isMuted(key: ScoreKey): boolean {
    return result.primaryDegree !== key;
  }

  return (
    <div className={`result result--${content.accent}`}>
      <header className="result__header">
        <div className="container">
          <p className="result__eyebrow">Your Degree Fit Result</p>
          <h1 className="result__title">{content.label}</h1>
          <p className="result__tagline">{content.tagline}</p>
          {firstName && <p className="result__greeting">Prepared for {firstName}</p>}
        </div>
      </header>

      <main className="container result__main">
        <div className="result__columns">
          <section aria-labelledby="snapshot-heading">
            <h2 id="snapshot-heading" className="result__section-title">
              Your Score Snapshot
            </h2>
            <table className="result__table">
              <thead>
                <tr>
                  <th scope="col">Score</th>
                  <th scope="col">Result</th>
                </tr>
              </thead>
              <tbody>
                {scoreOrder.map(({ key, label }) => (
                  <tr key={key}>
                    <th scope="row">{label}</th>
                    <td className={isMuted(key) ? "is-muted" : "is-accent"}>{result.percent[key]}%</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {result.emergingDirection && (
              <div className="result__emerging">
                <p className="result__emerging-label">Emerging Direction</p>
                <p className="result__emerging-text">{emergingDirectionText[result.emergingDirection]}</p>
              </div>
            )}
          </section>

          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="result__section-title">
              Why You Received This Result
            </h2>
            <div className="callout result__why">
              {content.whyText.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>

        <div className="result__columns">
          <section aria-labelledby="means-heading">
            <h2 id="means-heading" className="result__section-title">
              What This Result Means for You
            </h2>
            {content.meansHeadline ? (
              <div className="result__means-box">
                <p>{content.meansHeadline}</p>
              </div>
            ) : (
              <p className="result__means-statement">{content.meansStatement}</p>
            )}
            {content.meansIntro && <p className="result__means-intro">{content.meansIntro}</p>}
            {content.meansBullets && (
              <ul className="result__bullets">
                {content.meansBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            {content.alternatePath && (
              <div className="result__alt">
                <p className="eyebrow result__alt-label">Alternative Path</p>
                <p>{content.alternatePath}</p>
              </div>
            )}
          </section>

          <section aria-labelledby="next-heading">
            <h2 id="next-heading" className="result__section-title">
              Recommended Next Step
            </h2>
            <div className="result__next">
              <p className="result__next-intro">{content.nextStepIntro}</p>
              {content.nextStepBullets && (
                <ul className="result__bullets">
                  {content.nextStepBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {content.nextStepFlow && (
                <ol className="result__flow">
                  {content.nextStepFlow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}
            </div>

            {content.benefitFrom && (
              <div className="result__benefit">
                <p className="result__benefit-title">During Exploration, You May Benefit From</p>
                <p className="result__benefit-text">{content.benefitFrom.join(" · ")}</p>
              </div>
            )}
          </section>
        </div>

        <section className="result__cta-block" aria-labelledby="cta-heading">
          <p id="cta-heading" className="result__cta-label">
            {content.ctaHeading}
          </p>
          <a className="result__cta-link" href={ctaLink} target="_blank" rel="noopener noreferrer">
            {ctaButtonLabel}
            <span className="result__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <p className="result__cta-text">{content.ctaSupportingText}</p>
        </section>
      </main>

      <footer className="result__closing">
        <div className="container result__closing-inner">
          <div>
            <M7Logo />
            <p className="result__closing-eyebrow">{closingCta.eyebrow}</p>
            <h2 className="result__closing-headline">{closingCta.headline}</h2>
            <p className="result__closing-sub">{closingCta.subhead}</p>
          </div>
          <div className="result__closing-lines">
            {closingCta.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="container result__restart-row">
          <button type="button" className="btn btn-on-dark" onClick={onRestart}>
            Retake the Assessment
          </button>
          <a className="btn btn-primary" href={contactUsLink} target="_blank" rel="noopener noreferrer">
            {contactUsLabel}
          </a>
        </div>
      </footer>
    </div>
  );
}
