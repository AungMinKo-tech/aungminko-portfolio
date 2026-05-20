/** Template variables must match your EmailJS template: user_name, user_email, subject, message */
export const EMAILJS_TEMPLATE_FIELDS = {
  name: "user_name",
  email: "user_email",
  subject: "subject",
  message: "message",
} as const;

export function getEmailJsConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  return {
    serviceId,
    templateId,
    publicKey,
    isConfigured: Boolean(serviceId && templateId && publicKey),
  };
}
