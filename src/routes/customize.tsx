import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { customizedCategory } from "@/lib/categories";
import { BRAND, pageTitle, whatsAppUrl } from "@/lib/brand";
import fabric from "@/assets/category-fabric.jpg";

export const Route = createFileRoute("/customize")({
  component: CustomizePage,
  head: () => ({
    meta: [
      { title: pageTitle("Customized Abayas") },
      {
        name: "description",
        content: customizedCategory.description,
      },
    ],
  }),
});

const FABRIC_OPTIONS = [
  "Nida Crepe",
  "Heavy-weight Nida",
  "Jersey Crepe",
  "Silk-blend Nida",
  "Italian-import Nida",
  "Other (describe below)",
];

const SIZE_OPTIONS = ["XS", "S", "M", "L", "XL", "Custom measurements"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  color: string;
  fabric: string;
  size: string;
  design: string;
  instructions: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  color: "",
  fabric: "",
  size: "",
  design: "",
  instructions: "",
};

function CustomizePage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Custom abaya request — ${BRAND.name}`,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Preferred color: ${form.color}`,
      `Fabric: ${form.fabric}`,
      `Size: ${form.size}`,
      `Design preferences: ${form.design}`,
      `Special instructions: ${form.instructions}`,
    ].join("\n");

    window.open(whatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid md:grid-cols-2 min-h-[40vh] md:min-h-[50vh]">
          <div className="flex items-center px-5 sm:px-8 md:px-14 lg:px-20 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Bespoke</span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 leading-tight">
                {customizedCategory.name}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                {customizedCategory.description}
              </p>
            </motion.div>
          </div>
          <div className="relative min-h-[32vh] md:min-h-full">
            <img src={fabric} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 sm:px-8 py-12 md:py-20">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center border border-border bg-card p-10 sm:p-14"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-5">
              <Check className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl">Request prepared</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Your details were opened in WhatsApp. Send the message to our team and we will follow up with a quote
              and timeline.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm(emptyForm);
              }}
              className="mt-8 text-xs uppercase tracking-[0.22em] border-b border-foreground pb-1"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" required>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClass}
                  placeholder="+92 ..."
                />
              </Field>
            </div>

            <Field label="Email" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                className={inputClass}
                placeholder="you@email.com"
              />
            </Field>

            <Field label="Preferred color" required>
              <input
                required
                value={form.color}
                onChange={update("color")}
                className={inputClass}
                placeholder="e.g. Onyx, Ivory, Camel, custom shade"
              />
            </Field>

            <Field label="Fabric choice" required>
              <select required value={form.fabric} onChange={update("fabric")} className={inputClass}>
                <option value="">Select fabric</option>
                {FABRIC_OPTIONS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Size requirements" required>
              <select required value={form.size} onChange={update("size")} className={inputClass}>
                <option value="">Select size</option>
                {SIZE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Design preferences" required>
              <textarea
                required
                rows={4}
                value={form.design}
                onChange={update("design")}
                className={inputClass}
                placeholder="Silhouette, sleeves, buttons, embroidery, open vs closed front..."
              />
            </Field>

            <Field label="Special instructions">
              <textarea
                rows={3}
                value={form.instructions}
                onChange={update("instructions")}
                className={inputClass}
                placeholder="Delivery timeline, lining, hijab matching, or any other notes"
              />
            </Field>

            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] hover:opacity-90 transition-opacity"
            >
              Send customization request
            </button>
            <p className="text-xs text-muted-foreground">
              Submitting opens WhatsApp with your details pre-filled so our atelier can respond personally.
            </p>
          </form>
        )}
      </section>
    </>
  );
}

const inputClass =
  "w-full bg-background border border-input px-4 py-3 text-sm outline-none focus:border-foreground transition-colors";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {required && <span className="text-foreground"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
