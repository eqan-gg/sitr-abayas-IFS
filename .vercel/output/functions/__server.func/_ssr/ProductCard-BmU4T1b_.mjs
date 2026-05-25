import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useStore, b as cn, f as formatPKR } from "./router-BLbcut6A.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { H as Heart, E as Eye } from "../_libs/lucide-react.mjs";
function ProductCard({ product, onQuickView }) {
  const { wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(product.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-secondary/50 aspect-[4/5]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$slug", params: { slug: product.slug }, className: "block w-full h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.images[0],
                alt: product.title,
                loading: "lazy",
                className: "absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] group-hover:scale-[1.04] group-hover:opacity-0"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.images[1] ?? product.images[0],
                alt: "",
                loading: "lazy",
                className: "absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              }
            )
          ] }),
          product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-background/90 text-ink text-[10px] uppercase tracking-[0.18em] px-2.5 py-1", children: product.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: (e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              },
              "aria-label": "Wishlist",
              className: "absolute top-3 right-3 w-9 h-9 grid place-items-center bg-background/90 rounded-full hover:bg-background",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: cn("w-4 h-4", wished && "fill-ink text-ink") })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-3 bottom-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300", children: onQuickView && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onQuickView(product),
              className: "flex-1 bg-background/95 text-ink text-xs uppercase tracking-[0.18em] py-3 hover:bg-ink hover:text-cream transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
                " Quick view"
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$slug", params: { slug: product.slug }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-[15px] font-serif leading-tight line-clamp-2", children: product.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex items-center gap-2 text-sm", children: product.salePrice ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(product.salePrice) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-through text-xs", children: formatPKR(product.price) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(product.price) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex gap-1.5", children: product.colors.slice(0, 4).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: c.name, className: "w-3 h-3 rounded-full border border-border", style: { background: c.hex } }, c.name)) })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
