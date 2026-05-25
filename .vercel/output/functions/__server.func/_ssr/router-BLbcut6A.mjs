import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as Menu, S as Search, U as User, H as Heart, g as ShoppingBag, X } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-CW5gbNjW.css";
const StoreContext = reactExports.createContext(null);
function readLS(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function StoreProvider({ children }) {
  const [cart, setCart] = reactExports.useState([]);
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [hydrated, setHydrated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setCart(readLS("nm_cart", []));
    setWishlist(readLS("nm_wishlist", []));
    setHydrated(true);
  }, []);
  reactExports.useEffect(() => {
    if (hydrated) localStorage.setItem("nm_cart", JSON.stringify(cart));
  }, [cart, hydrated]);
  reactExports.useEffect(() => {
    if (hydrated) localStorage.setItem("nm_wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);
  const addToCart = (p, { size, color, qty = 1 }) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === p.id && i.size === size && i.color === color
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [
        ...prev,
        {
          productId: p.id,
          slug: p.slug,
          title: p.title,
          image: p.images[0],
          price: p.salePrice ?? p.price,
          size,
          color,
          qty
        }
      ];
    });
  };
  const removeFromCart = (i) => setCart((p) => p.filter((_, idx) => idx !== i));
  const setQty = (i, qty) => setCart((p) => p.map((it, idx) => idx === i ? { ...it, qty: Math.max(1, qty) } : it));
  const toggleWishlist = (id) => setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StoreContext.Provider,
    {
      value: { cart, wishlist, addToCart, removeFromCart, setQty, toggleWishlist, clearCart, cartCount, subtotal },
      children
    }
  );
}
function useStore() {
  const c = reactExports.useContext(StoreContext);
  if (!c) throw new Error("useStore must be used within StoreProvider");
  return c;
}
const p1 = "/assets/product-1-C93cmAMh.jpg";
const p2 = "/assets/product-2-CfTOpRvX.jpg";
const p3 = "/assets/product-3-BmJS8SlD.jpg";
const p4 = "/assets/product-4-CQ_iYtWB.jpg";
const p5 = "/assets/product-5-XQjpHzpv.jpg";
const p6 = "/assets/product-6-C-RuLJG5.jpg";
const products = [
  {
    id: "1",
    slug: "sitr-open-abaya-camel",
    title: "Open Abaya — Camel",
    category: "abayas",
    price: 14800,
    salePrice: 11900,
    images: [p1, p2],
    description: "A flowing open abaya in our signature camel crepe. Cut for ease and built to drape with a soft, weightless fall.",
    fabric: "Premium Korean nida crepe",
    care: "Dry clean recommended. Cool iron inside out.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#c8a070" },
      { name: "Onyx", hex: "#1a1a1a" },
      { name: "Cream", hex: "#efe6d6" }
    ],
    badge: "Bestseller",
    rating: 4.9,
    reviews: 218
  },
  {
    id: "2",
    slug: "luna-pearl-abaya-onyx",
    title: "Luna Pearl Abaya — Onyx",
    category: "abayas",
    price: 16500,
    images: [p2, p1],
    description: "Pearl-button placket on a clean A-line silhouette. A quiet statement, made for everyday elegance.",
    fabric: "Heavy-weight nida",
    care: "Hand wash cold or dry clean.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Onyx", hex: "#1a1a1a" }, { name: "Stone", hex: "#8a8174" }],
    badge: "New",
    rating: 4.8,
    reviews: 96
  },
  {
    id: "3",
    slug: "silk-hijab-blush",
    title: "Mulberry Silk Hijab — Blush",
    category: "hijabs",
    price: 4200,
    images: [p3, p3],
    description: "100% mulberry silk with a soft satin face and a barely-there hand-rolled hem.",
    fabric: "100% mulberry silk, 19 momme",
    care: "Hand wash with cold water and mild detergent.",
    sizes: ["One Size"],
    colors: [
      { name: "Blush", hex: "#f4c9c2" },
      { name: "Sand", hex: "#d8c6a8" },
      { name: "Ivory", hex: "#f1e9d8" }
    ],
    rating: 5,
    reviews: 312
  },
  {
    id: "4",
    slug: "amal-jilbab-olive",
    title: "Amal Jilbab — Olive",
    category: "jilbabs",
    price: 13200,
    images: [p4, p1],
    description: "A two-piece jilbab set with relaxed shoulders and a generous hood. Designed for movement.",
    fabric: "Soft-touch jersey crepe",
    care: "Machine wash cold, gentle cycle.",
    sizes: ["S", "M", "L"],
    colors: [{ name: "Olive", hex: "#5e6a3c" }, { name: "Charcoal", hex: "#2c2c2c" }],
    rating: 4.9,
    reviews: 144
  },
  {
    id: "5",
    slug: "embellished-naqab-charcoal",
    title: "Embellished Naqab — Charcoal",
    category: "naqab",
    price: 3800,
    images: [p5, p3],
    description: "Featherweight chiffon naqab with a delicate hand-set crystal at the brow.",
    fabric: "Silk chiffon",
    care: "Hand wash cold.",
    sizes: ["One Size"],
    colors: [{ name: "Charcoal", hex: "#3a3a3e" }, { name: "Black", hex: "#0a0a0a" }],
    badge: "Limited",
    rating: 4.8,
    reviews: 67
  },
  {
    id: "6",
    slug: "everyday-tunic-rose",
    title: "Everyday Tunic — Rose",
    category: "everyday",
    price: 6900,
    salePrice: 5500,
    images: [p6, p4],
    description: "A long-line tunic with side pockets, made for ease over wide-leg trousers.",
    fabric: "Stretch micro-twill",
    care: "Machine wash cold.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Rose", hex: "#b48077" },
      { name: "Stone", hex: "#a6997f" },
      { name: "Black", hex: "#0a0a0a" }
    ],
    badge: "Sale",
    rating: 4.7,
    reviews: 189
  }
];
const categories = [
  { slug: "abayas", name: "Abayas", image: p1 },
  { slug: "hijabs", name: "Hijabs", image: p3 },
  { slug: "jilbabs", name: "Jilbabs", image: p4 },
  { slug: "naqab", name: "Naqab", image: p5 },
  { slug: "everyday", name: "Everyday", image: p6 }
];
function findProduct(slug) {
  return products.find((p) => p.slug === slug);
}
function formatPKR(n) {
  return "Rs " + n.toLocaleString("en-PK");
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const BRAND = {
  name: "Sitr Abayas",
  tagline: "Considered modest fashion, made with intention.",
  description: "Sitr Abayas crafts elegant abayas, hijabs and jilbabs in small batches. Worldwide shipping.",
  email: "hello@sitrabayas.com",
  instagram: "@sitr.abayas",
  whatsappNumber: "923000000000"
};
function pageTitle(page) {
  return page ? `${page} — ${BRAND.name}` : `${BRAND.name} — Modest Fashion`;
}
function whatsAppUrl(message) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop?cat=new", label: "New Arrivals" },
  { to: "/shop?cat=abayas", label: "Abayas" },
  { to: "/shop?cat=hijabs", label: "Hijabs" },
  { to: "/shop?cat=jilbabs", label: "Jilbabs" },
  { to: "/shop?cat=everyday", label: "Everyday" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
const ANNOUNCEMENTS = [
  "Complimentary worldwide shipping over Rs 15,000",
  "New Ramadan Edit — now available",
  "Free alterations on every abaya",
  "Sign in for early access to private drops"
];
function AnnouncementBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink text-cream text-[11px] tracking-[0.18em] uppercase overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex marquee whitespace-nowrap py-2.5", children: [...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-10 inline-flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "◆" }),
    " ",
    a
  ] }, i)) }) });
}
function SearchOverlay({ open, onClose }) {
  const [q, setQ] = reactExports.useState("");
  const results = q ? products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())).slice(0, 6) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[80] bg-ink/40 backdrop-blur-sm",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { y: -40, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -40, opacity: 0 },
          transition: { duration: 0.25 },
          onClick: (e) => e.stopPropagation(),
          className: "bg-background border-b border-border px-4 sm:px-6 md:px-12 py-6 sm:py-10 max-h-[85dvh] overflow-y-auto",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-b border-ink/20 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 text-ink/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  autoFocus: true,
                  value: q,
                  onChange: (e) => setQ(e.target.value),
                  placeholder: "Search for abayas, hijabs...",
                  className: "flex-1 min-w-0 bg-transparent outline-none text-xl sm:text-2xl md:text-3xl font-serif placeholder:text-ink/30"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-ink/60 hover:text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              !q && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-ink/50 mb-3", children: "Trending" }),
              !q && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Open Abaya", "Silk Hijab", "Ramadan Edit", "Jilbab", "Naqab"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setQ(t),
                  className: "px-3 py-1.5 text-xs border border-border rounded-full hover:bg-secondary",
                  children: t
                },
                t
              )) }),
              results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: results.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/product/$slug",
                  params: { slug: p.slug },
                  onClick: onClose,
                  className: "flex items-center gap-4 py-3 hover:bg-secondary/50 -mx-2 px-2 rounded",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[0], alt: "", className: "w-14 h-16 object-cover" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: p.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: formatPKR(p.salePrice ?? p.price) })
                    ] })
                  ]
                }
              ) }, p.id)) }),
              q && results.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-6", children: "No matches. Try another keyword." })
            ] })
          ] })
        }
      )
    }
  ) });
}
function MobileMenu({ open, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[70] bg-ink/40",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        initial: { x: "-100%" },
        animate: { x: 0 },
        exit: { x: "-100%" },
        transition: { type: "tween", duration: 0.3 },
        className: "fixed top-0 left-0 bottom-0 z-[71] w-[85%] max-w-sm bg-background flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg sm:text-xl tracking-wide", children: BRAND.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-auto p-5 space-y-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: onClose,
              className: "block py-3 text-lg font-serif border-b border-border/50",
              children: n.label
            },
            n.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-border text-sm space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", onClick: onClose, className: "block", children: "Sign in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block text-muted-foreground", children: "Track Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block text-muted-foreground", children: "Help & Support" })
          ] })
        ]
      }
    )
  ] }) });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const { cartCount, wishlist } = useStore();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: cn(
      "sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-all",
      scrolled ? "border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]" : ""
    ), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto_1fr] items-center h-14 sm:h-16 md:h-20 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden", onClick: () => setMenuOpen(true), "aria-label": "Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7 text-[13px] tracking-wide", children: NAV.slice(1, 6).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "relative py-1 hover:text-ink transition-colors text-foreground/80\r\n                               after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-ink\r\n                               hover:after:w-full after:transition-all after:duration-300",
            children: n.label
          },
          n.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "justify-self-center font-serif text-sm sm:text-lg md:text-2xl tracking-[0.08em] sm:tracking-[0.15em] md:tracking-[0.2em] text-center leading-tight px-1",
          children: BRAND.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-4 md:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchOpen(true), "aria-label": "Search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", "aria-label": "Account", className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/wishlist", "aria-label": "Wishlist", className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }),
          wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-2 text-[10px] bg-ink text-cream w-4 h-4 rounded-full grid place-items-center", children: wishlist.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cart", "aria-label": "Cart", className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5" }),
          cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-2 text-[10px] bg-ink text-cream w-4 h-4 rounded-full grid place-items-center", children: cartCount })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenu, { open: menuOpen, onClose: () => setMenuOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchOverlay, { open: searchOpen, onClose: () => setSearchOpen(false) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 bg-ink text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 grid gap-10 sm:gap-12 grid-cols-2 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.12em] sm:tracking-[0.2em]", children: BRAND.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-cream/60 leading-relaxed max-w-xs", children: [
          BRAND.tagline,
          " Crafted in small batches, shipped worldwide."
        ] })
      ] }),
      [
        { h: "Shop", l: ["New Arrivals", "Abayas", "Hijabs", "Jilbabs", "Naqab", "Sale"] },
        { h: BRAND.name, l: ["Our Story", "Atelier", "Journal", "Sustainability"] },
        { h: "Support", l: ["Contact", "Shipping", "Returns", "Size Guide", "FAQ"] }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-cream/70 mb-4", children: c.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: c.l.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-cream/80 hover:text-cream", children: x }) }, x)) })
      ] }, c.h))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-cream/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        BRAND.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Cookies" })
      ] })
    ] }) })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: whatsAppUrl(`Hello ${BRAND.name}, I'd like to enquire.`),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "w-7 h-7", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.52 3.48A11.85 11.85 0 0012.06 0C5.5 0 .17 5.32.17 11.88c0 2.1.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 005.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.43-8.44zM12.07 21.5h-.01a9.6 9.6 0 01-4.9-1.34l-.35-.21-3.76.98 1-3.66-.23-.38a9.59 9.59 0 01-1.47-5.01c0-5.31 4.32-9.63 9.64-9.63a9.6 9.6 0 016.81 2.82 9.55 9.55 0 012.83 6.82c0 5.32-4.33 9.64-9.65 9.64zm5.29-7.22c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.15s-.75.94-.92 1.14c-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.82 1.2 3.02c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" }) }) })
      ]
    }
  );
}
function Layout({ children }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [path]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: pageTitle() },
      { name: "description", content: BRAND.description },
      { name: "author", content: BRAND.name },
      { property: "og:title", content: pageTitle() },
      { property: "og:description", content: BRAND.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: BRAND.instagram }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StoreProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) });
}
const $$splitComponentImporter$7 = () => import("./wishlist-3tfaEOuW.mjs");
const Route$7 = createFileRoute("/wishlist")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Wishlist")
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./shop-BRdwZ8us.mjs");
const Route$6 = createFileRoute("/shop")({
  validateSearch: (s) => ({
    cat: typeof s.cat === "string" ? s.cat : void 0,
    sort: typeof s.sort === "string" ? s.sort : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Shop")
    }, {
      name: "description",
      content: "Explore our edit of premium modest fashion: abayas, hijabs, jilbabs, naqab and everyday essentials."
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./login-DCxAk7hJ.mjs");
const Route$5 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Sign In")
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./contact-eIsSlPnx.mjs");
const Route$4 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Contact")
    }, {
      name: "description",
      content: "Reach our atelier team — we reply within one business day."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./cart-B1lGIfFd.mjs");
const Route$3 = createFileRoute("/cart")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Your Bag")
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./about-DIbVIr-i.mjs");
const Route$2 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Our Story")
    }, {
      name: "description",
      content: `${BRAND.name} is a modest fashion atelier crafting considered abayas, hijabs and jilbabs in small batches with global reach.`
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./index-CdGIv7SN.mjs");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: pageTitle("Considered Modest Fashion")
    }, {
      name: "description",
      content: `Discover ${BRAND.name}'s premium edit of abayas, hijabs and jilbabs. Free shipping over Rs 15,000.`
    }]
  })
});
const $$splitComponentImporter = () => import("./product._slug-eUvnRtsL.mjs");
const Route = createFileRoute("/product/$slug")({
  loader: ({
    params
  }) => {
    const p = findProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: pageTitle(loaderData.title)
    }, {
      name: "description",
      content: loaderData.description
    }] : []
  })
});
const WishlistRoute = Route$7.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$8
});
const ShopRoute = Route$6.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$8
});
const LoginRoute = Route$5.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const CartRoute = Route$3.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ProductSlugRoute = Route.update({
  id: "/product/$slug",
  path: "/product/$slug",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  ContactRoute,
  LoginRoute,
  ShopRoute,
  WishlistRoute,
  ProductSlugRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BRAND as B,
  Route$6 as R,
  Route as a,
  cn as b,
  categories as c,
  formatPKR as f,
  products as p,
  router as r,
  useStore as u,
  whatsAppUrl as w
};
