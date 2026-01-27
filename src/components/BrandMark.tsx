import { motion } from "framer-motion";

type LandmarkMarkProps = {
  size?: number;
  className?: string;
  animated?: boolean;
  variant?: "thin" | "regular";
};

const PATHS: Record<NonNullable<LandmarkMarkProps["variant"]>, { l: string; dotR: number }> = {
  regular: {
    l: "M28 24 L28 56 L52 56 L52 50 L34 50 L34 24 Z",
    dotR: 5,
  },
  thin: {
    // Slightly slimmer L (thinner vertical + horizontal strokes)
    l: "M30 24 L30 56 L54 56 L54 52 L34 52 L34 24 Z",
    dotR: 4,
  },
};

export default function LandmarkMark({
  size = 44,
  className,
  animated = false,
  variant = "thin",
}: LandmarkMarkProps) {
  const { l, dotR } = PATHS[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lumina Sites"
    >
      <rect x="8" y="8" width="64" height="64" rx="18" className="fill-lumina-ink" />
      <path d={l} className="fill-lumina-cream" />
      {animated ? (
        <motion.circle
          cx="52"
          cy="24"
          r={dotR}
          className="fill-lumina-gold"
          animate={{ scale: [1, 1.18, 1], opacity: [1, 0.82, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <circle cx="52" cy="24" r={dotR} className="fill-lumina-gold" />
      )}
    </svg>
  );
}
