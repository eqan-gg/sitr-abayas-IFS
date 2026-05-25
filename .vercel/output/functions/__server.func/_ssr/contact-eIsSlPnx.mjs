import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as BRAND, w as whatsAppUrl } from "./router-BLbcut6A.mjs";
import { c as MessageCircle, M as Mail, P as Phone, a as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-6xl mt-3", children: "We'd love to hear from you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "For styling advice, alterations or wholesale enquiries — our atelier team replies within one business day." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-background border border-border p-6 md:p-10 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl mb-4", children: "Send us a note" }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-accent", children: "Thank you — we'll be in touch shortly." }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Phone (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-ink/90", children: "Send Message" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        [{
          Icon: MessageCircle,
          h: "WhatsApp",
          l: "+92 300 000 0000",
          href: whatsAppUrl(`Hello ${BRAND.name}`)
        }, {
          Icon: Mail,
          h: "Email",
          l: BRAND.email,
          href: `mailto:${BRAND.email}`
        }, {
          Icon: Phone,
          h: "Phone",
          l: "+92 21 0000 000",
          href: "tel:+92210000000"
        }, {
          Icon: MapPin,
          h: "Atelier",
          l: "Plot 24, Khayaban-e-Shahbaz, Karachi",
          href: "#"
        }].map(({
          Icon,
          h,
          l,
          href
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: "block border-b border-border pb-6 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 mt-1 text-ink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: h }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl mt-1 group-hover:underline underline-offset-4", children: l })
          ] })
        ] }) }, h)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Atelier hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-sm space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mon — Fri" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "11:00 — 19:00" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Saturday" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "12:00 — 18:00" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sunday" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Closed" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1400px] mx-auto px-5 md:px-10 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Atelier location", src: "https://www.openstreetmap.org/export/embed.html?bbox=67.0%2C24.85%2C67.08%2C24.91&layer=mapnik", className: "w-full h-[240px] sm:h-[320px] md:h-[360px] border border-border", loading: "lazy" }) })
  ] });
}
export {
  ContactPage as component
};
