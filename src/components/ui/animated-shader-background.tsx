import React from "react";

const meteors = [
  {
    className: "left-[18%] top-[22%] w-40 rotate-[28deg]",
    opacity: "0.5",
  },
  {
    className: "left-[58%] top-[18%] w-32 rotate-[18deg]",
    opacity: "0.4",
  },
  {
    className: "left-[68%] top-[38%] w-48 rotate-[32deg]",
    opacity: "0.55",
  },
  {
    className: "left-[30%] top-[60%] w-28 rotate-[24deg]",
    opacity: "0.35",
  },
];

export default function AnoAI() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_45%)]" />

      {meteors.map((meteor, index) => (
        <div
          key={index}
          className={`absolute h-px ${meteor.className}`}
          style={{
            opacity: meteor.opacity,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0), rgba(186,146,255,0.85), rgba(255,255,255,0.12))",
            boxShadow: "0 0 18px rgba(138, 92, 246, 0.28)",
          }}
        >
          <span
            className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
            style={{
              background: "rgba(230, 220, 255, 0.95)",
              boxShadow: "0 0 14px rgba(196, 181, 253, 0.8)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
