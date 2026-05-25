import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";

export type CartItem = {
  productId: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  size: string;
  color: string;
  qty: number;
};

type Ctx = {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (p: Product, opts: { size: string; color: string; qty?: number }) => void;
  removeFromCart: (i: number) => void;
  setQty: (i: number, qty: number) => void;
  toggleWishlist: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
};

const StoreContext = createContext<Ctx | null>(null);

function readLS<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readLS<CartItem[]>("nm_cart", []));
    setWishlist(readLS<string[]>("nm_wishlist", []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("nm_cart", JSON.stringify(cart));
  }, [cart, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("nm_wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToCart: Ctx["addToCart"] = (p, { size, color, qty = 1 }) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === p.id && i.size === size && i.color === color,
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [
        ...prev,
        {
          productId: p.id,
          slug: p.slug,
          title: p.title,
          image: p.images[0],
          price: p.salePrice ?? p.price,
          size,
          color,
          qty,
        },
      ];
    });
  };

  const removeFromCart = (i: number) => setCart((p) => p.filter((_, idx) => idx !== i));
  const setQty = (i: number, qty: number) =>
    setCart((p) => p.map((it, idx) => (idx === i ? { ...it, qty: Math.max(1, qty) } : it)));
  const toggleWishlist = (id: string) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <StoreContext.Provider
      value={{ cart, wishlist, addToCart, removeFromCart, setQty, toggleWishlist, clearCart, cartCount, subtotal }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const c = useContext(StoreContext);
  if (!c) throw new Error("useStore must be used within StoreProvider");
  return c;
}