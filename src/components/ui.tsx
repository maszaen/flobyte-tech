import {
  forwardRef,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

/* ---------------------------------- Layout ---------------------------------- */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[76rem] px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

/* ---------------------------------- Button ---------------------------------- */

type ButtonVariant = "primary" | "default" | "danger" | "invisible";
type ButtonSize = "sm" | "md";

const buttonBase =
  "inline-flex items-center justify-center gap-1.5 rounded-md border font-semibold transition-colors duration-(--transition-fast) disabled:cursor-not-allowed disabled:opacity-60 select-none";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-accent-hover bg-accent text-white hover:bg-accent-hover active:bg-accent-hover",
  default:
    "border-line bg-surface text-fg hover:bg-surface-deep active:bg-surface-deep",
  danger: "border-line bg-surface text-danger hover:bg-danger-subtle",
  invisible: "border-transparent bg-transparent text-accent hover:bg-surface",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-9 px-4 text-sm",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", className, type, ...props }, ref) => (
    <button
      ref={ref}
      type={type ?? "button"}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export function ButtonLink({
  to,
  variant = "default",
  size = "md",
  className,
  children,
}: {
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
    >
      {children}
    </Link>
  );
}

/* ---------------------------------- Badge ---------------------------------- */

type BadgeTone = "default" | "accent" | "success" | "warning" | "danger";

const badgeTones: Record<BadgeTone, string> = {
  default: "border-line bg-surface text-muted",
  accent: "border-accent/30 bg-accent-subtle text-accent-hover",
  success: "border-success/30 bg-success-subtle text-success",
  warning: "border-warning/30 bg-warning-subtle text-warning",
  danger: "border-danger/30 bg-danger-subtle text-danger",
};

export function Badge({
  tone = "default",
  mono = false,
  className,
  children,
}: {
  tone?: BadgeTone;
  mono?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[12px] font-medium leading-4",
        badgeTones[tone],
        mono && "font-mono",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------ Status indicator ------------------------------ */

export function StatusIndicator({
  tone,
  label,
}: {
  tone: "success" | "warning" | "danger" | "default";
  label: string;
}) {
  const dot = {
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    default: "bg-faint",
  }[tone];
  const text = {
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
    default: "text-muted",
  }[tone];
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-[13px] font-medium", text)}>
      <span aria-hidden className={cn("h-2 w-2 rounded-full", dot)} />
      {label}
    </span>
  );
}

/* ---------------------------------- Alert ---------------------------------- */

export function Alert({
  tone = "default",
  title,
  children,
  role,
  className,
}: {
  tone?: "default" | "accent" | "success" | "warning" | "danger";
  title?: string;
  children: ReactNode;
  role?: "alert" | "status";
  className?: string;
}) {
  const tones = {
    default: "border-line bg-surface",
    accent: "border-accent/40 bg-accent-subtle",
    success: "border-success/40 bg-success-subtle",
    warning: "border-warning/40 bg-warning-subtle",
    danger: "border-danger/40 bg-danger-subtle",
  }[tone];
  return (
    <div role={role} className={cn("rounded-md border px-4 py-3 text-sm", tones, className)}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div className="text-fg/90">{children}</div>
    </div>
  );
}

/* --------------------------------- Divider --------------------------------- */

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-line-subtle", className)} />;
}

/* --------------------------------- Spinner --------------------------------- */

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-line border-t-accent align-middle",
        className
      )}
    />
  );
}

/* ------------------------------- Form fields ------------------------------- */

const fieldBase =
  "w-full rounded-md border bg-canvas px-3 text-sm text-fg placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:bg-surface";

interface FieldWrapperProps {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: (props: {
    id: string;
    describedBy?: string;
    invalid: boolean;
  }) => ReactNode;
}

