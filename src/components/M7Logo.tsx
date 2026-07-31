import "./M7Logo.css";

interface M7LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/** Text-based M7 Consulting wordmark, styled to match the brand slides (page 1 / 54). */
export function M7Logo({ variant = "light", className = "" }: M7LogoProps) {
  return (
    <div className={`m7-logo m7-logo--${variant} ${className}`.trim()}>
      <span className="m7-logo__mark">M7</span>
      <span className="m7-logo__word">CONSULTING</span>
    </div>
  );
}
