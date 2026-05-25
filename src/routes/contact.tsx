import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Noor" },
      { name: "description", content: "Reach our atelier team — we reply within one business day." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Get in touch</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-3">We'd love to hear from you.</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            For styling advice, alterations or wholesale enquiries — our atelier team replies within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-background border border-border p-6 md:p-10 space-y-5"
        >
          <h2 className="font-serif text-2xl mb-4">Send us a note</h2>
          {sent ? (
            <p className="text-sm text-accent">Thank you — we'll be in touch shortly.</p>
          ) : null}
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</span>
              <input required className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
              <input type="email" required className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone (optional)</span>
            <input className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</span>
            <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none resize-none" />
          </label>
          <button className="bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-ink/90">Send Message</button>
        </form>

        <div className="space-y-8">
          {[
            { Icon: MessageCircle, h: "WhatsApp", l: "+92 300 000 0000", href: "https://wa.me/923000000000" },
            { Icon: Mail, h: "Email", l: "atelier@noor.com", href: "mailto:atelier@noor.com" },
            { Icon: Phone, h: "Phone", l: "+92 21 0000 000", href: "tel:+92210000000" },
            { Icon: MapPin, h: "Atelier", l: "Plot 24, Khayaban-e-Shahbaz, Karachi", href: "#" },
          ].map(({ Icon, h, l, href }) => (
            <a key={h} href={href} className="block border-b border-border pb-6 group">
              <div className="flex items-start gap-4">
                <Icon className="w-5 h-5 mt-1 text-ink" />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{h}</div>
                  <div className="font-serif text-xl mt-1 group-hover:underline underline-offset-4">{l}</div>
                </div>
              </div>
            </a>
          ))}

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Atelier hours</div>
            <div className="mt-3 text-sm space-y-1">
              <div className="flex justify-between"><span>Mon — Fri</span><span>11:00 — 19:00</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>12:00 — 18:00</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20">
        <iframe
          title="Atelier location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=67.0%2C24.85%2C67.08%2C24.91&layer=mapnik"
          className="w-full h-[360px] border border-border"
          loading="lazy"
        />
      </section>
    </>
  );
}