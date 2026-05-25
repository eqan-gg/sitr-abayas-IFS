import { useState } from "react";

import {

  Dialog,

  DialogContent,

  DialogDescription,

  DialogHeader,

  DialogTitle,

  DialogTrigger,

  DialogClose,

} from "@/components/ui/dialog";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

import { BRAND } from "@/lib/brand";

import {

  formatMeasurement,

  MEASUREMENT_INSTRUCTIONS,

  SIZE_CHART_ROWS,

  SIZE_COLUMNS,

  type SizeColumn,

} from "@/lib/size-guide";

import { AbayaMeasurementDiagram } from "@/components/AbayaMeasurementDiagram";



type SizeGuideProps = {

  children: React.ReactNode;

  selectedSize?: string | null;

};



export function SizeGuide({ children, selectedSize }: SizeGuideProps) {

  const [unit, setUnit] = useState<"in" | "cm">("in");

  const activeCol = selectedSize && SIZE_COLUMNS.includes(selectedSize as SizeColumn)

    ? (selectedSize as SizeColumn)

    : null;



  return (

    <Dialog>

      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent

        className="max-w-none sm:max-w-[min(56rem,calc(100vw-2rem))] overflow-hidden flex flex-col p-0 gap-0 border-border [&>button.absolute]:hidden"

        aria-describedby="size-guide-description"

      >

        <div className="shrink-0 sticky top-0 z-10 bg-background border-b border-border px-4 py-4 sm:px-8 sm:py-5">

          <div className="flex items-start justify-between gap-3">

          <DialogHeader className="space-y-1 text-left flex-1 min-w-0">

            <DialogTitle className="font-serif text-xl sm:text-2xl md:text-3xl tracking-wide uppercase font-normal">

              Size Chart

            </DialogTitle>

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-muted-foreground font-sans">

              {BRAND.name}

            </p>

            <DialogDescription id="size-guide-description" className="sr-only">

              Abaya size chart with bust, waist, hips, sleeves, shoulder, and length measurements.

            </DialogDescription>

          </DialogHeader>

          <DialogClose
            className="shrink-0 flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close size chart"
          >
            <X className="h-5 w-5" />
          </DialogClose>

          </div>



          <div

            className="mt-3 sm:mt-4 inline-flex rounded-sm border border-border p-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em]"

            role="group"

            aria-label="Measurement unit"

          >

            {(["in", "cm"] as const).map((u) => (

              <button

                key={u}

                type="button"

                onClick={() => setUnit(u)}

                className={cn(

                  "px-2.5 sm:px-3 py-1.5 transition-colors",

                  unit === u ? "bg-ink text-cream" : "text-muted-foreground hover:text-foreground",

                )}

                aria-pressed={unit === u}

              >

                {u === "in" ? "Inches" : "Cm"}

              </button>

            ))}

          </div>

        </div>



        <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-8 pb-6 sm:pb-8">

          {/* Mobile: size cards */}

          <div className="sm:hidden space-y-3 mt-4">

            {SIZE_COLUMNS.map((col) => (

              <div

                key={col}

                className={cn(

                  "border border-border rounded-sm overflow-hidden",

                  activeCol === col && "ring-1 ring-ink",

                )}

              >

                <div

                  className={cn(

                    "px-3 py-2 text-xs font-semibold uppercase tracking-wider",

                    activeCol === col ? "bg-ink text-cream" : "bg-secondary/50",

                  )}

                >

                  Size {col}

                  {activeCol === col && <span className="ml-2 font-normal opacity-80">· selected</span>}

                </div>

                <dl className="divide-y divide-border/60">

                  {SIZE_CHART_ROWS.map((row, i) => (

                    <div

                      key={row.label}

                      className={cn(

                        "flex justify-between gap-4 px-3 py-2.5 text-sm",

                        i % 2 === 0 ? "bg-secondary/25" : "bg-background",

                      )}

                    >

                      <dt className="font-medium text-foreground">{row.label}</dt>

                      <dd className="tabular-nums text-muted-foreground">

                        {formatMeasurement(row.values[col], unit)}

                        {unit === "in" ? '"' : " cm"}

                      </dd>

                    </div>

                  ))}

                </dl>

              </div>

            ))}

          </div>



          {/* Tablet+: table */}

          <div className="hidden sm:block mt-4 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">

            <table className="w-full min-w-[480px] text-sm border-collapse">

              <caption className="sr-only">

                {BRAND.name} size chart in {unit === "in" ? "inches" : "centimeters"}

              </caption>

              <thead>

                <tr className="border-b border-border">

                  <th

                    scope="col"

                    className="text-left py-2.5 pr-3 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-medium text-foreground"

                  >

                    Measurement ({unit === "in" ? "in" : "cm"})

                  </th>

                  {SIZE_COLUMNS.map((col) => (

                    <th

                      key={col}

                      scope="col"

                      className={cn(

                        "py-2.5 px-1.5 sm:px-2 text-center text-[11px] sm:text-xs font-semibold uppercase",

                        activeCol === col && "bg-ink/8 text-ink",

                      )}

                    >

                      {col}

                    </th>

                  ))}

                </tr>

              </thead>

              <tbody>

                {SIZE_CHART_ROWS.map((row, i) => (

                  <tr

                    key={row.label}

                    className={cn("border-b border-border/60", i % 2 === 0 ? "bg-secondary/35" : "bg-background")}

                  >

                    <th scope="row" className="text-left py-2.5 pr-3 pl-1 font-medium text-foreground text-xs sm:text-sm">

                      {row.label}

                    </th>

                    {SIZE_COLUMNS.map((col) => (

                      <td

                        key={col}

                        className={cn(

                          "py-2.5 px-1.5 sm:px-2 text-center tabular-nums text-xs sm:text-sm text-muted-foreground",

                          activeCol === col && "bg-ink/8 text-ink font-medium",

                        )}

                      >

                        {formatMeasurement(row.values[col], unit)}

                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>



          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-6 sm:gap-8 items-start">

            <figure className="mx-auto w-full max-w-[160px] sm:max-w-[200px] text-ink">

              <AbayaMeasurementDiagram className="w-full h-auto" />

              <figcaption className="sr-only">How to measure each area on the garment</figcaption>

            </figure>



            <div>

              <h3 className="font-serif text-base sm:text-lg uppercase tracking-wide">Measurement instructions</h3>

              <ol className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">

                {MEASUREMENT_INSTRUCTIONS.map((item) => (

                  <li key={item.n}>

                    <span className="font-medium text-foreground">

                      {item.n}. {item.title}:

                    </span>{" "}

                    {item.text}

                  </li>

                ))}

              </ol>

            </div>

          </div>



          <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-muted-foreground leading-relaxed border-t border-border pt-5 sm:pt-6">

            <strong className="text-foreground font-normal">Note:</strong> All measurements are{" "}

            <em className="font-medium text-foreground not-italic">one-sided</em> and for{" "}

            <em className="font-medium text-foreground not-italic">ready garments</em>. Measurements may vary

            slightly depending on the style and cut.

          </p>

        </div>

      </DialogContent>

    </Dialog>

  );

}


