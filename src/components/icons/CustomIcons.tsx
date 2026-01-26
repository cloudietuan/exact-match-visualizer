// Custom SVG icons - designed for Lumina Sites Co.
// Static icons for performance (no continuous animations)

interface IconProps {
  className?: string;
  size?: number;
}

// Elegant nail polish bottle icon
export const NailPolishIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    {/* Bottle cap */}
    <rect x="18" y="4" width="12" height="8" rx="2" fill="hsl(var(--lumina-terracotta))" />
    <rect x="20" y="2" width="8" height="4" rx="1" fill="hsl(var(--lumina-terracotta))" opacity="0.8" />
    
    {/* Brush handle */}
    <rect x="22" y="12" width="4" height="6" fill="hsl(var(--lumina-ink))" opacity="0.3" />
    
    {/* Main bottle body */}
    <path
      d="M16 18 L16 38 C16 42 19 44 24 44 C29 44 32 42 32 38 L32 18 Z"
      fill="hsl(var(--lumina-terracotta))"
      opacity="0.9"
    />
    
    {/* Bottle highlight */}
    <path
      d="M18 20 L18 36 C18 38 20 40 24 40"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
      fill="none"
    />
    
    {/* Liquid level shine */}
    <ellipse cx="24" cy="22" rx="6" ry="2" fill="white" opacity="0.3" />
  </svg>
);

// Sparkle/diamond icon
export const SparkleIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    {/* Main 4-point star */}
    <path
      d="M24 4 L26 20 L42 24 L26 28 L24 44 L22 28 L6 24 L22 20 Z"
      fill="hsl(var(--lumina-gold))"
    />
    
    {/* Small accent sparkles */}
    <circle cx="36" cy="12" r="2" fill="hsl(var(--lumina-gold))" opacity="0.6" />
    <circle cx="12" cy="36" r="1.5" fill="hsl(var(--lumina-gold))" opacity="0.5" />
    <circle cx="38" cy="36" r="1" fill="hsl(var(--lumina-gold))" opacity="0.4" />
    
    {/* Inner highlight */}
    <path
      d="M24 12 L25 21 L34 24 L25 27 L24 36 L23 27 L14 24 L23 21 Z"
      fill="white"
      opacity="0.4"
    />
  </svg>
);

// Artist palette icon
export const PaletteIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    {/* Palette base */}
    <path
      d="M8 24 C8 12 16 6 28 8 C40 10 44 20 42 32 C40 40 32 44 22 42 C12 40 8 36 8 24 Z"
      fill="hsl(var(--lumina-cream-warm))"
      stroke="hsl(var(--lumina-ink))"
      strokeWidth="1.5"
    />
    
    {/* Thumb hole */}
    <ellipse cx="14" cy="32" rx="4" ry="5" fill="hsl(var(--lumina-cream))" stroke="hsl(var(--lumina-ink))" strokeWidth="1" />
    
    {/* Paint dots */}
    <circle cx="22" cy="14" r="4" fill="hsl(var(--lumina-terracotta))" />
    <circle cx="32" cy="16" r="3.5" fill="hsl(var(--lumina-coral))" />
    <circle cx="38" cy="24" r="3" fill="hsl(var(--lumina-gold))" />
    <circle cx="34" cy="32" r="3.5" fill="hsl(var(--lumina-pink))" />
    <circle cx="24" cy="28" r="3" fill="#A8D5BA" />
    
    {/* Paint highlights */}
    <circle cx="21" cy="13" r="1.5" fill="white" opacity="0.5" />
    <circle cx="31" cy="15" r="1" fill="white" opacity="0.4" />
  </svg>
);

// Pencil/drawing icon
export const PencilIcon = ({ className = '', size = 64 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Pencil body */}
    <rect
      x="20"
      y="8"
      width="12"
      height="40"
      rx="1"
      fill="hsl(var(--lumina-gold))"
      transform="rotate(-15 26 28)"
    />
    
    {/* Wood section */}
    <path
      d="M16 44 L26 58 L36 44 Z"
      fill="#DEB887"
      transform="rotate(-15 26 51)"
    />
    
    {/* Pencil tip */}
    <path
      d="M23 52 L26 60 L29 52 Z"
      fill="hsl(var(--lumina-ink))"
      transform="rotate(-15 26 56)"
    />
    
    {/* Metal ferrule */}
    <rect
      x="20"
      y="4"
      width="12"
      height="6"
      fill="#B8860B"
      transform="rotate(-15 26 7)"
    />
    
    {/* Eraser */}
    <rect
      x="20"
      y="0"
      width="12"
      height="6"
      rx="1"
      fill="hsl(var(--lumina-coral))"
      transform="rotate(-15 26 3)"
    />
    
    {/* Highlight stripe */}
    <rect
      x="22"
      y="8"
      width="3"
      height="40"
      fill="white"
      opacity="0.3"
      transform="rotate(-15 23.5 28)"
    />
  </svg>
);

