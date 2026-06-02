import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import editorial from "@/assets/editorial-1.jpg";
import type { ProductCategory } from "@/lib/categories";
import { shopCategories } from "@/lib/categories";

export type { ProductCategory };
export { shopCategories as categories };

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: ProductCategory;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  fabric: string;
  care: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  badge?: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "sitr-open-abaya-camel",
    title: "Open Abaya — Camel",
    category: "standard",
    price: 14800,
    salePrice: 11900,
    images: [p1, p2],
    description:
      "A flowing open abaya in our signature camel crepe. Cut for ease and built to drape with a soft, weightless fall.",
    fabric: "Premium Korean nida crepe",
    care: "Dry clean recommended. Cool iron inside out.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#c8a070" },
      { name: "Onyx", hex: "#1a1a1a" },
      { name: "Cream", hex: "#efe6d6" },
    ],
    badge: "Bestseller",
    rating: 4.9,
    reviews: 218,
  },
  {
    id: "2",
    slug: "luna-pearl-abaya-onyx",
    title: "Luna Pearl Abaya — Onyx",
    category: "new",
    price: 16500,
    images: [p2, p1],
    description: "Pearl-button placket on a clean A-line silhouette. A quiet statement, made for everyday elegance.",
    fabric: "Heavy-weight nida",
    care: "Hand wash cold or dry clean.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Onyx", hex: "#1a1a1a" }, { name: "Stone", hex: "#8a8174" }],
    badge: "New",
    rating: 4.8,
    reviews: 96,
  },
  {
    id: "3",
    slug: "silk-trim-abaya-blush",
    title: "Silk-Trim Abaya — Blush",
    category: "premium",
    price: 22400,
    images: [p3, p3],
    description: "Luxury nida abaya with mulberry silk trim at the cuffs. An elevated piece for special occasions.",
    fabric: "Nida crepe with 100% mulberry silk trim",
    care: "Dry clean only.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blush", hex: "#f4c9c2" },
      { name: "Sand", hex: "#d8c6a8" },
      { name: "Ivory", hex: "#f1e9d8" },
    ],
    rating: 5.0,
    reviews: 312,
  },
  {
    id: "4",
    slug: "campus-ease-abaya-olive",
    title: "Campus Ease Abaya — Olive",
    category: "university",
    price: 11200,
    images: [p4, p1],
    description: "Lightweight, easy-care abaya with side pockets — designed for long days on campus.",
    fabric: "Soft-touch jersey crepe",
    care: "Machine wash cold, gentle cycle.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Olive", hex: "#5e6a3c" }, { name: "Charcoal", hex: "#2c2c2c" }],
    rating: 4.9,
    reviews: 144,
  },
  {
    id: "5",
    slug: "celebration-abaya-charcoal",
    title: "Celebration Abaya — Charcoal",
    category: "wedding-guest",
    price: 18900,
    images: [p5, p3],
    description: "Embellished cuffs and a refined drape — made for wedding gatherings and festive occasions.",
    fabric: "Silk-blend nida with hand-set crystal detail",
    care: "Dry clean recommended.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Charcoal", hex: "#3a3a3e" }, { name: "Black", hex: "#0a0a0a" }],
    badge: "Limited",
    rating: 4.8,
    reviews: 67,
  },
  {
    id: "6",
    slug: "weekend-flow-abaya-rose",
    title: "Weekend Flow Abaya — Rose",
    category: "casual",
    price: 12900,
    salePrice: 10500,
    images: [p6, p4],
    description: "Relaxed A-line abaya with a soft drape — perfect for outings, shopping, and casual gatherings.",
    fabric: "Stretch micro-twill nida",
    care: "Machine wash cold.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Rose", hex: "#b48077" },
      { name: "Stone", hex: "#a6997f" },
      { name: "Black", hex: "#0a0a0a" },
    ],
    badge: "Sale",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: "7",
    slug: "boardroom-line-abaya-stone",
    title: "Boardroom Line Abaya — Stone",
    category: "formal",
    price: 17800,
    images: [p2, p6],
    description: "Structured shoulders and a clean front placket — polished modesty for work and formal settings.",
    fabric: "Premium matte nida",
    care: "Dry clean recommended.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Stone", hex: "#8a8174" }, { name: "Onyx", hex: "#1a1a1a" }],
    rating: 4.9,
    reviews: 121,
  },
  {
    id: "8",
    slug: "atelier-drape-abaya-ivory",
    title: "Atelier Drape Abaya — Ivory",
    category: "premium",
    price: 26500,
    images: [p1, p5],
    description: "Exclusive atelier cut with hand-finished hem. Our finest fabric and most refined silhouette.",
    fabric: "Italian-import nida with silk lining",
    care: "Dry clean only.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Ivory", hex: "#f5f0e8" }, { name: "Pearl", hex: "#e8e4dc" }],
    badge: "New",
    rating: 5.0,
    reviews: 54,
  },
];

export { editorial };

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPKR(n: number) {
  return "Rs " + n.toLocaleString("en-PK");
}
