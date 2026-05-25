import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import editorial from "@/assets/editorial-1.jpg";
import hero from "@/assets/hero-1.jpg";
import fabric from "@/assets/category-fabric.jpg";
import { BRAND, pageTitle } from "@/lib/brand";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: pageTitle("Our Story") },
      { name: "description", content: `${BRAND.name} is a modest fashion atelier crafting considered abayas, hijabs and jilbabs in small batches with global reach.` },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[78vh] overflow-hidden">
        <img src={editorial} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative h-full flex items-end p-8 md:p-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95]"
          >
            Made with<br/>intention.
          </motion.h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Our Story</span>
        <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">
          A wardrobe for the women who choose modesty without compromise.
        </h2>
        <p className="mt-7 text-muted-foreground leading-relaxed">
          {BRAND.name} was born in a small atelier with a single idea — that modest fashion deserves
          the same care, craft and confidence as the finest houses in the world.
          We design pieces that move with you, made from fabrics chosen
          for their fall, their weight, their kindness to the skin.
        </p>
      </section>

      {[
        { img: hero, eyebrow: "The Founder", title: "Begun by hand, in one room.",
          body: `Our founder began ${BRAND.name} with a sewing machine, a small bolt of crepe, and a single belief — that the modest woman should never have to choose between modesty and design.` },
        { img: fabric, eyebrow: "Our Fabric", title: "Considered to the last thread.", reverse: true,
          body: "Each season we travel to source crepes, silks and chiffons from mills with decades of practice. We sample, drape, and reject more than we keep. What you wear is the quiet result." },
        { img: editorial, eyebrow: "Personal Tailoring", title: "Made to your measurements.",
          body: `Every ${BRAND.name} piece is offered with complimentary alterations. Tell us your measurements; we tailor each abaya so it falls precisely as it should.` },
      ].map((s, i) => (
        <section key={i} className={`grid md:grid-cols-2 items-stretch ${s.reverse ? "" : ""}`}>
          <div className={`min-h-[380px] md:min-h-[560px] relative overflow-hidden ${s.reverse ? "md:order-2" : ""}`}>
            <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 bg-secondary/30">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-md">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{s.eyebrow}</span>
              <h3 className="font-serif text-3xl md:text-4xl mt-3 leading-tight">{s.title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "01", h: "Craft", b: "Small batches, hand-finished by tailors we know by name." },
            { n: "02", h: "Care", b: "Ethical sourcing, recyclable packaging, and a no-rush ethos." },
            { n: "03", h: "Reach", b: "Shipping to over 60 countries — your wardrobe, wherever you are." },
          ].map((v) => (
            <div key={v.n}>
              <div className="text-xs tracking-[0.3em] text-cream/50">{v.n}</div>
              <h4 className="font-serif text-2xl mt-3">{v.h}</h4>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/shop" className="inline-block bg-cream text-ink px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-cream/90">
            Discover the Collection
          </Link>
        </div>
      </section>
    </>
  );
}