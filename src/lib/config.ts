/**
 * Site configuration.
 *
 * TODO (before production):
 * - FORM_ENDPOINT: point to a real form-handling backend or service.
 *   While null, forms run in honest demo mode: input is validated locally
 *   and the user is told clearly that nothing was transmitted.
 * - CONTACT_EMAIL / LEGAL_ENTITY / JURISDICTION: replace placeholders with
 *   real business information. Placeholders are intentionally visible so
 *   fictional facts are never silently published.
 */
export const siteConfig = {
  name: "Flobyte",
  tagline: "Software built for real-world needs.",
  formEndpoint: null as string | null,
  contactEmail: "[contact email — to be configured]",
  legalEntity: "[legal entity name — to be configured]",
  jurisdiction: "[governing jurisdiction — to be configured]",
};
