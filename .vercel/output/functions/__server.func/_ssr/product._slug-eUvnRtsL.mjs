import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as Route, u as useStore, p as products, b as cn, f as formatPKR, w as whatsAppUrl, B as BRAND } from "./router-BLbcut6A.mjs";
import { P as ProductCard } from "./ProductCard-BmU4T1b_.mjs";
import { S as SizeGuide } from "./SizeGuide-CQQgK_3H.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { i as Star, H as Heart, T as Truck, f as ShieldCheck, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
function Accordion({
  title,
  children,
  defaultOpen
}) {
  const [open, setOpen] = reactExports.useState(!!defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.22em]", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("w-4 h-4 shrink-0 transition-transform", open && "rotate-180") })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 sm:pb-5 text-sm text-muted-foreground leading-relaxed", children })
  ] });
}
function ProductPage() {
  const p = Route.useLoaderData();
  const [activeImg, setActiveImg] = reactExports.useState(0);
  const [size, setSize] = reactExports.useState(null);
  const [color, setColor] = reactExports.useState(p.colors[0]?.name ?? null);
  const [qty, setQty] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const {
    addToCart,
    toggleWishlist,
    wishlist
  } = useStore();
  const related = products.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 4);
  const wished = wishlist.includes(p.id);
  const handleAdd = () => {
    if (!size || !color) return;
    addToCart(p, {
      size,
      color,
      qty
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 pt-4 sm:pt-6 text-[11px] sm:text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-x-1.5 gap-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ink", children: "Home" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-ink", children: "Shop" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-ink truncate max-w-[min(100%,14rem)] sm:max-w-none", children: p.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 py-6 sm:py-8 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:grid md:grid-cols-[72px_1fr] lg:grid-cols-[80px_1fr] md:gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 0.4
        }, className: "relative overflow-hidden bg-secondary/30 aspect-[4/5] w-full min-w-0 group order-1 md:order-2 md:col-start-2 md:row-start-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[activeImg], alt: p.title, className: "w-full h-full object-cover transition-transform duration-[1500ms] md:group-hover:scale-110" }) }, activeImg),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto hide-scrollbar pb-1 order-2 md:order-1 md:flex-col md:overflow-visible md:pb-0 md:col-start-1 md:row-start-1", role: "tablist", "aria-label": "Product images", children: p.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { role: "tab", "aria-selected": activeImg === i, onClick: () => setActiveImg(i), className: cn("shrink-0 aspect-[4/5] w-14 sm:w-16 md:w-full md:max-w-[80px] overflow-hidden border transition-colors", activeImg === i ? "border-ink" : "border-transparent ring-1 ring-border/80"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 md:pt-2 lg:pt-4", children: [
        p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-accent", children: p.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight break-words", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-ink", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("w-3.5 h-3.5", i < Math.round(p.rating) && "fill-ink") }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            p.rating,
            " · ",
            p.reviews,
            " reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-3", children: p.salePrice ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl sm:text-2xl", children: formatPKR(p.salePrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base text-muted-foreground line-through", children: formatPKR(p.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-full sm:w-auto text-xs uppercase tracking-[0.2em] text-accent", children: [
            "Save ",
            Math.round((1 - p.salePrice / p.price) * 100),
            "%"
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl sm:text-2xl", children: formatPKR(p.price) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 sm:mt-6 text-sm text-muted-foreground leading-relaxed", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 sm:mt-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-[0.22em] truncate", children: [
            "Colour · ",
            color
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setColor(c.name), className: cn("w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 shrink-0", color === c.name ? "border-ink" : "border-transparent ring-1 ring-border"), style: {
            background: c.hex
          }, title: c.name, "aria-label": `Colour ${c.name}` }, c.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 sm:mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.22em]", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SizeGuide, { selectedSize: size, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors shrink-0", children: "Size guide" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.sizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSize(s), className: cn("min-w-[48px] sm:min-w-[52px] h-10 sm:h-11 px-3 sm:px-4 text-sm border", size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink"), children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border self-start sm:self-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setQty(Math.max(1, qty - 1)), className: "w-11 h-11 sm:h-12 grid place-items-center", "aria-label": "Decrease quantity", children: "−" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center text-sm", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setQty(qty + 1), className: "w-11 h-11 sm:h-12 grid place-items-center", "aria-label": "Increase quantity", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAdd, disabled: !size || !color, className: "flex-1 min-h-[48px] bg-ink text-cream text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] disabled:opacity-50 hover:bg-ink/90 transition relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
            y: 16,
            opacity: 0
          }, animate: {
            y: 0,
            opacity: 1
          }, className: "inline-block", children: added ? "✓ Added to bag" : "Add to bag" }, added ? "added" : "add") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWishlist(p.id), className: "w-full sm:w-12 h-11 sm:h-12 grid place-items-center border border-border hover:border-ink sm:shrink-0", "aria-label": "Wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: cn("w-4 h-4", wished && "fill-ink text-ink") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsAppUrl(`Hi ${BRAND.name}, I'd like to order: ${p.title}`), target: "_blank", rel: "noopener noreferrer", className: "mt-3 inline-flex w-full items-center justify-center gap-2 border border-ink/80 py-3.5 sm:py-4 text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] hover:bg-ink/5", children: "Order via WhatsApp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free shipping on orders over Rs 15,000" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "14-day returns & complimentary alterations" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 sm:mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { title: "Fabric & Details", defaultOpen: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Fabric:" }),
              " ",
              p.fabric
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Care:" }),
              " ",
              p.care
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { title: "Shipping & Delivery", children: "Standard delivery: 3–5 business days within Pakistan. Express international shipping available at checkout." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { title: "Returns & Exchanges", children: "We accept returns within 14 days of delivery on unworn, unwashed items with original packaging." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { title: "FAQ", children: "For tailoring requests, customisations, or wholesale enquiries please contact our atelier team." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/30 py-12 sm:py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1100px] mx-auto px-4 sm:px-5 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 text-center", children: "Customer Reviews" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6", children: [{
        n: "Hira",
        r: 5,
        t: "The fit is impeccable. I get compliments every time I wear it."
      }, {
        n: "Zainab",
        r: 5,
        t: "Excellent quality fabric. Worth every rupee."
      }, {
        n: "Fatima",
        r: 4,
        t: "Loved the silhouette. Sleeves run slightly long but easy to alter."
      }].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-background p-5 sm:p-6 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-ink", children: Array.from({
          length: r.r
        }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-ink" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm leading-relaxed", children: [
          "“",
          r.t,
          "”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
          "— ",
          r.n
        ] })
      ] }, i)) })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 py-12 sm:py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 text-center", children: "You may also love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:gap-x-6", children: related.map((rp) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: rp }, rp.id)) })
    ] })
  ] });
}
export {
  ProductPage as component
};
