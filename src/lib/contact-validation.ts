export type ContactField = "name" | "email" | "subject" | "message";

export type ContactFormData = Record<ContactField, string>;

export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: { min: 2, max: 80 },
  subject: { min: 3, max: 120 },
  message: { min: 10, max: 2000 },
} as const;

function validateName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Name is required.";
  if (trimmed.length < LIMITS.name.min) return `Name must be at least ${LIMITS.name.min} characters.`;
  if (trimmed.length > LIMITS.name.max) return `Name must be at most ${LIMITS.name.max} characters.`;
  return undefined;
}

function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Email is required.";
  if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address.";
  return undefined;
}

function validateSubject(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Subject is required.";
  if (trimmed.length < LIMITS.subject.min)
    return `Subject must be at least ${LIMITS.subject.min} characters.`;
  if (trimmed.length > LIMITS.subject.max)
    return `Subject must be at most ${LIMITS.subject.max} characters.`;
  return undefined;
}

function validateMessage(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Message is required.";
  if (trimmed.length < LIMITS.message.min)
    return `Message must be at least ${LIMITS.message.min} characters.`;
  if (trimmed.length > LIMITS.message.max)
    return `Message must be at most ${LIMITS.message.max} characters.`;
  return undefined;
}

const validators: Record<ContactField, (value: string) => string | undefined> = {
  name: validateName,
  email: validateEmail,
  subject: validateSubject,
  message: validateMessage,
};

export function validateContactField(field: ContactField, value: string): string | undefined {
  return validators[field](value);
}

export function validateContactForm(data: ContactFormData): ContactErrors {
  const errors: ContactErrors = {};

  (Object.keys(validators) as ContactField[]).forEach((field) => {
    const message = validators[field](data[field]);
    if (message) errors[field] = message;
  });

  return errors;
}

export function hasContactErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}

export const emptyContactForm = (): ContactFormData => ({
  name: "",
  email: "",
  subject: "",
  message: "",
});
