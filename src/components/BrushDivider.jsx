export default function BrushDivider({ align = "left" }) {
  return (
    <svg
      className="brush-divider"
      viewBox="0 0 180 14"
      style={{ marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}
      fill="none"
    >
      <defs>
        <linearGradient id="brushGrad" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E4572E" />
          <stop offset="30%" stopColor="#F2A93B" />
          <stop offset="55%" stopColor="#3FA34D" />
          <stop offset="75%" stopColor="#1A8FA3" />
          <stop offset="100%" stopColor="#7B4B94" />
        </linearGradient>
      </defs>
      <path
        d="M2 10 C 30 2, 60 12, 90 6 S 150 2, 178 8"
        stroke="url(#brushGrad)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
