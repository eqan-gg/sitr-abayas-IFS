import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Instagram, Star } from "lucide-react";
import { products, categories, editorial, formatPKR } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { QuickView } from "@/components/QuickView";
import heroImg from "@/assets/hero-1.jpg";
import fabric from "@/assets/category-fabric.jpg";
import { BRAND, pageTitle } from "@/lib/brand";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: pageTitle("Considered Modest Fashion") },
      { name: "description", content: `Discover ${BRAND.name}'s premium abaya collections — new arrivals, formal, university, wedding guest, and bespoke customization.` },
    ],
  }),
});

function HomePage() {
  const [quick, setQuick] = useState<typeof products[number] | null>(null);
  const newArrivals = products.slice(0, 6);
  const bestSellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-secondary/40">
        <div className="grid md:grid-cols-2 min-h-[78vh] md:min-h-[88vh]">
          <div className="order-2 md:order-1 flex items-center px-4 sm:px-6 md:px-16 lg:px-24 py-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-xl"
            >
              <span className="inline-block text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                The Ramadan Edit · 2026
              </span>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
                Elegance,<br />quietly worn.
              </h1>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
                A considered wardrobe of abayas for every moment — from campus to celebration —
                cut from the finest fabrics, made in small batches.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/shop" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-ink/90 transition">
                  Shop Now
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/shop" search={{ cat: "standard" }} className="px-7 py-4 text-xs uppercase tracking-[0.25em] border-b border-ink hover:opacity-70">
                  Explore the Collection
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
                <div className="flex items-center gap-2"><Star className="w-3.5 h-3.5 fill-ink text-ink" /> 4.9 / 5 from 12,400+ clients</div>
                <div className="hidden sm:block">Worldwide shipping</div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="order-1 md:order-2 relative min-h-[55vh] md:min-h-full overflow-hidden"
          >
            <img src={heroImg} alt={`Model wearing ${BRAND.name} abaya`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 bg-background/90 backdrop-blur px-4 py-3 sm:px-5 sm:py-4 max-w-full sm:max-w-[220px]">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Look 01</div>
              <div className="font-serif text-base sm:text-lg mt-1">Open Abaya — Camel</div>
              <div className="text-xs mt-0.5">{formatPKR(11900)}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Shop by category</span>
            <h2 className="font-serif text-3xl md:text-5xl mt-3">The Edit</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-xs uppercase tracking-[0.22em] border-b border-ink pb-1">View all</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={i === 0 ? "col-span-2 sm:col-span-1" : undefined}
            >
              <Link to="/shop" search={{ cat: c.slug }} className="group block h-full">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-sm">
                  <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  <p className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-primary-foreground">
                    <span className="font-serif text-base sm:text-lg block">{c.shortName ?? c.name}</span>
                    <span className="text-[10px] sm:text-[11px] opacity-90 line-clamp-2 mt-1 hidden sm:block">{c.description}</span>
                  </p>
                </div>
                <div className="mt-2 sm:mt-3 flex items-center justify-between sm:hidden">
                  <span className="font-serif text-base">{c.shortName ?? c.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/customize"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.22em] border border-border hover:bg-secondary/60 transition-colors"
          >
            Customized Abayas
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* EDITORIAL SPLIT BANNER */}
      <section className="bg-secondary/40">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-[560px] relative overflow-hidden">
            <img src={editorial} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center px-8 md:px-16 lg:px-24 py-16">
            <div className="max-w-md">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Atelier Series</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">Elegance meets modesty.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                A capsule of pieces conceived for the way you actually dress — at home,
                at work, at prayer. Made to last, made to layer.
              </p>
              <Link to="/shop" className="mt-8 inline-block text-xs uppercase tracking-[0.25em] border-b border-ink pb-1">
                Discover Atelier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Just landed</span>
            <h2 className="font-serif text-3xl md:text-5xl mt-3">New Arrivals</h2>
          </div>
          <Link to="/shop" search={{ cat: "new" }} className="hidden md:inline text-xs uppercase tracking-[0.22em] border-b border-ink pb-1">Shop all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {newArrivals.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={setQuick} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Loved by you</span>
            <h2 className="font-serif text-3xl md:text-5xl mt-3">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={setQuick} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">In her words</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">Words from our community</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { q: "The cut, the fabric, the fall — everything feels considered. I haven't worn anything else in weeks.", n: "Aisha M.", l: "London" },
            { q: `Modest fashion that doesn't compromise. My ${BRAND.name} abaya is now a wardrobe staple I can't imagine living without.`, n: "Sara K.", l: "Dubai" },
            { q: "Beautifully packaged, beautifully made. The silk hijab is the softest I've ever owned.", n: "Maryam A.", l: "Kuala Lumpur" },
          ].map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-8 md:p-10 bg-background"
            >
              <div className="flex gap-0.5 text-ink">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-ink" />)}
              </div>
              <blockquote className="mt-5 font-serif text-xl leading-snug">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">— {t.n}, {t.l}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28">
        <div className="text-center mb-10">
          <Instagram className="w-5 h-5 mx-auto" />
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mt-3">{BRAND.instagram}</h3>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2">Follow our journal</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
          {[heroImg, fabric, editorial, ...products.map((p) => p.images[0])].slice(0, 6).map((src, i) => (
            <a key={i} href="#" className="block aspect-square overflow-hidden group">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink text-cream py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">Private list</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">Be the first to know.</h2>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Sign up for early access to new collections, private drops and atelier stories.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" required placeholder="Email address" className="flex-1 bg-transparent border border-cream/25 px-5 py-4 text-sm placeholder:text-cream/40 focus:border-cream outline-none" />
            <button className="bg-cream text-ink px-6 py-4 text-xs uppercase tracking-[0.25em] hover:bg-cream/90">Subscribe</button>
          </form>
        </div>
      </section>

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </>
  );
}
