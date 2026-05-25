import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useStore } from "@/lib/store";
import { products, formatPKR } from "@/lib/products";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop?cat=new", label: "New Arrivals" },
  { to: "/shop?cat=abayas", label: "Abayas" },
  { to: "/shop?cat=hijabs", label: "Hijabs" },
  { to: "/shop?cat=jilbabs", label: "Jilbabs" },
  { to: "/shop?cat=everyday", label: "Everyday" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const ANNOUNCEMENTS = [
  "Complimentary worldwide shipping over Rs 15,000",
  "New Ramadan Edit — now available",
  "Free alterations on every abaya",
  "Sign in for early access to private drops",
];

function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream text-[11px] tracking-[0.18em] uppercase overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-2.5">
        {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => (
          <span key={i} className="px-10 inline-flex items-center gap-3">
            <span className="opacity-50">◆</span> {a}
          </span>
        ))}
      </div>
    </div>
  );
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const results = q ? products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())).slice(0, 6) : [];
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-ink/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border-b border-border px-6 md:px-12 py-10"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 border-b border-ink/20 pb-3">
                <Search className="w-5 h-5 text-ink/60" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search for abayas, hijabs..."
                  className="flex-1 bg-transparent outline-none text-2xl md:text-3xl font-serif placeholder:text-ink/30"
                />
                <button onClick={onClose} className="text-ink/60 hover:text-ink"><X className="w-5 h-5" /></button>
              </div>
              <div className="mt-6">
                {!q && (
                  <div className="text-xs uppercase tracking-[0.2em] text-ink/50 mb-3">Trending</div>
                )}
                {!q && (
                  <div className="flex flex-wrap gap-2">
                    {["Open Abaya", "Silk Hijab", "Ramadan Edit", "Jilbab", "Naqab"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setQ(t)}
                        className="px-3 py-1.5 text-xs border border-border rounded-full hover:bg-secondary"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
                {results.length > 0 && (
                  <ul className="divide-y divide-border">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link
                          to="/product/$slug"
                          params={{ slug: p.slug }}
                          onClick={onClose}
                          className="flex items-center gap-4 py-3 hover:bg-secondary/50 -mx-2 px-2 rounded"
                        >
                          <img src={p.images[0]} alt="" className="w-14 h-16 object-cover" />
                          <div className="flex-1">
                            <div className="text-sm">{p.title}</div>
                            <div className="text-xs text-muted-foreground">{formatPKR(p.salePrice ?? p.price)}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {q && results.length === 0 && (
                  <p className="text-sm text-muted-foreground py-6">No matches. Try another keyword.</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/40" onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 z-[71] w-[85%] max-w-sm bg-background flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-serif text-2xl tracking-wide">NOOR</span>
              <button onClick={onClose}><X className="w-5 h-5" /></button>
            </div>
            <nav className="flex-1 overflow-auto p-5 space-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={onClose}
                  className="block py-3 text-lg font-serif border-b border-border/50"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t border-border text-sm space-y-2">
              <Link to="/login" onClick={onClose} className="block">Sign in</Link>
              <a href="#" className="block text-muted-foreground">Track Order</a>
              <a href="#" className="block text-muted-foreground">Help & Support</a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, wishlist } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-all",
        scrolled ? "border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]" : ""
      )}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-3 items-center h-16 md:h-20">
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Menu">
                <Menu className="w-5 h-5" />
              </button>
              <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide">
                {NAV.slice(1, 6).map((n) => (
                  <Link
                    key={n.label}
                    to={n.to}
                    className="relative py-1 hover:text-ink transition-colors text-foreground/80
                               after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-ink
                               hover:after:w-full after:transition-all after:duration-300"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>

            <Link to="/" className="justify-self-center font-serif text-2xl md:text-3xl tracking-[0.25em]">
              NOOR
            </Link>

            <div className="flex items-center justify-end gap-4 md:gap-5">
              <button onClick={() => setSearchOpen(true)} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/login" aria-label="Account" className="hidden sm:block">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/wishlist" aria-label="Wishlist" className="relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 text-[10px] bg-ink text-cream w-4 h-4 rounded-full grid place-items-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" aria-label="Cart" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 text-[10px] bg-ink text-cream w-4 h-4 rounded-full grid place-items-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-3xl tracking-[0.25em]">NOOR</div>
          <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
            Considered modest fashion, made with intention. Crafted in small batches, shipped worldwide.
          </p>
        </div>
        {[
          { h: "Shop", l: ["New Arrivals", "Abayas", "Hijabs", "Jilbabs", "Naqab", "Sale"] },
          { h: "House of Noor", l: ["Our Story", "Atelier", "Journal", "Sustainability"] },
          { h: "Support", l: ["Contact", "Shipping", "Returns", "Size Guide", "FAQ"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/70 mb-4">{c.h}</div>
            <ul className="space-y-2.5 text-sm">
              {c.l.map((x) => <li key={x}><a href="#" className="text-cream/80 hover:text-cream">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Noor Modest Fashion. All rights reserved.</span>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923000000000?text=Hello%20Noor%2C%20I%27d%20like%20to%20enquire."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M20.52 3.48A11.85 11.85 0 0012.06 0C5.5 0 .17 5.32.17 11.88c0 2.1.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 005.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.43-8.44zM12.07 21.5h-.01a9.6 9.6 0 01-4.9-1.34l-.35-.21-3.76.98 1-3.66-.23-.38a9.59 9.59 0 01-1.47-5.01c0-5.31 4.32-9.63 9.64-9.63a9.6 9.6 0 016.81 2.82 9.55 9.55 0 012.83 6.82c0 5.32-4.33 9.64-9.65 9.64zm5.29-7.22c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.15s-.75.94-.92 1.14c-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.82 1.2 3.02c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z"/>
        </svg>
      </span>
    </a>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { window.scrollTo({ top: 0 }); }, [path]);
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}