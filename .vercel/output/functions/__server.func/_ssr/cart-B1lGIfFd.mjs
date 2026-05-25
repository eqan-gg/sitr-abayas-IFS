import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useStore, f as formatPKR, p as products } from "./router-BLbcut6A.mjs";
import { P as ProductCard } from "./ProductCard-BmU4T1b_.mjs";
import { X, d as Minus, e as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CartPage() {
  const {
    cart,
    removeFromCart,
    setQty,
    subtotal
  } = useStore();
  const shipping = subtotal > 15e3 || subtotal === 0 ? 0 : 500;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl", children: "Your Bag" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
        cart.length,
        " ",
        cart.length === 1 ? "item" : "items"
      ] }),
      cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your bag is empty." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-6 inline-block bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.25em]", children: "Continue Shopping" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: cart.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-6 flex gap-3 sm:gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$slug", params: {
            slug: item.slug
          }, className: "block w-24 md:w-32 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "aspect-[4/5] w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$slug", params: {
                  slug: item.slug
                }, className: "font-serif text-lg", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
                  item.color,
                  " · ",
                  item.size
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(i), className: "text-muted-foreground hover:text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(i, item.qty - 1), className: "w-9 h-9 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 text-center text-sm", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(i, item.qty + 1), className: "w-9 h-9 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: formatPKR(item.price * item.qty) })
            ] })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "bg-secondary/40 p-5 sm:p-6 md:p-8 h-fit lg:sticky lg:top-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl mb-6", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPKR(subtotal) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shipping === 0 ? "Free" : formatPKR(shipping) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 mt-3 flex justify-between text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatPKR(subtotal + shipping) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Promo code", className: "flex-1 bg-background border border-border px-3 py-3 text-sm outline-none focus:border-ink" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border border-ink px-4 text-xs uppercase tracking-[0.2em]", children: "Apply" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-6 w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.28em] hover:bg-ink/90", children: "Checkout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-3 text-center", children: "Secure checkout · COD, Stripe & PayPal accepted" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-5 md:px-10 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl mb-8", children: "You may also love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6", children: products.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
export {
  CartPage as component
};
