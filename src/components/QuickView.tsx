import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { formatPKR, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { addToCart } = useStore();
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-ink/50 backdrop-blur-sm p-4 grid place-items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-background w-full max-w-4xl grid md:grid-cols-2 max-h-[90vh] overflow-auto"
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-background/80 rounded-full p-2"><X className="w-4 h-4" /></button>
            <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover max-h-[80vh]" />
            <div className="p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl">{product.title}</h2>
              <div className="mt-2 flex items-center gap-2 text-base">
                {product.salePrice ? (
                  <>
                    <span>{formatPKR(product.salePrice)}</span>
                    <span className="text-muted-foreground line-through text-sm">{formatPKR(product.price)}</span>
                  </>
                ) : (
                  <span>{formatPKR(product.price)}</span>
                )}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.2em] mb-2">Colour</div>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button key={c.name} onClick={() => setColor(c.name)}
                      className={cn("w-8 h-8 rounded-full border-2", color === c.name ? "border-ink" : "border-transparent ring-1 ring-border")}
                      style={{ background: c.hex }} title={c.name} />
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.2em] mb-2">Size</div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button key={s} onClick={() => setSize(s)}
                      className={cn("min-w-[44px] px-3 h-10 text-sm border", size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink")}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button
                disabled={!size || !color}
                onClick={() => {
                  if (size && color) {
                    addToCart(product, { size, color });
                    onClose();
                  }
                }}
                className="mt-7 w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.25em] disabled:opacity-50 hover:bg-ink/90"
              >
                Add to bag
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}