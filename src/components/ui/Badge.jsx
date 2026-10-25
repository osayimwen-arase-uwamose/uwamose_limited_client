export default function Badge({ children, variant = "primary", className = "" }) {
  const variants = {
    primary: "border border-primary/20 bg-primary/10 text-primary",
    secondary: "border border-secondary/30 bg-secondary-container/20 text-secondary",
    neutral: "border border-outline-variant bg-surface-container-low text-on-surface-variant",
    light: "border border-white/20 bg-white/10 text-white",
  };

  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${variants[variant] ?? variants.primary} ${className}`.trim()}>
      {children}
    </span>
  );
}
