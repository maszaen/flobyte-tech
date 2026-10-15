import { Button, ButtonLink, Container } from "./ui";

export function NotFoundContent({
  title = "Page not found",
  message = "The page you're looking for doesn't exist, was moved, or never existed in the first place.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-widest text-muted">
          Error 404
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <ButtonLink to="/" variant="primary">
            Go to Home
          </ButtonLink>
          <ButtonLink to="/services">Services</ButtonLink>
          <ButtonLink to="/projects">Projects</ButtonLink>
          <ButtonLink to="/contact">Contact</ButtonLink>
        </div>
        <p className="mt-6 text-[13px] text-muted">
          Or try the{" "}
          <a href="#/search" className="text-accent hover:underline">
            site search
          </a>{" "}
          and{" "}
          <a href="#/sitemap" className="text-accent hover:underline">
            sitemap
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export function ServerErrorContent({ onRetry }: { onRetry?: () => void }) {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-widest text-danger">
          Error 500
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          An unexpected error occurred while processing your request. Your
          data is safe. You can retry the action or return to a known-good
          page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <Button
            variant="primary"
            onClick={onRetry ?? (() => window.location.reload())}
          >
            Try again
          </Button>
          <ButtonLink to="/">Go to Home</ButtonLink>
          <ButtonLink to="/status">System status</ButtonLink>
        </div>
      </div>
    </Container>
  );
}
