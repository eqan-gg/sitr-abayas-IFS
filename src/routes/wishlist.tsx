import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  component: WishlistPage,
  head: () => ({ meta: [{ title: "Wishlist — Noor" }] }),
});

function WishlistPage() {
  const { wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.id));
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl">Wishlist</h1>
      {items.length === 0 ? (
        <div className="py-24 text-center text-muted-foreground">
          <p>You haven't saved any pieces yet.</p>
          <Link to="/shop" className="mt-6 inline-block bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.25em]">Browse Shop</Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </section>
  );
}