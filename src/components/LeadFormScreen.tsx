import { useState, type FormEvent } from "react";
import { leadFields, consentField, type LeadData } from "../data/leadForm";
import "./LeadFormScreen.css";

interface LeadFormScreenProps {
  initialData: LeadData;
  onSubmit: (data: LeadData) => void;
  onPrev: () => void;
}

type Errors = Partial<Record<keyof LeadData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: LeadData): Errors {
  const errors: Errors = {};
  for (const field of leadFields) {
    const value = data[field.id as keyof LeadData];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      errors[field.id as keyof LeadData] = "This field is required.";
    }
  }
  if (data.email && !EMAIL_RE.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.consent) {
    errors.consent = "Please provide consent to continue.";
  }
  return errors;
}

export function LeadFormScreen({ initialData, onSubmit, onPrev }: LeadFormScreenProps) {
  const [data, setData] = useState<LeadData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);

  function updateField<K extends keyof LeadData>(key: K, value: LeadData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);
    setAttempted(true);
    if (Object.keys(nextErrors).length === 0) {
      onSubmit(data);
    }
  }

  return (
    <div className="lead-screen">
      <div className="lead-screen__header">
        <div className="container">
          <p className="eyebrow lead-screen__eyebrow">Before Your Results</p>
          <h2 className="lead-screen__title">Tell Us a Bit About You</h2>
          <p className="lead-screen__subtitle">
            A few quick details so we can tailor your Degree Fit result and follow up with the right next step.
          </p>
        </div>
      </div>

      <form className="lead-screen__body" onSubmit={handleSubmit} noValidate>
        <div className="container">
          <div className="lead-screen__grid">
            {leadFields.map((field) => {
              const value = data[field.id as keyof LeadData] as string;
              const error = attempted ? errors[field.id as keyof LeadData] : undefined;
              return (
                <div className="lead-field" key={field.id}>
                  <label htmlFor={field.id}>
                    {field.label} <span aria-hidden="true">*</span>
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.id}
                      value={value}
                      onChange={(e) => updateField(field.id as keyof LeadData, e.target.value as never)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.id}-error` : undefined}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      value={value}
                      autoComplete={field.autoComplete}
                      onChange={(e) => updateField(field.id as keyof LeadData, e.target.value as never)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.id}-error` : undefined}
                    />
                  )}
                  {error && (
                    <p className="lead-field__error" id={`${field.id}-error`}>
                      {error}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className={`lead-consent${attempted && errors.consent ? " has-error" : ""}`}>
            <label htmlFor="consent">
              <input
                id="consent"
                type="checkbox"
                checked={data.consent}
                onChange={(e) => updateField("consent", e.target.checked)}
                aria-describedby={attempted && errors.consent ? "consent-error" : undefined}
              />
              <span>&ldquo;{consentField.label}&rdquo;</span>
            </label>
            {attempted && errors.consent && (
              <p className="lead-field__error" id="consent-error">
                {errors.consent}
              </p>
            )}
          </div>

          <div className="lead-screen__nav">
            <button type="button" className="btn btn-secondary" onClick={onPrev}>
              ← Previous
            </button>
            <button type="submit" className="btn btn-primary">
              See My Result →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
