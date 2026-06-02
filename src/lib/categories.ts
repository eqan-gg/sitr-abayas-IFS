import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";

/** Shop URL `?cat=` values (excluding customized — see /customize). */
export type ShopCategorySlug =
  | "new"
  | "standard"
  | "university"
  | "formal"
  | "casual"
  | "wedding-guest"
  | "premium";

export type ProductCategory = ShopCategorySlug;

export type CategoryDef = {
  slug: ShopCategorySlug;
  name: string;
  shortName?: string;
  description: string;
  image: string;
};

export const shopCategories: CategoryDef[] = [
  {
    slug: "new",
    name: "New Arrivals",
    description: "The latest abaya collections and newly launched designs.",
    image: p2,
  },
  {
    slug: "standard",
    name: "Standard Abayas",
    description: "Everyday essential abayas suitable for regular use.",
    image: p1,
  },
  {
    slug: "university",
    name: "University Abayas",
    description: "Comfortable and practical abayas designed for students and campus life.",
    image: p4,
  },
  {
    slug: "formal",
    name: "Formal Abayas",
    description: "Elegant abayas for professional settings, meetings, and formal occasions.",
    image: p2,
  },
  {
    slug: "casual",
    name: "Casual & Outing",
    shortName: "Casual",
    description: "Stylish abayas for daily outings, shopping, gatherings, and casual events.",
    image: p6,
  },
  {
    slug: "wedding-guest",
    name: "Wedding Guest Abayas",
    description: "Premium and fashionable abayas for wedding events and celebrations.",
    image: p5,
  },
  {
    slug: "premium",
    name: "Premium Abayas",
    description: "Luxury collection with high-quality fabrics, exclusive designs, and premium finishing.",
    image: p3,
  },
];

export const customizedCategory = {
  name: "Customized Abayas",
  description:
    "Submit your customization request — preferred color, fabric, size, design details, and special instructions.",
  href: "/customize" as const,
};

export function getCategoryBySlug(slug: string | undefined): CategoryDef | undefined {
  if (!slug) return undefined;
  return shopCategories.find((c) => c.slug === slug);
}

export function categoryTitle(slug: string | undefined): string {
  if (!slug || slug === "new") return "New Arrivals";
  const cat = getCategoryBySlug(slug);
  return cat?.name ?? "All Abayas";
}

export function categoryDescription(slug: string | undefined): string | undefined {
  if (slug === "new") return shopCategories[0].description;
  return getCategoryBySlug(slug)?.description;
}
