import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { useState } from "react";

import { motion } from "motion/react";

import { ChevronDown, Heart, ShieldCheck, Star, Truck } from "lucide-react";

import { findProduct, formatPKR, products, type Product } from "@/lib/products";

import { useStore } from "@/lib/store";

import { ProductCard } from "@/components/ProductCard";

import { SizeGuide } from "@/components/SizeGuide";

import { BRAND, pageTitle, whatsAppUrl } from "@/lib/brand";

import { cn } from "@/lib/utils";



export const Route = createFileRoute("/product/$slug")({

  loader: ({ params }) => {

    const p = findProduct(params.slug);

    if (!p) throw notFound();

    return p;

  },

  component: ProductPage,

  head: ({ loaderData }) => ({

    meta: loaderData

      ? [

          { title: pageTitle(loaderData.title) },

          { name: "description", content: loaderData.description },

        ]

      : [],

  }),

});



function Accordion({ title, children, defaultOpen }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {

  const [open, setOpen] = useState(!!defaultOpen);

  return (

    <div className="border-b border-border">

      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4">

        <span className="text-xs uppercase tracking-[0.22em]">{title}</span>

        <ChevronDown className={cn("w-4 h-4 shrink-0 transition-transform", open && "rotate-180")} />

      </button>

      {open && <div className="pb-4 sm:pb-5 text-sm text-muted-foreground leading-relaxed">{children}</div>}

    </div>

  );

}



function ProductPage() {

  const p = Route.useLoaderData() as Product;

  const [activeImg, setActiveImg] = useState(0);

  const [size, setSize] = useState<string | null>(null);

  const [color, setColor] = useState<string | null>(p.colors[0]?.name ?? null);

  const [qty, setQty] = useState(1);

  const [added, setAdded] = useState(false);

  const { addToCart, toggleWishlist, wishlist } = useStore();

  const related = products.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 4);

  const wished = wishlist.includes(p.id);



  const handleAdd = () => {

    if (!size || !color) return;

    addToCart(p, { size, color, qty });

    setAdded(true);

    setTimeout(() => setAdded(false), 1800);

  };



  return (

    <>

      <nav

        aria-label="Breadcrumb"

        className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 pt-4 sm:pt-6 text-[11px] sm:text-xs text-muted-foreground"

      >

        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">

          <li><Link to="/" className="hover:text-ink">Home</Link></li>

          <li aria-hidden>/</li>

          <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>

          <li aria-hidden>/</li>

          <li className="text-ink truncate max-w-[min(100%,14rem)] sm:max-w-none">{p.title}</li>

        </ol>

      </nav>



      <section className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 py-6 sm:py-8 md:py-12">

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">

          {/* Gallery */}

          <div className="flex flex-col gap-3 md:grid md:grid-cols-[72px_1fr] lg:grid-cols-[80px_1fr] md:gap-3 min-w-0">

            <motion.div

              key={activeImg}

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ duration: 0.4 }}

              className="relative overflow-hidden bg-secondary/30 aspect-[4/5] w-full min-w-0 group order-1 md:order-2 md:col-start-2 md:row-start-1"

            >

              <img

                src={p.images[activeImg]}

                alt={p.title}

                className="w-full h-full object-cover transition-transform duration-[1500ms] md:group-hover:scale-110"

              />

            </motion.div>



            <div

              className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 order-2 md:order-1 md:flex-col md:overflow-visible md:pb-0 md:col-start-1 md:row-start-1"

              role="tablist"

              aria-label="Product images"

            >

              {p.images.map((src, i) => (

                <button

                  key={i}

                  role="tab"

                  aria-selected={activeImg === i}

                  onClick={() => setActiveImg(i)}

                  className={cn(

                    "shrink-0 aspect-[4/5] w-14 sm:w-16 md:w-full md:max-w-[80px] overflow-hidden border transition-colors",

                    activeImg === i ? "border-ink" : "border-transparent ring-1 ring-border/80",

                  )}

                >

                  <img src={src} alt="" className="w-full h-full object-cover" />

                </button>

              ))}

            </div>

          </div>



          {/* Info */}

          <div className="min-w-0 md:pt-2 lg:pt-4">

            {p.badge && (

              <span className="text-[10px] uppercase tracking-[0.25em] text-accent">{p.badge}</span>

            )}

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight break-words">

              {p.title}

            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">

              <div className="flex gap-0.5 text-ink">

                {Array.from({ length: 5 }).map((_, i) => (

                  <Star key={i} className={cn("w-3.5 h-3.5", i < Math.round(p.rating) && "fill-ink")} />

                ))}

              </div>

              <span className="text-xs text-muted-foreground">

                {p.rating} · {p.reviews} reviews

              </span>

            </div>



            <div className="mt-4 sm:mt-5 flex flex-wrap items-baseline gap-2 sm:gap-3">

              {p.salePrice ? (

                <>

                  <span className="text-xl sm:text-2xl">{formatPKR(p.salePrice)}</span>

                  <span className="text-sm sm:text-base text-muted-foreground line-through">{formatPKR(p.price)}</span>

                  <span className="w-full sm:w-auto text-xs uppercase tracking-[0.2em] text-accent">

                    Save {Math.round((1 - p.salePrice / p.price) * 100)}%

                  </span>

                </>

              ) : (

                <span className="text-xl sm:text-2xl">{formatPKR(p.price)}</span>

              )}

            </div>



            <p className="mt-5 sm:mt-6 text-sm text-muted-foreground leading-relaxed">{p.description}</p>



            <div className="mt-6 sm:mt-7">

              <div className="flex items-center justify-between mb-3 gap-2">

                <span className="text-xs uppercase tracking-[0.22em] truncate">

                  Colour · {color}

                </span>

              </div>

              <div className="flex flex-wrap gap-2">

                {p.colors.map((c) => (

                  <button

                    key={c.name}

                    onClick={() => setColor(c.name)}

                    className={cn(

                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 shrink-0",

                      color === c.name ? "border-ink" : "border-transparent ring-1 ring-border",

                    )}

                    style={{ background: c.hex }}

                    title={c.name}

                    aria-label={`Colour ${c.name}`}

                  />

                ))}

              </div>

            </div>



            <div className="mt-5 sm:mt-6">

              <div className="flex items-center justify-between mb-3 gap-2">

                <span className="text-xs uppercase tracking-[0.22em]">Size</span>

                <SizeGuide selectedSize={size}>

                  <button

                    type="button"

                    className="text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors shrink-0"

                  >

                    Size guide

                  </button>

                </SizeGuide>

              </div>

              <div className="flex flex-wrap gap-2">

                {p.sizes.map((s) => (

                  <button

                    key={s}

                    onClick={() => setSize(s)}

                    className={cn(

                      "min-w-[48px] sm:min-w-[52px] h-10 sm:h-11 px-3 sm:px-4 text-sm border",

                      size === s ? "border-ink bg-ink text-cream" : "border-border hover:border-ink",

                    )}

                  >

                    {s}

                  </button>

                ))}

              </div>

            </div>



            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch gap-3">

              <div className="flex items-center border border-border self-start sm:self-auto">

                <button

                  type="button"

                  onClick={() => setQty(Math.max(1, qty - 1))}

                  className="w-11 h-11 sm:h-12 grid place-items-center"

                  aria-label="Decrease quantity"

                >

                  −

                </button>

                <span className="w-10 text-center text-sm">{qty}</span>

                <button

                  type="button"

                  onClick={() => setQty(qty + 1)}

                  className="w-11 h-11 sm:h-12 grid place-items-center"

                  aria-label="Increase quantity"

                >

                  +

                </button>

              </div>

              <button

                onClick={handleAdd}

                disabled={!size || !color}

                className="flex-1 min-h-[48px] bg-ink text-cream text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] disabled:opacity-50 hover:bg-ink/90 transition relative overflow-hidden"

              >

                <motion.span

                  key={added ? "added" : "add"}

                  initial={{ y: 16, opacity: 0 }}

                  animate={{ y: 0, opacity: 1 }}

                  className="inline-block"

                >

                  {added ? "✓ Added to bag" : "Add to bag"}

                </motion.span>

              </button>

              <button

                onClick={() => toggleWishlist(p.id)}

                className="w-full sm:w-12 h-11 sm:h-12 grid place-items-center border border-border hover:border-ink sm:shrink-0"

                aria-label="Wishlist"

              >

                <Heart className={cn("w-4 h-4", wished && "fill-ink text-ink")} />

              </button>

            </div>



            <a

              href={whatsAppUrl(`Hi ${BRAND.name}, I'd like to order: ${p.title}`)}

              target="_blank"

              rel="noopener noreferrer"

              className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-ink/80 py-3.5 sm:py-4 text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] hover:bg-ink/5"

            >

              Order via WhatsApp

            </a>



            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-muted-foreground">

              <div className="flex items-start gap-2">

                <Truck className="w-4 h-4 mt-0.5 shrink-0" />

                <span>Free shipping on orders over Rs 15,000</span>

              </div>

              <div className="flex items-start gap-2">

                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />

                <span>14-day returns & complimentary alterations</span>

              </div>

            </div>



            <div className="mt-8 sm:mt-10">

              <Accordion title="Fabric & Details" defaultOpen>

                <p><strong className="text-foreground">Fabric:</strong> {p.fabric}</p>

                <p className="mt-2"><strong className="text-foreground">Care:</strong> {p.care}</p>

              </Accordion>

              <Accordion title="Shipping & Delivery">

                Standard delivery: 3–5 business days within Pakistan. Express international shipping available at checkout.

              </Accordion>

              <Accordion title="Returns & Exchanges">

                We accept returns within 14 days of delivery on unworn, unwashed items with original packaging.

              </Accordion>

              <Accordion title="FAQ">

                For tailoring requests, customisations, or wholesale enquiries please contact our atelier team.

              </Accordion>

            </div>

          </div>

        </div>

      </section>



      <section className="bg-secondary/30 py-12 sm:py-16 md:py-24">

        <div className="max-w-[1100px] mx-auto px-4 sm:px-5 md:px-10">

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 text-center">Customer Reviews</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

            {[

              { n: "Hira", r: 5, t: "The fit is impeccable. I get compliments every time I wear it." },

              { n: "Zainab", r: 5, t: "Excellent quality fabric. Worth every rupee." },

              { n: "Fatima", r: 4, t: "Loved the silhouette. Sleeves run slightly long but easy to alter." },

            ].map((r, i) => (

              <figure key={i} className="bg-background p-5 sm:p-6 border border-border">

                <div className="flex gap-0.5 text-ink">

                  {Array.from({ length: r.r }).map((_, j) => (

                    <Star key={j} className="w-3.5 h-3.5 fill-ink" />

                  ))}

                </div>

                <p className="mt-3 text-sm leading-relaxed">&ldquo;{r.t}&rdquo;</p>

                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">

                  — {r.n}

                </figcaption>

              </figure>

            ))}

          </div>

        </div>

      </section>



      {related.length > 0 && (

        <section className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-10 py-12 sm:py-16 md:py-20">

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 text-center">You may also love</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:gap-x-6">

            {related.map((rp) => (

              <ProductCard key={rp.id} product={rp} />

            ))}

          </div>

        </section>

      )}

    </>

  );

}


