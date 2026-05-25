import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as products, B as BRAND, f as formatPKR, c as categories } from "./router-BLbcut6A.mjs";
import { P as ProductCard } from "./ProductCard-BmU4T1b_.mjs";
import { Q as QuickView } from "./QuickView-BQiSyOIU.mjs";
import { h as heroImg, e as editorial, f as fabric } from "./category-fabric-BYFCuXgW.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, i as Star, I as Instagram } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./SizeGuide-CQQgK_3H.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
function HomePage() {
  const [quick, setQuick] = reactExports.useState(null);
  const newArrivals = products.slice(0, 6);
  const bestSellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 min-h-[78vh] md:min-h-[88vh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-2 md:order-1 flex items-center px-4 sm:px-6 md:px-16 lg:px-24 py-12 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9,
        ease: "easeOut"
      }, className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] uppercase tracking-[0.32em] text-muted-foreground", children: "The Ramadan Edit · 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]", children: [
          "Elegance,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "quietly worn."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground leading-relaxed max-w-md", children: "A considered wardrobe of abayas, hijabs and modest essentials — cut from the season's finest fabrics, made in small batches." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-ink/90 transition", children: [
            "Shop Now",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
            cat: "abayas"
          }, className: "px-7 py-4 text-xs uppercase tracking-[0.25em] border-b border-ink hover:opacity-70", children: "Explore the Collection" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-8 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-ink text-ink" }),
            " 4.9 / 5 from 12,400+ clients"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block", children: "Worldwide shipping" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 1.05
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1.3,
        ease: "easeOut"
      }, className: "order-1 md:order-2 relative min-h-[55vh] md:min-h-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: `Model wearing ${BRAND.name} abaya`, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 bg-background/90 backdrop-blur px-4 py-3 sm:px-5 sm:py-4 max-w-full sm:max-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Look 01" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-base sm:text-lg mt-1", children: "Open Abaya — Camel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", children: formatPKR(11900) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Shop by category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3", children: "The Edit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hidden md:inline text-xs uppercase tracking-[0.22em] border-b border-ink pb-1", children: "View all" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.05
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
        cat: c.slug
      }, className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
        ] })
      ] }) }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 items-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] md:aspect-auto md:min-h-[560px] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: editorial, alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-8 md:px-16 lg:px-24 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Atelier Series" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mt-4 leading-tight", children: "Elegance meets modesty." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "A capsule of pieces conceived for the way you actually dress — at home, at work, at prayer. Made to last, made to layer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-8 inline-block text-xs uppercase tracking-[0.25em] border-b border-ink pb-1", children: "Discover Atelier" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Just landed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3", children: "New Arrivals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hidden md:inline text-xs uppercase tracking-[0.22em] border-b border-ink pb-1", children: "Shop all" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6", children: newArrivals.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, onQuickView: setQuick }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/30 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-5 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Loved by you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3", children: "Bestsellers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6", children: bestSellers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, onQuickView: setQuick }, p.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "In her words" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3", children: "Words from our community" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: [{
        q: "The cut, the fabric, the fall — everything feels considered. I haven't worn anything else in weeks.",
        n: "Aisha M.",
        l: "London"
      }, {
        q: `Modest fashion that doesn't compromise. My ${BRAND.name} abaya is now a wardrobe staple I can't imagine living without.`,
        n: "Sara K.",
        l: "Dubai"
      }, {
        q: "Beautifully packaged, beautifully made. The silk hijab is the softest I've ever owned.",
        n: "Maryam A.",
        l: "Kuala Lumpur"
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { initial: {
        opacity: 0,
        y: 16
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.1
      }, className: "border border-border p-8 md:p-10 bg-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-ink", children: Array.from({
          length: 5
        }).map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-ink" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-5 font-serif text-xl leading-snug", children: [
          '"',
          t.q,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
          "— ",
          t.n,
          ", ",
          t.l
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl sm:text-2xl md:text-3xl mt-3", children: BRAND.instagram }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2", children: "Follow our journal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-1.5", children: [heroImg, fabric, editorial, ...products.map((p) => p.images[0])].slice(0, 6).map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block aspect-square overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink text-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-cream/60", children: "Private list" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-4", children: "Be the first to know." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/70 leading-relaxed", children: "Sign up for early access to new collections, private drops and atelier stories." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "Email address", className: "flex-1 bg-transparent border border-cream/25 px-5 py-4 text-sm placeholder:text-cream/40 focus:border-cream outline-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-cream text-ink px-6 py-4 text-xs uppercase tracking-[0.25em] hover:bg-cream/90", children: "Subscribe" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickView, { product: quick, onClose: () => setQuick(null) })
  ] });
}
export {
  HomePage as component
};
