import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, b as Trigger, C as Close, P as Portal, a as Content, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { B as BRAND, b as cn } from "./router-BLbcut6A.mjs";
import { X } from "../_libs/lucide-react.mjs";
const Dialog = Root;
const DialogTrigger = Trigger;
const DialogPortal = Portal;
const DialogClose = Close;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed z-50 grid w-full gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "inset-x-0 bottom-0 max-h-[96dvh] rounded-t-lg p-0 sm:inset-auto sm:left-[50%] sm:top-[50%] sm:max-h-[min(90vh,900px)] sm:max-w-lg sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg sm:p-6",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:data-[state=closed]:slide-out-to-left-1/2 sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-left-1/2 sm:data-[state=open]:slide-in-from-top-[48%] sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground sm:right-4 sm:top-4 sm:h-auto sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 sm:h-4 sm:w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const SIZE_COLUMNS = ["XS", "S", "M", "L", "XL", "XXL"];
const SIZE_CHART_ROWS = [
  { label: "Bust", values: { XS: 18, S: 20, M: 21, L: 23, XL: 24, XXL: 26 } },
  { label: "Waist", values: { XS: 16, S: 18, M: 19, L: 21, XL: 22, XXL: 24 } },
  { label: "Hips", values: { XS: 19, S: 21, M: 22, L: 24, XL: 25, XXL: 27 } },
  { label: "Sleeves", values: { XS: 21, S: 22, M: 23, L: 23.5, XL: 24, XXL: 24 } },
  { label: "Shoulder", values: { XS: 15, S: 15.5, M: 16, L: 16.5, XL: 17, XXL: 18 } },
  { label: "Length", values: { XS: 52, S: 53, M: 54, L: 56, XL: 58, XXL: 60 } }
];
const MEASUREMENT_INSTRUCTIONS = [
  { n: "I", title: "Length", text: "From shoulder top to the hem end." },
  { n: "II", title: "Shoulder", text: "Distance between one shoulder edge to another." },
  { n: "III", title: "Bust", text: "Measure across chest, underneath armhole." },
  { n: "IV", title: "Waist", text: "Measure narrowest part between your chest and hips." },
  { n: "V", title: "Hips", text: "Measure 21 inches down from the shoulder." },
  { n: "VI", title: "Sleeves", text: "From point of attachment to end of cuff." }
];
const CM_PER_INCH = 2.54;
function inchesToCm(inches) {
  return Math.round(inches * CM_PER_INCH * 10) / 10;
}
function formatMeasurement(value, unit) {
  const n = unit === "cm" ? inchesToCm(value) : value;
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}
function AbayaMeasurementDiagram({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 200 280",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M48 52 L28 88 L22 168 L26 248 L174 248 L178 168 L172 88 L152 52 L100 44 Z",
            stroke: "currentColor",
            strokeWidth: "1.2",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 44 L100 248", stroke: "currentColor", strokeWidth: "0.8", strokeDasharray: "4 3", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "48", y1: "52", x2: "152", y2: "52", stroke: "currentColor", strokeWidth: "1", strokeDasharray: "3 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "100", y: "40", textAnchor: "middle", fontSize: "8", fill: "currentColor", fontFamily: "Inter, sans-serif", children: "Shoulder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "22", y1: "108", x2: "178", y2: "108", stroke: "currentColor", strokeWidth: "1", strokeDasharray: "3 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "188", y: "112", fontSize: "8", fill: "currentColor", fontFamily: "Inter, sans-serif", children: "Bust" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30", y1: "138", x2: "170", y2: "138", stroke: "currentColor", strokeWidth: "1", strokeDasharray: "3 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "8", y: "142", fontSize: "8", fill: "currentColor", fontFamily: "Inter, sans-serif", children: "Waist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "24", y1: "168", x2: "176", y2: "168", stroke: "currentColor", strokeWidth: "1", strokeDasharray: "3 2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "188", y: "172", fontSize: "8", fill: "currentColor", fontFamily: "Inter, sans-serif", children: "Hips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M28 88 L22 168",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeDasharray: "3 2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "6", y: "132", fontSize: "8", fill: "currentColor", fontFamily: "Inter, sans-serif", transform: "rotate(-90 6 132)", children: "Sleeve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "52", x2: "100", y2: "248", stroke: "currentColor", strokeWidth: "1.2", strokeDasharray: "4 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "112", y: "160", fontSize: "8", fill: "currentColor", fontFamily: "Inter, sans-serif", children: "Length" })
      ]
    }
  );
}
function SizeGuide({ children, selectedSize }) {
  const [unit, setUnit] = reactExports.useState("in");
  const activeCol = selectedSize && SIZE_COLUMNS.includes(selectedSize) ? selectedSize : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-none sm:max-w-[min(56rem,calc(100vw-2rem))] overflow-hidden flex flex-col p-0 gap-0 border-border [&>button.absolute]:hidden",
        "aria-describedby": "size-guide-description",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 sticky top-0 z-10 bg-background border-b border-border px-4 py-4 sm:px-8 sm:py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "space-y-1 text-left flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-serif text-xl sm:text-2xl md:text-3xl tracking-wide uppercase font-normal", children: "Size Chart" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-sans", children: BRAND.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { id: "size-guide-description", className: "sr-only", children: "Abaya size chart with bust, waist, hips, sleeves, shoulder, and length measurements." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DialogClose,
                {
                  className: "shrink-0 flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  "aria-label": "Close size chart",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mt-3 sm:mt-4 inline-flex rounded-sm border border-border p-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em]",
                role: "group",
                "aria-label": "Measurement unit",
                children: ["in", "cm"].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setUnit(u),
                    className: cn(
                      "px-2.5 sm:px-3 py-1.5 transition-colors",
                      unit === u ? "bg-ink text-cream" : "text-muted-foreground hover:text-foreground"
                    ),
                    "aria-pressed": unit === u,
                    children: u === "in" ? "Inches" : "Cm"
                  },
                  u
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto overscroll-contain px-4 sm:px-8 pb-6 sm:pb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden space-y-3 mt-4", children: SIZE_COLUMNS.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn(
                  "border border-border rounded-sm overflow-hidden",
                  activeCol === col && "ring-1 ring-ink"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn(
                        "px-3 py-2 text-xs font-semibold uppercase tracking-wider",
                        activeCol === col ? "bg-ink text-cream" : "bg-secondary/50"
                      ),
                      children: [
                        "Size ",
                        col,
                        activeCol === col && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-normal opacity-80", children: "· selected" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-border/60", children: SIZE_CHART_ROWS.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn(
                        "flex justify-between gap-4 px-3 py-2.5 text-sm",
                        i % 2 === 0 ? "bg-secondary/25" : "bg-background"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-medium text-foreground", children: row.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { className: "tabular-nums text-muted-foreground", children: [
                          formatMeasurement(row.values[col], unit),
                          unit === "in" ? '"' : " cm"
                        ] })
                      ]
                    },
                    row.label
                  )) })
                ]
              },
              col
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block mt-4 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[480px] text-sm border-collapse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("caption", { className: "sr-only", children: [
                BRAND.name,
                " size chart in ",
                unit === "in" ? "inches" : "centimeters"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "th",
                  {
                    scope: "col",
                    className: "text-left py-2.5 pr-3 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-medium text-foreground",
                    children: [
                      "Measurement (",
                      unit === "in" ? "in" : "cm",
                      ")"
                    ]
                  }
                ),
                SIZE_COLUMNS.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    scope: "col",
                    className: cn(
                      "py-2.5 px-1.5 sm:px-2 text-center text-[11px] sm:text-xs font-semibold uppercase",
                      activeCol === col && "bg-ink/8 text-ink"
                    ),
                    children: col
                  },
                  col
                ))
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: SIZE_CHART_ROWS.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: cn("border-b border-border/60", i % 2 === 0 ? "bg-secondary/35" : "bg-background"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", className: "text-left py-2.5 pr-3 pl-1 font-medium text-foreground text-xs sm:text-sm", children: row.label }),
                    SIZE_COLUMNS.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: cn(
                          "py-2.5 px-1.5 sm:px-2 text-center tabular-nums text-xs sm:text-sm text-muted-foreground",
                          activeCol === col && "bg-ink/8 text-ink font-medium"
                        ),
                        children: formatMeasurement(row.values[col], unit)
                      },
                      col
                    ))
                  ]
                },
                row.label
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-6 sm:gap-8 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "mx-auto w-full max-w-[160px] sm:max-w-[200px] text-ink", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AbayaMeasurementDiagram, { className: "w-full h-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "sr-only", children: "How to measure each area on the garment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-base sm:text-lg uppercase tracking-wide", children: "Measurement instructions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed", children: MEASUREMENT_INSTRUCTIONS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                    item.n,
                    ". ",
                    item.title,
                    ":"
                  ] }),
                  " ",
                  item.text
                ] }, item.n)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 sm:mt-8 text-[11px] sm:text-xs text-muted-foreground leading-relaxed border-t border-border pt-5 sm:pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-normal", children: "Note:" }),
              " All measurements are",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-medium text-foreground not-italic", children: "one-sided" }),
              " and for",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-medium text-foreground not-italic", children: "ready garments" }),
              ". Measurements may vary slightly depending on the style and cut."
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  SizeGuide as S
};
