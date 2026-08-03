"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SplitTextReveal, HandUnderline } from "@/components/site/motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--cyan-accent)] mb-3">Open channel</p>
          <SplitTextReveal text="Talk to us" className="font-display text-6xl lg:text-8xl font-bold tracking-tight" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Concierge, editorial, partnerships. We <HandUnderline>actually respond.</HandUnderline>
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          <div className="space-y-4">
            {[
              { Icon: Mail, label: "Email", value: "hello@genCART.co" },
              { Icon: MessageCircle, label: "Concierge", value: "+1 (800) genCART-9" },
              { Icon: MapPin, label: "Studio", value: "San Francisco · New York · Berlin" },
            ].map((it) => (
              <div key={it.label} className="surface-card-2 p-6 flex items-center gap-4">
                <div className="size-12 grid place-items-center rounded-xl bg-[var(--surface)] border border-[var(--emerald-accent)]/30">
                  <it.Icon className="size-5 text-[var(--emerald-accent)]" />
                </div>
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{it.label}</p>
                  <p className="font-display text-lg">{it.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="surface-card-2 p-8 lg:p-10 relative">
            {submitStatus === "success" && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
                <CheckCircle className="size-16 text-[var(--success)] mb-6 animate-bounce" />
                <h3 className="font-display text-3xl font-semibold mb-2">Message Sent</h3>
                <p className="text-muted-foreground max-w-sm mb-6">
                  Thank you for reaching out. A product specialist or editorial lead will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="btn-accent rounded-full px-6 py-2.5 text-xs font-semibold"
                >
                  Send another message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-[var(--danger)] text-sm">
                  <AlertCircle className="size-5 shrink-0" />
                  <span>An error occurred while sending your message. Please try again.</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  disabled={isSubmitting}
                />
                <Field
                  label="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  disabled={isSubmitting}
                />
              </div>

              <Field
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                disabled={isSubmitting}
              />

              <Field
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                disabled={isSubmitting}
              />

              <div>
                <label className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full rounded-xl bg-[var(--surface)] border ${
                    errors.message ? "border-[var(--danger)]" : "border-[var(--hairline)]"
                  } px-4 py-3 text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-[var(--danger)] mt-1.5 flex items-center gap-1">
                    <AlertCircle className="size-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full rounded-full py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block size-4 border-2 border-current border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

function Field({ label, name, type = "text", value, onChange, error, disabled }: FieldProps) {
  return (
    <div>
      <label className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full h-12 rounded-xl bg-[var(--surface)] border ${
          error ? "border-[var(--danger)]" : "border-[var(--hairline)]"
        } px-4 text-sm focus:border-[var(--emerald-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--emerald-accent)]/30 transition`}
      />
      {error && (
        <p className="text-xs text-[var(--danger)] mt-1.5 flex items-center gap-1">
          <AlertCircle className="size-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
