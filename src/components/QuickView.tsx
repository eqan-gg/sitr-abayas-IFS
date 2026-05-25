import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { X } from "lucide-react";

import { formatPKR, type Product } from "@/lib/products";

import { useStore } from "@/lib/store";

import { SizeGuide } from "@/components/SizeGuide";

import { cn } from "@/lib/utils";



export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {

  const { addToCart } = useStore();

  const [size, setSize] = useState<string | null>(null);

  const [color, setColor] = useState<string | null>(null);



  return (

    <AnimatePresence>

      {product && (

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          className="fixed inset-0 z-[90] bg-ink/50 backdrop-blur-sm p-0 sm:p-4 grid place-items-end sm:place-items-center"

          onClick={onClose}

        >

          <motion.div

            initial={{ y: "100%" }}

            animate={{ y: 0 }}

            exit={{ y: "100%" }}

            transition={{ duration: 0.3 }}

            onClick={(e) => e.stopPropagation()}

            className="relative bg-background w-full max-h-[96dvh] sm:max-h-[90vh] sm:max-w-4xl overflow-auto grid grid-cols-1 md:grid-cols-2 rounded-t-xl sm:rounded-none"

          >

            <button

              onClick={onClose}

              className="absolute top-3 right-3 z-10 bg-background/90 rounded-full p-2 shadow-sm"

              aria-label="Close"

            >

              <X className="w-4 h-4" />

            </button>

            <img

              src={product.images[0]}

              alt={product.title}

              className="w-full aspect-[4/5] md:aspect-auto md:max-h-[80vh] object-cover"

            />

            <div className="p-5 sm:p-8 md:p-10 min-w-0">

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight pr-8">{product.title}</h2>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-base">

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

                <div className="flex flex-wrap gap-2">

                  {product.colors.map((c) => (

                    <button

                      key={c.name}

                      onClick={() => setColor(c.name)}

                      className={cn(

                        "w-9 h-9 rounded-full border-2 shrink-0",

                        color === c.name ? "border-ink" : "border-transparent ring-1 ring-border",

                      )}

                      style={{ background: c.hex }}

                      title={c.name}

                    />

                  ))}

                </div>

              </div>

              <div className="mt-5">

                <div className="flex items-center justify-between mb-2 gap-2">

                  <span className="text-xs uppercase tracking-[0.2em]">Size</span>

                  <SizeGuide selectedSize={size}>

                    <button

                      type="button"

                      className="text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground shrink-0"

                    >

                      Size guide

                    </button>

                  </SizeGuide>

                </div>

                <div className="flex flex-wrap gap-2">

                  {product.sizes.map((s) => (

                    <button

                      key={s}

                      onClick={() => setSize(s)}

                      className={cn(

                        "min-w-[44px] px-3 h-10 text-sm border",

                        size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink",

                      )}

                    >

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


