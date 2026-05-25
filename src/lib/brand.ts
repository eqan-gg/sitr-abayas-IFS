/** Site-wide brand constants — single source of truth. */
export const BRAND = {
  name: "Sitr Abayas",
  tagline: "Considered modest fashion, made with intention.",
  description:
    "Sitr Abayas crafts elegant abayas, hijabs and jilbabs in small batches. Worldwide shipping.",
  email: "hello@sitrabayas.com",
  instagram: "@sitr.abayas",
  instagramUrl: "https://instagram.com/sitr.abayas",
  whatsappNumber: "923000000000",
} as const;

export function pageTitle(page?: string): string {
  return page ? `${page} — ${BRAND.name}` : `${BRAND.name} — Modest Fashion`;
}

export function whatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
