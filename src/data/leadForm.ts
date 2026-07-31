// Source: "Find Your M7 — Degree Fit" PDF, page 30 (Lead Information, collected after
// the assessment questions but before the full result is displayed).

export interface SelectField {
  id: string;
  label: string;
  type: "select";
  required: true;
  options: string[];
}

export interface TextField {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  required: true;
  autoComplete?: string;
}

export type LeadField = TextField | SelectField;

export const leadFields: LeadField[] = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "phone", label: "Phone Number", type: "tel", required: true, autoComplete: "tel" },
  {
    id: "careerStage",
    label: "Current Career Stage",
    type: "select",
    required: true,
    options: [
      "Still in university",
      "Recently graduated",
      "1–2 years of full-time work experience",
      "3–5 years of full-time work experience",
      "More than 5 years of full-time work experience",
    ],
  },
  {
    id: "degreeType",
    label: "Degree Type Currently Considering",
    type: "select",
    required: true,
    options: ["MBA", "Specialized Master's", "Both", "Still Exploring"],
  },
  {
    id: "country",
    label: "Country Most Interested In",
    type: "select",
    required: true,
    options: ["USA", "UK", "Canada", "Europe", "Asia", "Still Exploring"],
  },
];

export const consentField = {
  id: "consent",
  label:
    "I agree to receive my Degree Fit Assessment result and relevant information about graduate admissions, events, and services from M7 Consulting.",
  required: true,
};

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  careerStage: string;
  degreeType: string;
  country: string;
  consent: boolean;
}

export const emptyLeadData: LeadData = {
  name: "",
  email: "",
  phone: "",
  careerStage: "",
  degreeType: "",
  country: "",
  consent: false,
};
