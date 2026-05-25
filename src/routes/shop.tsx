import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { QuickView } from "@/components/QuickView";
import { cn } from "@/lib/utils";

type Search = { cat?: string; sort?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
    sort: typeof s.sort === "string" ? s.sort : undefined,
  }),
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop — Noor Modest Fashion" },
      { name: "description", content: "Explore our edit of premium modest fashion: abayas, hijabs, jilbabs, naqab and everyday essentials." },
    ],
  }),
});

const SIZES = ["XS", "S", "M", "L", "XL", "One Size"];
const FABRICS = ["Nida Crepe", "Mulberry Silk", "Jersey", "Chiffon", "Micro-Twill"];

function ShopPage() {
  const { cat, sort } = Route.useSearch();
  const [quick, setQuick] = useState<typeof products[number] | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [price, setPrice] = useState(20000);
  const [size, setSize] = useState<string | null>(null);

  const title = useMemo(() => {
    switch (cat) {
      case "abayas": return "Abayas";
      case "hijabs": return "Hijabs";
      case "jilbabs": return "Jilbabs";
      case "naqab": return "Naqab";
      case "everyday": return "Everyday Essentials";
      case "new": return "New Arrivals";
      default: return "All Pieces";
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

  const Filters = () => (
    <div className="space-y-8">
      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Category</div>
        <ul className="space-y-2 text-sm">
          {[
            ["", "All"], ["abayas", "Abayas"], ["hijabs", "Hijabs"],
            ["jilbabs", "Jilbabs"], ["naqab", "Naqab"], ["everyday", "Everyday"],
          ].map(([slug, label]) => (
            <li key={slug}>
              <Link
                to="/shop"
                search={(prev) => ({ ...prev, cat: slug || undefined })}
                className={cn("hover:text-ink transition", (cat ?? "") === slug ? "text-ink font-medium" : "text-muted-foreground")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Price · up to Rs {price.toLocaleString()}</div>
        <input
          type="range" min={2000} max={20000} step={500}
          value={price} onChange={(e) => setPrice(+e.target.value)}
          className="w-full accent-ink"
        />
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Size</div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSize(size === s ? null : s)}
              className={cn("min-w-[40px] h-9 px-3 text-xs border", size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink")}
            >{s}</button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Fabric</div>
        <ul className="space-y-2.5 text-sm">
          {FABRICS.map((f) => (
            <li key={f}><label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-ink" /> <span>{f}</span>
            </label></li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Availability</div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" className="accent-ink" /> In stock only
        </label>
      </div>
    </div>
  );

  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Collection</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-3">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{list.length} pieces</p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-14 grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
        <aside className="hidden lg:block sticky top-28 self-start">
          <Filters />
        </aside>
        <div>
          <div className="flex items-center justify-between mb-8">
            <button onClick={() => setFiltersOpen(true)} className="lg:hidden inline-flex items-center gap-2 text-sm">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="ml-auto flex items-center gap-2 text-sm">
              <span className="text-muted-foreground hidden sm:inline">Sort by</span>
              <select
                value={sort ?? ""}
                onChange={(e) => {
                  const v = e.target.value || undefined;
                  history.replaceState(null, "", `?${new URLSearchParams({ ...(cat ? { cat } : {}), ...(v ? { sort: v } : {}) }).toString()}`);
                  location.reload();
                }}
                className="bg-transparent border-b border-ink px-1 py-1 text-sm outline-none"
              >
                <option value="">Newest</option>
                <option value="low">Price · Low to High</option>
                <option value="high">Price · High to Low</option>
                <option value="best">Best Selling</option>
              </select>
            </div>
          </div>

          {list.length === 0 ? (
            <div className="py-32 text-center text-muted-foreground">No pieces match your filters.</div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6"
            >
              {list.map((p) => <ProductCard key={p.id} product={p} onQuickView={setQuick} />)}
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile filters drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[80] bg-ink/40 lg:hidden" onClick={() => setFiltersOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-background p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl">Filters</h3>
              <button onClick={() => setFiltersOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <Filters />
          </div>
        </div>
      )}

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </>
  );
}