export function FieldWrapper({ label, hint, error, required, children }: FieldWrapperProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-fg">
        {label}
        {required ? (
          <span aria-hidden className="ml-0.5 text-danger">*</span>
        ) : (
          <span className="ml-1.5 font-normal text-faint">(optional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-[13px] text-muted">
          {hint}
        </p>
      )}
      {children({ id, describedBy, invalid: Boolean(error) })}
      {error && (
        <p id={errorId} className="mt-1.5 flex items-center gap-1 text-[13px] font-medium text-danger">
          <span aria-hidden>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function TextField({ label, hint, error, required, className, ...props }: TextFieldProps) {
  return (
    <FieldWrapper label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          required={required}
          className={cn(fieldBase, "h-9", invalid ? "border-danger" : "border-line", className)}
          {...props}
        />
      )}
    </FieldWrapper>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function TextAreaField({ label, hint, error, required, className, ...props }: TextAreaFieldProps) {
  return (
    <FieldWrapper label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid }) => (
        <textarea
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          required={required}
          className={cn(fieldBase, "min-h-28 py-2", invalid ? "border-danger" : "border-line", className)}
          {...props}
        />
      )}
    </FieldWrapper>
  );
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function SelectField({
  label,
  hint,
  error,
  required,
  options,
  placeholder,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <FieldWrapper label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid }) => (
        <select
          id={id}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          required={required}
          className={cn(fieldBase, "h-9", invalid ? "border-danger" : "border-line", className)}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    </FieldWrapper>
  );
}

export function CheckboxField({
  label,
  error,
  checked,
  onChange,
}: {
  label: ReactNode;
  error?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <div className="flex items-start gap-2.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          aria-describedby={errorId}
          aria-invalid={error ? true : undefined}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded-xs border-line accent-(--color-accent)"
        />
        <label htmlFor={id} className="text-sm text-fg">
          {label}
        </label>
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 flex items-center gap-1 text-[13px] font-medium text-danger">
          <span aria-hidden>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

export function Switch({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative h-5 w-9 shrink-0 rounded-full border transition-colors duration-(--transition-fast)",
        checked ? "border-accent-hover bg-accent" : "border-line bg-surface-deep",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-all duration-(--transition-fast)",
          checked ? "left-[18px]" : "left-0.5"
        )}
      />
    </button>
  );
}

/* -------------------------------- Code block -------------------------------- */

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* clipboard unavailable */
        }
      }}
      className="rounded-sm border border-line bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted hover:bg-surface"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export function CodeBlock({
  code,
  language,
  copyable = true,
}: {
  code: string;
  language?: string;
  copyable?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-line">
      <div className="flex items-center justify-between border-b border-line-subtle bg-surface px-3 py-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
          {language ?? "code"}
        </span>
        {copyable && <CopyButton text={code} />}
      </div>
      <pre className="overflow-x-auto bg-canvas p-3 font-mono text-[13px] leading-relaxed text-fg">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ---------------------------- Image placeholder ---------------------------- */

/**
 * Bordered placeholder reserving space for a manually added asset.
 * `path` is the intended final asset location, shown in the slot.
 */
export function ImagePlaceholder({
  path,
  alt,
  ratio = "16/9",
  className,
}: {
  path: string;
  alt: string;
  ratio?: "16/9" | "4/3" | "1/1" | "21/9" | "3/4";
  className?: string;
}) {
  const ratios = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    "3/4": "aspect-[3/4]",
  }[ratio];
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-md border border-line bg-surface",
        ratios,
        className
      )}
    >
      <div className="px-3 text-center">
        <div aria-hidden className="mb-1 text-faint">
          <svg className="mx-auto h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h.94l6.03-6.03a.75.75 0 0 1 1.06 0l2.72 2.72V2.75a.25.25 0 0 0-.25-.25H1.75ZM14.5 11.44 11.25 8.19 5.56 13.5h8.69a.25.25 0 0 0 .25-.25v-1.81ZM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75Zm5.5 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
          </svg>
        </div>
        <span className="block break-all font-mono text-[11px] text-faint">{path}</span>
      </div>
    </div>
  );
}

/* ------------------------------- Empty state ------------------------------- */

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-md border border-line bg-surface px-6 py-10 text-center">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-muted">{description}</p>
      {action && <div className="mt-4 flex justify-center gap-2">{action}</div>}
    </div>
  );
}
