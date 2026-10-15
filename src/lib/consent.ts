import { useCallback, useEffect, useState } from "react";

/**
 * Cookie / storage consent.
 *
 * Honest implementation note: this website currently loads NO nonessential
 * cookies, analytics, or third-party trackers. The only client-side storage
 * used is this consent record itself and (if accepted) functional
 * preferences, both kept in localStorage. If analytics are ever added, gate
 * them on `consent.analytics === true` before loading any script.
 */

export interface ConsentState {
  decided: boolean;
  functional: boolean;
  analytics: boolean;
  decidedAt?: string;
}

const KEY = "flobyte.consent.v1";

const DEFAULT: ConsentState = {
  decided: false,
  functional: false,
  analytics: false,
};

export function readConsent(): ConsentState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw) as ConsentState;
    return { ...DEFAULT, ...parsed };
  } catch {
    return DEFAULT;
  }
}

export function writeConsent(state: Omit<ConsentState, "decided" | "decidedAt">) {
  const next: ConsentState = {
    ...state,
    decided: true,
    decidedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage unavailable — treat as undecided next visit
  }
  window.dispatchEvent(new CustomEvent("flobyte-consent-change"));
  return next;
}

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(() => readConsent());

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    window.addEventListener("flobyte-consent-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("flobyte-consent-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback(
    (state: { functional: boolean; analytics: boolean }) => {
      setConsent(writeConsent(state));
    },
    []
  );

  return { consent, update };
}
