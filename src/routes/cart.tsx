import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPKR, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Your Bag — Noor" }] }),
});

function CartPage() {
  const { cart, removeFromCart, setQty, subtotal } = useStore();
  const shipping = subtotal > 15000 || subtotal === 0 ? 0 : 500;
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <h1 className="font-serif text-4xl md:text-5xl">Your Bag</h1>
        <p className="text-sm text-muted-foreground mt-2">{cart.length} {cart.length === 1 ? "item" : "items"}</p>

        {cart.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-muted-foreground">Your bag is empty.</p>
            <Link to="/shop" className="mt-6 inline-block bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.25em]">Continue Shopping</Link>
          </div>
        ) : (
          <div className="mt-10 grid md:grid-cols-[1fr_380px] gap-12">
            <ul className="divide-y divide-border">
              {cart.map((item, i) => (
                <li key={i} className="py-6 flex gap-5">
                  <Link to="/product/$slug" params={{ slug: item.slug }} className="block w-24 md:w-32 shrink-0">
                    <img src={item.image} alt={item.title} className="aspect-[4/5] w-full object-cover" />
                  </Link>
                  <div className="flex-1">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link to="/product/$slug" params={{ slug: item.slug }} className="font-serif text-lg">{item.title}</Link>
                        <div className="text-xs text-muted-foreground mt-1">{item.color} · {item.size}</div>
                      </div>
                      <button onClick={() => removeFromCart(i)} className="text-muted-foreground hover:text-ink"><X className="w-4 h-4" /></button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="inline-flex items-center border border-border">
                        <button onClick={() => setQty(i, item.qty - 1)} className="w-9 h-9 grid place-items-center"><Minus className="w-3 h-3" /></button>
                        <span className="w-9 text-center text-sm">{item.qty}</span>
                        <button onClick={() => setQty(i, item.qty + 1)} className="w-9 h-9 grid place-items-center"><Plus className="w-3 h-3" /></button>
                      </div>
                      <div className="text-sm">{formatPKR(item.price * item.qty)}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="bg-secondary/40 p-6 md:p-8 h-fit sticky top-28">
              <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPKR(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : formatPKR(shipping)}</span></div>
                <div className="border-t border-border pt-3 mt-3 flex justify-between text-base">
                  <span>Total</span><span className="font-medium">{formatPKR(subtotal + shipping)}</span>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <input placeholder="Promo code" className="flex-1 bg-background border border-border px-3 py-3 text-sm outline-none focus:border-ink" />
                <button className="border border-ink px-4 text-xs uppercase tracking-[0.2em]">Apply</button>
              </div>
              <button className="mt-6 w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.28em] hover:bg-ink/90">Checkout</button>
              <p className="text-[11px] text-muted-foreground mt-3 text-center">Secure checkout · COD, Stripe & PayPal accepted</p>
            </aside>
          </div>
        )}
      </section>

      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-16">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">You may also love</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}