import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import editorial from "@/assets/editorial-1.jpg";

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: "abayas" | "hijabs" | "jilbabs" | "naqab" | "everyday";
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
    slug: "noor-open-abaya-camel",
    title: "Noor Open Abaya — Camel",
    category: "abayas",
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
    category: "abayas",
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
    slug: "silk-hijab-blush",
    title: "Mulberry Silk Hijab — Blush",
    category: "hijabs",
    price: 4200,
    images: [p3, p3],
    description: "100% mulberry silk with a soft satin face and a barely-there hand-rolled hem.",
    fabric: "100% mulberry silk, 19 momme",
    care: "Hand wash with cold water and mild detergent.",
    sizes: ["One Size"],
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
    slug: "amal-jilbab-olive",
    title: "Amal Jilbab — Olive",
    category: "jilbabs",
    price: 13200,
    images: [p4, p1],
    description: "A two-piece jilbab set with relaxed shoulders and a generous hood. Designed for movement.",
    fabric: "Soft-touch jersey crepe",
    care: "Machine wash cold, gentle cycle.",
    sizes: ["S", "M", "L"],
    colors: [{ name: "Olive", hex: "#5e6a3c" }, { name: "Charcoal", hex: "#2c2c2c" }],
    rating: 4.9,
    reviews: 144,
  },
  {
    id: "5",
    slug: "embellished-naqab-charcoal",
    title: "Embellished Naqab — Charcoal",
    category: "naqab",
    price: 3800,
    images: [p5, p3],
    description: "Featherweight chiffon naqab with a delicate hand-set crystal at the brow.",
    fabric: "Silk chiffon",
    care: "Hand wash cold.",
    sizes: ["One Size"],
    colors: [{ name: "Charcoal", hex: "#3a3a3e" }, { name: "Black", hex: "#0a0a0a" }],
    badge: "Limited",
    rating: 4.8,
    reviews: 67,
  },
  {
    id: "6",
    slug: "everyday-tunic-rose",
    title: "Everyday Tunic — Rose",
    category: "everyday",
    price: 6900,
    salePrice: 5500,
    images: [p6, p4],
    description: "A long-line tunic with side pockets, made for ease over wide-leg trousers.",
    fabric: "Stretch micro-twill",
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
];

export const categories = [
  { slug: "abayas", name: "Abayas", image: p1 },
  { slug: "hijabs", name: "Hijabs", image: p3 },
  { slug: "jilbabs", name: "Jilbabs", image: p4 },
  { slug: "naqab", name: "Naqab", image: p5 },
  { slug: "everyday", name: "Everyday", image: p6 },
] as const;

export { editorial };

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPKR(n: number) {
  return "Rs " + n.toLocaleString("en-PK");
}