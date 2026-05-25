import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$6, p as products, b as cn } from "./router-BLbcut6A.mjs";
import { P as ProductCard } from "./ProductCard-BmU4T1b_.mjs";
import { Q as QuickView } from "./QuickView-BQiSyOIU.mjs";
import { h as SlidersHorizontal, X } from "../_libs/lucide-react.mjs";
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
const SIZES = ["XS", "S", "M", "L", "XL", "One Size"];
const FABRICS = ["Nida Crepe", "Mulberry Silk", "Jersey", "Chiffon", "Micro-Twill"];
function ShopPage() {
  const {
    cat,
    sort
  } = Route$6.useSearch();
  const [quick, setQuick] = reactExports.useState(null);
  const [filtersOpen, setFiltersOpen] = reactExports.useState(false);
  const [price, setPrice] = reactExports.useState(2e4);
  const [size, setSize] = reactExports.useState(null);
  const title = reactExports.useMemo(() => {
    switch (cat) {
      case "abayas":
        return "Abayas";
      case "hijabs":
        return "Hijabs";
      case "jilbabs":
        return "Jilbabs";
      case "naqab":
        return "Naqab";
      case "everyday":
        return "Everyday Essentials";
      case "new":
        return "New Arrivals";
      default:
        return "All Pieces";
    }
  }, [cat]);
  let list = products.filter((p) => {
    if (cat && cat !== "new" && p.category !== cat) return false;
    if ((p.salePrice ?? p.price) > price) return false;
    if (size && !p.sizes.includes(size)) return false;
    return true;
  });
  if (sort === "low") list = [...list].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
  if (sort === "high") list = [...list].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
  if (sort === "best") list = [...list].sort((a, b) => b.reviews - a.reviews);
  const Filters = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] mb-4", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [["", "All"], ["abayas", "Abayas"], ["hijabs", "Hijabs"], ["jilbabs", "Jilbabs"], ["naqab", "Naqab"], ["everyday", "Everyday"]].map(([slug, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: (prev) => ({
        ...prev,
        cat: slug || void 0
      }), className: cn("hover:text-ink transition", (cat ?? "") === slug ? "text-ink font-medium" : "text-muted-foreground"), children: label }) }, slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-[0.2em] mb-4", children: [
        "Price · up to Rs ",
        price.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 2e3, max: 2e4, step: 500, value: price, onChange: (e) => setPrice(+e.target.value), className: "w-full accent-ink" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] mb-4", children: "Size" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SIZES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSize(size === s ? null : s), className: cn("min-w-[40px] h-9 px-3 text-xs border", size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink"), children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] mb-4", children: "Fabric" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: FABRICS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-ink" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
      ] }) }, f)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] mb-4", children: "Availability" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-ink" }),
        " In stock only"
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-6xl mt-3", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
        list.length,
        " pieces"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-14 grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block sticky top-28 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFiltersOpen(true), className: "lg:hidden inline-flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
            " Filters"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground hidden sm:inline", children: "Sort by" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort ?? "", onChange: (e) => {
              const v = e.target.value || void 0;
              history.replaceState(null, "", `?${new URLSearchParams({
                ...cat ? {
                  cat
                } : {},
                ...v ? {
                  sort: v
                } : {}
              }).toString()}`);
              location.reload();
            }, className: "bg-transparent border-b border-ink px-1 py-1 text-sm outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Newest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Price · Low to High" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "Price · High to Low" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "best", children: "Best Selling" })
            ] })
          ] })
        ] }),
        list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-32 text-center text-muted-foreground", children: "No pieces match your filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, onQuickView: setQuick }, p.id)) })
      ] })
    ] }),
    filtersOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[80] bg-ink/40 lg:hidden", onClick: () => setFiltersOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: (e) => e.stopPropagation(), className: "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-background p-6 overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: "Filters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFiltersOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickView, { product: quick, onClose: () => setQuick(null) })
  ] });
}
export {
  ShopPage as component
};
