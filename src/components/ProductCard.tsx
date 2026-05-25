import { Link } from "@tanstack/react-router";
import { Heart, Eye } from "lucide-react";
import { motion } from "motion/react";
import { formatPKR, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product, onQuickView }: { product: Product; onQuickView?: (p: Product) => void }) {
  const { wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(product.id);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <div className="relative overflow-hidden bg-secondary/50 aspect-[4/5]">
        <Link to="/product/$slug" params={{ slug: product.slug }} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <img
            src={product.images[1] ?? product.images[0]}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="absolute top-3 left-3 bg-background/90 text-ink text-[10px] uppercase tracking-[0.18em] px-2.5 py-1">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          aria-label="Wishlist"
          className="absolute top-3 right-3 w-9 h-9 grid place-items-center bg-background/90 rounded-full hover:bg-background"
        >
          <Heart className={cn("w-4 h-4", wished && "fill-ink text-ink")} />
        </button>

        <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 bg-background/95 text-ink text-xs uppercase tracking-[0.18em] py-3 hover:bg-ink hover:text-cream transition-colors"
            >
              <span className="inline-flex items-center gap-2 justify-center"><Eye className="w-3.5 h-3.5" /> Quick view</span>
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 px-1">
        <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
          <h3 className="text-sm sm:text-[15px] font-serif leading-tight line-clamp-2">{product.title}</h3>
        </Link>
        <div className="mt-1.5 flex items-center gap-2 text-sm">
          {product.salePrice ? (
            <>
              <span>{formatPKR(product.salePrice)}</span>
              <span className="text-muted-foreground line-through text-xs">{formatPKR(product.price)}</span>
            </>
          ) : (
            <span>{formatPKR(product.price)}</span>
          )}
        </div>
        <div className="mt-2 flex gap-1.5">
          {product.colors.slice(0, 4).map((c) => (
            <span key={c.name} title={c.name} className="w-3 h-3 rounded-full border border-border" style={{ background: c.hex }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}