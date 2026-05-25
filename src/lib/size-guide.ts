export const SIZE_COLUMNS = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export type SizeColumn = (typeof SIZE_COLUMNS)[number];

export type MeasurementRow = {
  label: string;
  values: Record<SizeColumn, number>;
};

/** One-sided garment measurements in inches (ready-to-wear). */
export const SIZE_CHART_ROWS: MeasurementRow[] = [
  { label: "Bust", values: { XS: 18, S: 20, M: 21, L: 23, XL: 24, XXL: 26 } },
  { label: "Waist", values: { XS: 16, S: 18, M: 19, L: 21, XL: 22, XXL: 24 } },
  { label: "Hips", values: { XS: 19, S: 21, M: 22, L: 24, XL: 25, XXL: 27 } },
  { label: "Sleeves", values: { XS: 21, S: 22, M: 23, L: 23.5, XL: 24, XXL: 24 } },
  { label: "Shoulder", values: { XS: 15, S: 15.5, M: 16, L: 16.5, XL: 17, XXL: 18 } },
  { label: "Length", values: { XS: 52, S: 53, M: 54, L: 56, XL: 58, XXL: 60 } },
];

export const MEASUREMENT_INSTRUCTIONS = [
  { n: "I", title: "Length", text: "From shoulder top to the hem end." },
  { n: "II", title: "Shoulder", text: "Distance between one shoulder edge to another." },
  { n: "III", title: "Bust", text: "Measure across chest, underneath armhole." },
  { n: "IV", title: "Waist", text: "Measure narrowest part between your chest and hips." },
  { n: "V", title: "Hips", text: "Measure 21 inches down from the shoulder." },
  { n: "VI", title: "Sleeves", text: "From point of attachment to end of cuff." },
] as const;

const CM_PER_INCH = 2.54;

export function inchesToCm(inches: number): number {
  return Math.round(inches * CM_PER_INCH * 10) / 10;
}

export function formatMeasurement(value: number, unit: "in" | "cm"): string {
  const n = unit === "cm" ? inchesToCm(value) : value;
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}
