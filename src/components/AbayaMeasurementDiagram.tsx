/** Line diagram showing where each garment measurement is taken. */
export function AbayaMeasurementDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M48 52 L28 88 L22 168 L26 248 L174 248 L178 168 L172 88 L152 52 L100 44 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M100 44 L100 248" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
      <line x1="48" y1="52" x2="152" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      <text x="100" y="40" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="Inter, sans-serif">
        Shoulder
      </text>
      <line x1="22" y1="108" x2="178" y2="108" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      <text x="188" y="112" fontSize="8" fill="currentColor" fontFamily="Inter, sans-serif">
        Bust
      </text>
      <line x1="30" y1="138" x2="170" y2="138" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      <text x="8" y="142" fontSize="8" fill="currentColor" fontFamily="Inter, sans-serif">
        Waist
      </text>
      <line x1="24" y1="168" x2="176" y2="168" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      <text x="188" y="172" fontSize="8" fill="currentColor" fontFamily="Inter, sans-serif">
        Hips
      </text>
      <path
        d="M28 88 L22 168"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <text x="6" y="132" fontSize="8" fill="currentColor" fontFamily="Inter, sans-serif" transform="rotate(-90 6 132)">
        Sleeve
      </text>
      <line x1="100" y1="52" x2="100" y2="248" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="112" y="160" fontSize="8" fill="currentColor" fontFamily="Inter, sans-serif">
        Length
      </text>
    </svg>
  );
}
