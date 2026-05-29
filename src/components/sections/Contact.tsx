"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { EMAILJS_TEMPLATE_FIELDS, getEmailJsConfig } from "@/lib/emailjs";
import {
  emptyContactForm,
  hasContactErrors,
  validateContactField,
  validateContactForm,
  type ContactErrors,
  type ContactField,
  type ContactFormData,
} from "@/lib/contact-validation";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { AlertCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import {
  useRef,
  useState,
  type ComponentType,
  type FocusEvent,
  type FormEvent,
} from "react";

import type { SocialLink } from "@/types";

const socialIcons: Record<
  SocialLink["icon"],
  ComponentType<{ className?: string }>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: Mail,
  email: Mail,
};

type FormStatus = "idle" | "sending" | "success" | "error";

const fieldMeta: {
  id: ContactField;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  autoComplete?: string;
  rows?: number;
  gridClass?: string;
}[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    gridClass: "sm:col-span-1",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    autoComplete: "email",
    gridClass: "sm:col-span-1",
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Project inquiry",
    gridClass: "sm:col-span-2",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell me about your project...",
    rows: 5,
    gridClass: "sm:col-span-2",
  },
];

const inputStyles = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60",
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
      : "border-border focus:border-accent focus:ring-accent/20",
  );

export function Contact() {
  const revealRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactFormData>(emptyContactForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<ContactField, boolean>>
  >({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: ContactField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        const message = validateContactField(field, value);
        if (message) next[field] = message;
        else delete next[field];
        return next;
      });
    }
  };

  const handleBlur =
    (field: ContactField) =>
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const message = validateContactField(field, e.target.value);
      setErrors((prev) => {
        const next = { ...prev };
        if (message) next[field] = message;
        else delete next[field];
        return next;
      });
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (hasContactErrors(validationErrors)) {
      setStatus("idle");
      setErrorMessage("");
      const firstInvalid = fieldMeta.find(({ id }) => validationErrors[id]);
      document.getElementById(firstInvalid?.id ?? "name")?.focus();
      return;
    }

    const form = formRef.current;
    if (!form) return;

    const { serviceId, templateId, publicKey, isConfigured } =
      getEmailJsConfig();

    if (!isConfigured) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured. Add your EmailJS keys to .env.local and restart the dev server.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus("success");
      setValues(emptyContactForm());
      setErrors({});
      setTouched({});
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again or email me directly.",
      );
    }
  };

  const isSending = status === "sending";
  const isSuccess = status === "success";
  const isError = status === "error";

  const emailJsName = (field: ContactField) => EMAILJS_TEMPLATE_FIELDS[field];

  return (
    <section
      id="contact"
      className="section-padding bg-card/30"
      aria-labelledby="contact-heading"
    >
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear from you."
          align="center"
        />

        <div
          ref={revealRef}
          className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5"
        >
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Get in touch
              </h3>
              <p className="leading-relaxed text-muted">
                I&apos;m currently open to new opportunities and collaborations.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded text-muted transition-colors hover:text-accent focus-ring"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded text-muted transition-colors hover:text-accent focus-ring"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                {siteConfig.location}
              </li>
            </ul>

            <div className="flex gap-3">
              {siteConfig.social.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent/50 hover:text-accent focus-ring"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 lg:col-span-3"
            noValidate
            aria-label="Contact form"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {fieldMeta.map(
                ({
                  id,
                  label,
                  type,
                  placeholder,
                  autoComplete,
                  rows,
                  gridClass,
                }) => {
                  const error = touched[id] ? errors[id] : undefined;
                  const showError = Boolean(error);

                  return (
                    <div key={id} className={gridClass}>
                      <label
                        htmlFor={id}
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        {label}
                        <span className="text-accent" aria-hidden>
                          {" "}
                          *
                        </span>
                      </label>

                      {type === "textarea" ? (
                        <textarea
                          id={id}
                          name={emailJsName(id)}
                          value={values[id]}
                          onChange={(e) => updateField(id, e.target.value)}
                          onBlur={handleBlur(id)}
                          required
                          disabled={isSending}
                          rows={rows}
                          aria-invalid={showError}
                          aria-describedby={
                            showError ? `${id}-error` : undefined
                          }
                          className={cn(inputStyles(showError), "resize-none")}
                          placeholder={placeholder}
                        />
                      ) : (
                        <input
                          id={id}
                          name={emailJsName(id)}
                          type={type}
                          value={values[id]}
                          onChange={(e) => updateField(id, e.target.value)}
                          onBlur={handleBlur(id)}
                          required
                          disabled={isSending}
                          autoComplete={autoComplete}
                          aria-invalid={showError}
                          aria-describedby={
                            showError ? `${id}-error` : undefined
                          }
                          className={inputStyles(showError)}
                          placeholder={placeholder}
                        />
                      )}

                      {showError && (
                        <p
                          id={`${id}-error`}
                          role="alert"
                          className="mt-1.5 flex items-start gap-1.5 text-sm text-red-500"
                        >
                          <AlertCircle
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            aria-hidden
                          />
                          {error}
                        </p>
                      )}
                    </div>
                  );
                },
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={isSending}
            >
              {isSending ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
              ) : (
                <Send className="h-5 w-5" aria-hidden />
              )}
              {isSending
                ? "Sending..."
                : isSuccess
                  ? "Message Sent!"
                  : "Send Message"}
            </Button>

            {isSuccess && (
              <p className="mt-3 text-sm text-accent" role="status">
                Thank you! I&apos;ll get back to you soon.
              </p>
            )}

            {isError && errorMessage && (
              <p
                className="mt-3 flex items-start gap-2 text-sm text-red-500"
                role="alert"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
