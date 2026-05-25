import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as editorial, h as heroImg, f as fabric } from "./category-fabric-BYFCuXgW.mjs";
import { B as BRAND } from "./router-BLbcut6A.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] md:h-[78vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: editorial, alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-end p-8 md:p-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9
      }, className: "font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95]", children: [
        "Made with",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "intention."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto px-6 py-20 md:py-28 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-4 leading-tight", children: "A wardrobe for the women who choose modesty without compromise." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-7 text-muted-foreground leading-relaxed", children: [
        BRAND.name,
        " was born in a small atelier with a single idea — that modest fashion deserves the same care, craft and confidence as the finest houses in the world. We design pieces that move with you, made from fabrics chosen for their fall, their weight, their kindness to the skin."
      ] })
    ] }),
    [{
      img: heroImg,
      eyebrow: "The Founder",
      title: "Begun by hand, in one room.",
      body: `Our founder began ${BRAND.name} with a sewing machine, a small bolt of crepe, and a single belief — that the modest woman should never have to choose between modesty and design.`
    }, {
      img: fabric,
      eyebrow: "Our Fabric",
      title: "Considered to the last thread.",
      reverse: true,
      body: "Each season we travel to source crepes, silks and chiffons from mills with decades of practice. We sample, drape, and reject more than we keep. What you wear is the quiet result."
    }, {
      img: editorial,
      eyebrow: "Personal Tailoring",
      title: "Made to your measurements.",
      body: `Every ${BRAND.name} piece is offered with complimentary alterations. Tell us your measurements; we tailor each abaya so it falls precisely as it should.`
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `grid md:grid-cols-2 items-stretch ${s.reverse ? "" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `min-h-[380px] md:min-h-[560px] relative overflow-hidden ${s.reverse ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: "", className: "absolute inset-0 w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-8 md:px-16 py-16 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: s.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl md:text-4xl mt-3 leading-tight", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: s.body })
      ] }) })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-ink text-cream py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center", children: [{
        n: "01",
        h: "Craft",
        b: "Small batches, hand-finished by tailors we know by name."
      }, {
        n: "02",
        h: "Care",
        b: "Ethical sourcing, recyclable packaging, and a no-rush ethos."
      }, {
        n: "03",
        h: "Reach",
        b: "Shipping to over 60 countries — your wardrobe, wherever you are."
      }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] text-cream/50", children: v.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-2xl mt-3", children: v.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-cream/70 leading-relaxed", children: v.b })
      ] }, v.n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "inline-block bg-cream text-ink px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-cream/90", children: "Discover the Collection" }) })
    ] })
  ] });
}
export {
  AboutPage as component
};
