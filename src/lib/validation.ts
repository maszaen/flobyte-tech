export type Validator = (value: string) => string | null;

export const required =
  (label: string): Validator =>
  (value) =>
    value.trim() ? null : `${label} is required.`;

export const email: Validator = (value) => {
  if (!value.trim()) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
    ? null
    : "Enter a valid email address.";
};

export const minLength =
  (n: number, label: string): Validator =>
  (value) =>
    !value.trim() || value.trim().length >= n
      ? null
      : `${label} must be at least ${n} characters.`;

export const mustBeChecked =
  (message: string): Validator =>
  (value) =>
    value === "true" ? null : message;

export function validateAll(
  values: Record<string, string>,
  rules: Record<string, Validator[]>
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const [field, validators] of Object.entries(rules)) {
    for (const validate of validators) {
      const error = validate(values[field] ?? "");
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
}
