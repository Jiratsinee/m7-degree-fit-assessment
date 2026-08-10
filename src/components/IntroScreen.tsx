import { M7Logo } from "./M7Logo";
import "./IntroScreen.css";

interface IntroScreenProps {
  onStart: () => void;
}

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
    </div>
  );
}
