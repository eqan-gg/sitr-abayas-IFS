import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/products";
import { shopCategories, categoryTitle, categoryDescription } from "@/lib/categories";
import { ProductCard } from "@/components/ProductCard";
import { QuickView } from "@/components/QuickView";
import { cn } from "@/lib/utils";
import { pageTitle } from "@/lib/brand";

type Search = { cat?: string; sort?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
    sort: typeof s.sort === "string" ? s.sort : undefined,
  }),
  component: ShopPage,
  head: () => ({
    meta: [
      { title: pageTitle("Shop") },
      {
        name: "description",
        content:
          "Explore abaya collections: new arrivals, standard, university, formal, casual, wedding guest, and premium pieces.",
      },
    ],
  }),
});

const SIZES = ["XS", "S", "M", "L", "XL", "One Size"];
const FABRICS = ["Nida Crepe", "Heavy-weight Nida", "Jersey Crepe", "Silk-blend Nida", "Italian-import Nida"];

function ShopPage() {
  const { cat, sort } = Route.useSearch();
  const [quick, setQuick] = useState<(typeof products)[number] | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [price, setPrice] = useState(30000);
  const [size, setSize] = useState<string | null>(null);

  const title = categoryTitle(cat);
  const subtitle = categoryDescription(cat);

  let list = products.filter((p) => {
    if (cat === "new") {
      if (!p.badge?.toLowerCase().includes("new") && p.category !== "new") return false;
    } else if (cat && p.category !== cat) return false;
    if ((p.salePrice ?? p.price) > price) return false;
    if (size && !p.sizes.includes(size)) return false;
    return true;
  });
  if (sort === "low") list = [...list].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
  if (sort === "high") list = [...list].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
  if (sort === "best") list = [...list].sort((a, b) => b.reviews - a.reviews);

  const categoryLinks = useMemo(
    () => [["", "All Abayas"], ...shopCategories.map((c) => [c.slug, c.shortName ?? c.name] as const)],
    [],
  );

  const Filters = () => (
    <div className="space-y-8">
      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Category</div>
        <ul className="space-y-2 text-sm">
          {categoryLinks.map(([slug, label]) => (
            <li key={slug || "all"}>
              <Link
                to="/shop"
                search={(prev: Search) => ({ ...prev, cat: slug || undefined })}
                className={cn(
                  "hover:text-foreground transition",
                  (cat ?? "") === slug ? "text-foreground font-medium" : "text-muted-foreground",
                )}
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
          type="range"
          min={2000}
          max={30000}
          step={500}
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          className="w-full accent-primary"
        />
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Size</div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(size === s ? null : s)}
              className={cn(
                "min-w-[40px] h-9 px-3 text-xs border",
                size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Fabric</div>
        <ul className="space-y-2.5 text-sm">
          {FABRICS.map((f) => (
            <li key={f}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-primary" /> <span>{f}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] mb-4">Availability</div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" className="accent-primary" /> In stock only
        </label>
      </div>
    </div>
  );

  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 py-12 sm:py-14 md:py-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Collection</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl mt-3">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          <p className="mt-2 text-sm text-muted-foreground">{list.length} pieces</p>
        </div>
      </section>

      {/* Horizontal category chips — mobile & tablet */}
      <div className="lg:hidden border-b border-border overflow-x-auto hide-scrollbar">
        <div className="flex gap-2 px-4 sm:px-5 py-3 w-max min-w-full">
          {categoryLinks.map(([slug, label]) => (
            <Link
              key={slug || "all"}
              to="/shop"
              search={(prev: Search) => ({ ...prev, cat: slug || undefined })}
              className={cn(
                "shrink-0 px-3 py-1.5 text-xs uppercase tracking-[0.12em] border rounded-full whitespace-nowrap",
                (cat ?? "") === slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary",
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 py-8 sm:py-10 md:py-14 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-14">
        <aside className="hidden lg:block sticky top-28 self-start">
          <Filters />
        </aside>
        <div>
          <div className="flex items-center justify-between mb-6 sm:mb-8 gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 text-sm shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="ml-auto flex items-center gap-2 text-sm min-w-0">
              <span className="text-muted-foreground hidden sm:inline shrink-0">Sort by</span>
              <select
                value={sort ?? ""}
                onChange={(e) => {
                  const v = e.target.value || undefined;
                  const params = new URLSearchParams();
                  if (cat) params.set("cat", cat);
                  if (v) params.set("sort", v);
                  history.replaceState(null, "", `?${params.toString()}`);
                  location.reload();
                }}
                className="bg-transparent border-b border-foreground px-1 py-1 text-sm outline-none max-w-[10rem] sm:max-w-none truncate"
              >
                <option value="">Newest</option>
                <option value="low">Price · Low to High</option>
                <option value="high">Price · High to Low</option>
                <option value="best">Best Selling</option>
              </select>
            </div>
          </div>

          {list.length === 0 ? (
            <div className="py-24 sm:py-32 text-center text-muted-foreground px-4">
              No pieces match your filters.
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 sm:gap-x-4 md:gap-x-6 md:gap-y-12"
            >
              {list.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={setQuick} />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[80] bg-foreground/40 lg:hidden" onClick={() => setFiltersOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-y-0 left-0 w-[min(85%,20rem)] bg-background p-5 sm:p-6 overflow-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl">Filters</h3>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <Filters />
          </div>
        </div>
      )}

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </>
  );
}
