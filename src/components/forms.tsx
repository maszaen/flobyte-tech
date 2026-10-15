import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "../lib/config";
import {
  email,
  minLength,
  mustBeChecked,
  required,
  validateAll,
  type Validator,
} from "../lib/validation";
import {
  Alert,
  Button,
  CheckboxField,
  SelectField,
  Spinner,
  TextAreaField,
  TextField,
} from "./ui";

/* ------------------------------ Shared machinery ------------------------------ */

interface UseFlobyteFormOptions {
  rules: Record<string, Validator[]>;
  formName: string;
}

function useFlobyteForm({ rules, formName }: UseFlobyteFormOptions) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const set = (field: string, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => {
      if (!e[field]) return e;
      const next = { ...e };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validateAll(values, rules);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }
    setStatus("submitting");
    if (siteConfig.formEndpoint) {
      try {
        const res = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ form: formName, ...values }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        navigate("/thank-you", { state: { form: formName, demo: false } });
      } catch {
        setStatus("error");
      }
    } else {
      // Honest demo mode: no backend configured, nothing is transmitted.
      navigate("/thank-you", { state: { form: formName, demo: true } });
    }
  };

  return { values, errors, status, set, handleSubmit, errorSummaryRef };
}

function ErrorSummary({
  errors,
  summaryRef,
}: {
  errors: Record<string, string>;
  summaryRef: React.RefObject<HTMLDivElement | null>;
}) {
  const entries = Object.values(errors);
  if (entries.length === 0) return null;
  return (
    <div ref={summaryRef} tabIndex={-1} className="outline-none">
      <Alert tone="danger" role="alert" title={`Please fix ${entries.length} issue${entries.length > 1 ? "s" : ""}:`}>
        <ul className="list-disc pl-5">
          {entries.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </Alert>
    </div>
  );
}

function DemoModeNote() {
  if (siteConfig.formEndpoint) return null;
  return (
    <p className="text-[12px] leading-relaxed text-muted">
      <strong className="text-fg">Demo environment:</strong> no form backend is
      configured, so submissions are validated locally but{" "}
      <strong className="text-fg">not transmitted anywhere</strong>. Configure{" "}
      <code className="rounded-xs bg-surface px-1 font-mono text-[11px]">
        formEndpoint
      </code>{" "}
      in <code className="rounded-xs bg-surface px-1 font-mono text-[11px]">src/lib/config.ts</code>{" "}
      to enable real delivery.
    </p>
  );
}

function SubmitRow({
  status,
  label,
}: {
  status: "idle" | "submitting" | "error";
  label: string;
}) {
  return (
    <div className="space-y-3">
      {status === "error" && (
        <Alert tone="danger" role="alert" title="Submission failed">
          Something went wrong while sending your request. Please try again,
          or reach out through another channel.
        </Alert>
      )}
      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" && <Spinner className="border-white/40 border-t-white" />}
        {status === "submitting" ? "Submitting…" : label}
      </Button>
      <DemoModeNote />
    </div>
  );
}

/* -------------------------------- Contact form -------------------------------- */

export function ContactForm() {
  const form = useFlobyteForm({
    formName: "contact",
    rules: {
      name: [required("Name")],
      email: [required("Work email"), email],
      message: [required("Message"), minLength(20, "Message")],
    },
  });

  return (
    <form onSubmit={form.handleSubmit} noValidate className="space-y-5">
      <ErrorSummary errors={form.errors} summaryRef={form.errorSummaryRef} />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Name"
          required
          autoComplete="name"
          value={form.values.name ?? ""}
          error={form.errors.name}
          onChange={(e) => form.set("name", e.target.value)}
        />
        <TextField
          label="Work email"
          required
          type="email"
          autoComplete="email"
          value={form.values.email ?? ""}
          error={form.errors.email}
          onChange={(e) => form.set("email", e.target.value)}
        />
      </div>
      <TextField
        label="Company"
        autoComplete="organization"
        value={form.values.company ?? ""}
        onChange={(e) => form.set("company", e.target.value)}
      />
      <TextAreaField
        label="Message"
        required
        hint="What are you trying to build, fix, or improve? A few sentences is plenty."
        value={form.values.message ?? ""}
        error={form.errors.message}
        onChange={(e) => form.set("message", e.target.value)}
      />
      <SubmitRow status={form.status} label="Send message" />
    </form>
  );
}

/* --------------------------------- Quote form --------------------------------- */

const projectTypes = [
  { value: "web", label: "Web application" },
  { value: "mobile", label: "Mobile application" },
  { value: "backend", label: "Backend / API development" },
  { value: "design", label: "UI/UX design" },
  { value: "integration", label: "System integration" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "maintenance", label: "Maintenance / takeover" },
  { value: "custom", label: "Custom software (other)" },
];

const budgetRanges = [
  { value: "lt-10k", label: "Under $10k" },
  { value: "10-25k", label: "$10k – $25k" },
  { value: "25-50k", label: "$25k – $50k" },
  { value: "50-100k", label: "$50k – $100k" },
  { value: "gt-100k", label: "Over $100k" },
  { value: "unknown", label: "Not sure yet" },
];

const timelines = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3m", label: "Within 1–3 months" },
  { value: "3-6m", label: "Within 3–6 months" },
  { value: "exploring", label: "Just exploring" },
];

