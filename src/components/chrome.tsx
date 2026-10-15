import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { footerGroups, headerNav } from "../data/navigation";
import { useConsent } from "../lib/consent";
import { cn } from "../utils/cn";
import { Button, ButtonLink, Container } from "./ui";

/* --------------------------------- Wordmark --------------------------------- */

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-2 font-semibold text-fg", className)}
    >
      <span
        aria-hidden
        className="flex h-6 w-6 items-center justify-center rounded-sm bg-accent font-mono text-[13px] font-bold text-white"
      >
        F
      </span>
      <span className="text-[15px] tracking-tight">Flobyte</span>
    </Link>
  );
}

/* ----------------------------- Desktop dropdown ----------------------------- */

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; to: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-8 items-center gap-1 rounded-sm px-2.5 text-sm font-medium transition-colors duration-(--transition-fast)",
          open ? "bg-surface text-fg" : "text-fg hover:bg-surface"
        )}
      >
        {label}
        <svg
          aria-hidden
          className={cn("h-3 w-3 text-muted transition-transform", open && "rotate-180")}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 w-60 rounded-md border border-line bg-canvas py-1 shadow-sm"
        >
          {items.map((item) => (
            <Link
              key={item.to + item.label}
              role="menuitem"
              to={item.to}
              className="block px-3 py-1.5 text-sm text-fg hover:bg-surface hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* --------------------------------- Header --------------------------------- */

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-1.5 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <Wordmark />
          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {headerNav.map((entry) =>
              entry.items ? (
                <NavDropdown key={entry.label} label={entry.label} items={entry.items} />
              ) : (
                <NavLink
                  key={entry.label}
                  to={entry.to!}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex h-8 items-center rounded-sm px-2.5 text-sm font-medium transition-colors duration-(--transition-fast) hover:bg-surface",
                      isActive ? "text-accent" : "text-fg"
                    )
                  }
                >
                  {entry.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/search"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line px-2.5 text-[13px] text-muted hover:bg-surface"
          >
            <svg aria-hidden className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
            </svg>
            Search
          </Link>
          <ButtonLink to="/contact" variant="default" size="sm">
            Contact
          </ButtonLink>
          <ButtonLink to="/contact/quote" variant="primary" size="sm">
            Request a quote
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line lg:hidden"
        >
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            {mobileOpen ? (
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.749.749 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.749.749 0 1 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
            ) : (
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
            )}
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-line-subtle bg-canvas lg:hidden"
        >
          <Container className="py-3">
            {headerNav.map((entry) =>
              entry.items ? (
                <div key={entry.label} className="border-b border-line-subtle py-2">
                  <p className="px-1 py-1 text-[12px] font-semibold uppercase tracking-wide text-muted">
                    {entry.label}
                  </p>
                  {entry.items.map((item) => (
                    <Link
                      key={item.to + item.label}
                      to={item.to}
                      className="block rounded-sm px-1 py-1.5 text-sm text-fg hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={entry.label}
                  to={entry.to!}
                  className="block border-b border-line-subtle px-1 py-3 text-sm font-medium text-fg hover:text-accent"
                >
                  {entry.label}
                </Link>
              )
            )}
            <Link
              to="/search"
              className="block border-b border-line-subtle px-1 py-3 text-sm font-medium text-fg hover:text-accent"
            >
              Search
            </Link>
            <div className="flex gap-2 py-3">
              <ButtonLink to="/contact" variant="default" size="sm" className="flex-1">
                Contact
              </ButtonLink>
              <ButtonLink to="/contact/quote" variant="primary" size="sm" className="flex-1">
                Request a quote
              </ButtonLink>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}

/* --------------------------------- Footer --------------------------------- */

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Wordmark />
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted">
              Flobyte designs and develops reliable digital products,
              applications, and systems for growing businesses.
            </p>
            <div className="mt-4 flex gap-2">
              <ButtonLink to="/contact/quote" variant="primary" size="sm">
                Request a quote
              </ButtonLink>
              <ButtonLink to="/contact" variant="default" size="sm">
                Contact
              </ButtonLink>
            </div>
          </div>
          {footerGroups.map((group) => (
            <nav key={group.label} aria-label={`Footer: ${group.label}`}>
              <h2 className="mb-2.5 text-[13px] font-semibold text-fg">{group.label}</h2>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-[13px] text-muted hover:text-accent hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flobyte. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/sitemap" className="hover:text-accent hover:underline">
              Sitemap
            </Link>
            <Link to="/accessibility" className="hover:text-accent hover:underline">
              Accessibility
            </Link>
            <Link to="/cookie-preferences" className="hover:text-accent hover:underline">
              Cookie preferences
            </Link>
            <Link to="/status" className="hover:text-accent hover:underline">
              Status
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ------------------------------ Cookie banner ------------------------------ */

export function CookieConsentBanner() {
  const { consent, update } = useConsent();
  const navigate = useNavigate();

  if (consent.decided) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-canvas shadow-[0_-1px_0_rgba(0,0,0,0.02)]"
    >
      <Container className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[13px] leading-relaxed text-fg">
          This site uses <strong>no tracking or advertising cookies</strong>.
          We only store your consent choice and, if you allow it, functional
          preferences in your browser.{" "}
          <Link to="/legal/cookies" className="text-accent hover:underline">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button
            size="sm"
            onClick={() => navigate("/cookie-preferences")}
          >
            Manage preferences
          </Button>
          <Button
            size="sm"
            onClick={() => update({ functional: false, analytics: false })}
          >
            Essential only
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => update({ functional: true, analytics: false })}
          >
            Accept
          </Button>
        </div>
      </Container>
    </div>
  );
}

/* ------------------------------ Scroll restore ------------------------------ */

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
