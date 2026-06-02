import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { shopCategories, customizedCategory } from "@/lib/categories";
import { cn } from "@/lib/utils";

export function ShopNavMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 py-1 hover:text-ink transition-colors text-foreground/80"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Shop
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-[60] mt-2 w-[min(100vw-2rem,22rem)] rounded-sm border border-border bg-popover shadow-lg py-2 max-h-[70dvh] overflow-y-auto">
          {shopCategories.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ cat: c.slug }}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="block px-4 py-2.5 hover:bg-secondary/80 transition-colors"
            >
              <span className="text-sm">{c.shortName ?? c.name}</span>
              <span className="block text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{c.description}</span>
            </Link>
          ))}
          <div className="border-t border-border mt-1 pt-1">
            <Link
              to={customizedCategory.href}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="block px-4 py-2.5 hover:bg-secondary/80 transition-colors"
            >
              <span className="text-sm font-medium">{customizedCategory.name}</span>
              <span className="block text-[11px] text-muted-foreground mt-0.5">Request a bespoke piece</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

/** Full category list for mobile drawer */
export function ShopNavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground py-2">Collections</div>
      {shopCategories.map((c) => (
        <Link
          key={c.slug}
          to="/shop"
          search={{ cat: c.slug }}
          onClick={onNavigate}
          className="block py-2.5 text-base font-serif border-b border-border/50"
        >
          {c.name}
        </Link>
      ))}
      <Link
        to={customizedCategory.href}
        onClick={onNavigate}
        className="block py-2.5 text-base font-serif border-b border-border/50"
      >
        {customizedCategory.name}
      </Link>
    </div>
  );
}
