import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useStore, f as formatPKR, b as cn } from "./router-BLbcut6A.mjs";
import { S as SizeGuide } from "./SizeGuide-CQQgK_3H.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
function QuickView({ product, onClose }) {
  const { addToCart } = useStore();
  const [size, setSize] = reactExports.useState(null);
  const [color, setColor] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: product && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[90] bg-ink/50 backdrop-blur-sm p-0 sm:p-4 grid place-items-end sm:place-items-center",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { duration: 0.3 },
          onClick: (e) => e.stopPropagation(),
          className: "relative bg-background w-full max-h-[96dvh] sm:max-h-[90vh] sm:max-w-4xl overflow-auto grid grid-cols-1 md:grid-cols-2 rounded-t-xl sm:rounded-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-3 right-3 z-10 bg-background/90 rounded-full p-2 shadow-sm",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.images[0],
                alt: product.title,
                className: "w-full aspect-[4/5] md:aspect-auto md:max-h-[80vh] object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-8 md:p-10 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-xl sm:text-2xl md:text-3xl leading-tight pr-8", children: product.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap items-center gap-2 text-base", children: product.salePrice ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(product.salePrice) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-through text-sm", children: formatPKR(product.price) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(product.price) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] mb-2", children: "Colour" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setColor(c.name),
                    className: cn(
                      "w-9 h-9 rounded-full border-2 shrink-0",
                      color === c.name ? "border-ink" : "border-transparent ring-1 ring-border"
                    ),
                    style: { background: c.hex },
                    title: c.name
                  },
                  c.name
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em]", children: "Size" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SizeGuide, { selectedSize: size, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground shrink-0",
                      children: "Size guide"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSize(s),
                    className: cn(
                      "min-w-[44px] px-3 h-10 text-sm border",
                      size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink"
                    ),
                    children: s
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  disabled: !size || !color,
                  onClick: () => {
                    if (size && color) {
                      addToCart(product, { size, color });
                      onClose();
                    }
                  },
                  className: "mt-7 w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.25em] disabled:opacity-50 hover:bg-ink/90",
                  children: "Add to bag"
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}
export {
  QuickView as Q
};