// Diamond/gem icon for luxury feel
export const DiamondIcon = ({ className = '', size = 44 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    className={className}
  >
    {/* Top facets */}
    <path d="M22 4 L10 16 L22 12 Z" fill="hsl(var(--lumina-gold))" opacity="0.9" />
    <path d="M22 4 L34 16 L22 12 Z" fill="hsl(var(--lumina-gold))" opacity="0.7" />
    
    {/* Middle band */}
    <path d="M6 16 L10 16 L22 12 L34 16 L38 16 L22 20 Z" fill="hsl(var(--lumina-gold))" opacity="0.8" />
    
    {/* Bottom facets */}
    <path d="M6 16 L22 40 L22 20 Z" fill="hsl(var(--lumina-terracotta))" opacity="0.9" />
    <path d="M38 16 L22 40 L22 20 Z" fill="hsl(var(--lumina-terracotta))" opacity="0.7" />
    
    {/* Highlight */}
    <path d="M14 16 L22 12 L22 20 Z" fill="white" opacity="0.4" />
  </svg>
);

// Hand with manicure icon
export const ManicureHandIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    {/* Palm */}
    <ellipse cx="24" cy="32" rx="12" ry="10" fill="hsl(var(--lumina-cream-warm))" stroke="hsl(var(--lumina-ink))" strokeWidth="0.5" opacity="0.9" />
    
    {/* Fingers */}
    <rect x="12" y="10" width="5" height="20" rx="2.5" fill="hsl(var(--lumina-cream-warm))" stroke="hsl(var(--lumina-ink))" strokeWidth="0.5" />
    <rect x="18" y="6" width="5" height="22" rx="2.5" fill="hsl(var(--lumina-cream-warm))" stroke="hsl(var(--lumina-ink))" strokeWidth="0.5" />
    <rect x="24" y="4" width="5" height="24" rx="2.5" fill="hsl(var(--lumina-cream-warm))" stroke="hsl(var(--lumina-ink))" strokeWidth="0.5" />
    <rect x="30" y="8" width="5" height="20" rx="2.5" fill="hsl(var(--lumina-cream-warm))" stroke="hsl(var(--lumina-ink))" strokeWidth="0.5" />
    
    {/* Nails with polish */}
    <ellipse cx="14.5" cy="11" rx="2" ry="3" fill="hsl(var(--lumina-terracotta))" />
    <ellipse cx="20.5" cy="7" rx="2" ry="3" fill="hsl(var(--lumina-terracotta))" />
    <ellipse cx="26.5" cy="5" rx="2" ry="3" fill="hsl(var(--lumina-terracotta))" />
    <ellipse cx="32.5" cy="9" rx="2" ry="3" fill="hsl(var(--lumina-terracotta))" />
    
    {/* Nail shine */}
    <ellipse cx="14" cy="10" rx="0.8" ry="1.5" fill="white" opacity="0.5" />
    <ellipse cx="20" cy="6" rx="0.8" ry="1.5" fill="white" opacity="0.5" />
    <ellipse cx="26" cy="4" rx="0.8" ry="1.5" fill="white" opacity="0.5" />
    <ellipse cx="32" cy="8" rx="0.8" ry="1.5" fill="white" opacity="0.5" />
  </svg>
);

// Sun/sunset icon for branding
export const SunsetIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    {/* Horizon line */}
    <line x1="4" y1="32" x2="44" y2="32" stroke="hsl(var(--lumina-ink))" strokeWidth="1" opacity="0.3" />
    
    {/* Sun */}
    <circle cx="24" cy="28" r="12" fill="url(#sunsetGradient)" />
    
    {/* Sun rays */}
    {[0, 30, 60, 90, 120, 150].map((angle, i) => (
      <line
        key={i}
        x1={24 + Math.cos((angle * Math.PI) / 180) * 16}
        y1={28 - Math.sin((angle * Math.PI) / 180) * 16}
        x2={24 + Math.cos((angle * Math.PI) / 180) * 20}
        y2={28 - Math.sin((angle * Math.PI) / 180) * 20}
        stroke="hsl(var(--lumina-gold))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    ))}
    
    <defs>
      <linearGradient id="sunsetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--lumina-gold))" />
        <stop offset="100%" stopColor="hsl(var(--lumina-terracotta))" />
      </linearGradient>
    </defs>
  </svg>
);
