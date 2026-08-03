import { M7Logo } from "./M7Logo";
import "./IntroScreen.css";

interface IntroScreenProps {
  onStart: () => void;
}

const whatWeMeasure = [
  {
    title: "Direction Fit",
    text: "Do your goals point toward Management breadth or Technical depth?",
  },
  {
    title: "Degree Need",
    text: "Will a degree actually close the gap standing between you and your target role?",
  },
  {
    title: "Learning Fit",
    text: "Do you learn best through breadth and discussion, or depth and expertise?",
  },
  {
    title: "Readiness",
    text: "Is your timeline, experience, and profile ready for this step now?",
  },
];

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="intro">
      <header className="intro__hero">
        <div className="container intro__hero-inner">
          <M7Logo />
          <h1 className="intro__title">
            FIND YOUR M7
            <span className="intro__title-accent">Degree Fit</span>
          </h1>
          <p className="intro__subtitle">MBA or Master's: Which path fits you better?</p>
          <p className="intro__description">
            A strategic diagnostic that reveals whether an MBA, a Specialized Master's, more experience, or further
            career clarification is the right next step for you.
          </p>
          <button type="button" className="btn btn-primary intro__cta" onClick={onStart}>
            Start Your Assessment
          </button>
        </div>
      </header>

      <section className="container intro__section">
        <p className="eyebrow">Series 1 of Find Your M7</p>
        <h2 className="intro__section-title">Degree Fit</h2>
        <p className="intro__section-lead">
          Everyone leans toward an MBA or a Master's for a reason. The first step is discovering which one — and
          whether you're ready.
        </p>
        <ul className="intro__checklist">
          {whatWeMeasure.map((item) => (
            <li key={item.title}>
              <span className="intro__checklist-icon" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>{item.title}</strong> — {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