export function QuoteRequestForm() {
  const form = useFlobyteForm({
    formName: "quote",
    rules: {
      name: [required("Name")],
      email: [required("Work email"), email],
      projectType: [required("Project type")],
      description: [required("Project description"), minLength(40, "Project description")],
      consent: [mustBeChecked("Please confirm you agree to be contacted about this request.")],
    },
  });

  return (
    <form onSubmit={form.handleSubmit} noValidate className="space-y-5">
      <ErrorSummary errors={form.errors} summaryRef={form.errorSummaryRef} />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Name"
          required
          autoComplete="name"
          value={form.values.name ?? ""}
          error={form.errors.name}
          onChange={(e) => form.set("name", e.target.value)}
        />
        <TextField
          label="Work email"
          required
          type="email"
          autoComplete="email"
          value={form.values.email ?? ""}
          error={form.errors.email}
          onChange={(e) => form.set("email", e.target.value)}
        />
      </div>
      <TextField
        label="Company"
        autoComplete="organization"
        value={form.values.company ?? ""}
        onChange={(e) => form.set("company", e.target.value)}
      />
      <SelectField
        label="Project type"
        required
        placeholder="Select a project type…"
        options={projectTypes}
        value={form.values.projectType ?? ""}
        error={form.errors.projectType}
        onChange={(e) => form.set("projectType", e.target.value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Budget range"
          placeholder="Select a range…"
          options={budgetRanges}
          value={form.values.budget ?? ""}
          onChange={(e) => form.set("budget", e.target.value)}
        />
        <SelectField
          label="Preferred timeline"
          placeholder="Select a timeline…"
          options={timelines}
          value={form.values.timeline ?? ""}
          onChange={(e) => form.set("timeline", e.target.value)}
        />
      </div>
      <TextAreaField
        label="Project description"
        required
        hint="Describe the problem, the users, and any existing systems involved. The more context, the more accurate the estimate."
        value={form.values.description ?? ""}
        error={form.errors.description}
        onChange={(e) => form.set("description", e.target.value)}
      />
      <CheckboxField
        label="I agree to be contacted about this request. My information will be handled according to the Privacy Policy."
        checked={form.values.consent === "true"}
        error={form.errors.consent}
        onChange={(checked) => form.set("consent", String(checked))}
      />
      <SubmitRow status={form.status} label="Request quote" />
    </form>
  );
}

/* ------------------------------ Consultation form ------------------------------ */

const consultationTopics = [
  { value: "new-project", label: "Starting a new project" },
  { value: "takeover", label: "Taking over an existing system" },
  { value: "architecture", label: "Architecture / technology review" },
  { value: "team", label: "Augmenting an in-house team" },
  { value: "other", label: "Something else" },
];

export function ConsultationForm() {
  const form = useFlobyteForm({
    formName: "consultation",
    rules: {
      name: [required("Name")],
      email: [required("Work email"), email],
      topic: [required("Topic")],
      context: [required("Context"), minLength(20, "Context")],
    },
  });

  return (
    <form onSubmit={form.handleSubmit} noValidate className="space-y-5">
      <ErrorSummary errors={form.errors} summaryRef={form.errorSummaryRef} />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Name"
          required
          autoComplete="name"
          value={form.values.name ?? ""}
          error={form.errors.name}
          onChange={(e) => form.set("name", e.target.value)}
        />
        <TextField
          label="Work email"
          required
          type="email"
          autoComplete="email"
          value={form.values.email ?? ""}
          error={form.errors.email}
          onChange={(e) => form.set("email", e.target.value)}
        />
      </div>
      <SelectField
        label="What would you like to discuss?"
        required
        placeholder="Select a topic…"
        options={consultationTopics}
        value={form.values.topic ?? ""}
        error={form.errors.topic}
        onChange={(e) => form.set("topic", e.target.value)}
      />
      <TextField
        label="Preferred availability"
        hint="E.g. weekday mornings, specific days — we'll propose concrete times by email."
        value={form.values.availability ?? ""}
        onChange={(e) => form.set("availability", e.target.value)}
      />
      <TextAreaField
        label="Context"
        required
        hint="A short summary so we can bring the right person to the call."
        value={form.values.context ?? ""}
        error={form.errors.context}
        onChange={(e) => form.set("context", e.target.value)}
      />
      <SubmitRow status={form.status} label="Request consultation" />
    </form>
  );
}
