export default function Badge({
  children,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "text-primary after:bg-primary",
    secondary: "text-secondary after:bg-secondary",
    neutral: "text-on-surface-variant after:bg-outline-variant",
    light: "text-white after:bg-white/70",
  };

  return (
    <span
      className={`inline-flex w-fit flex-col items-start gap-1 pb-1 text-xs font-bold uppercase tracking-[0.16em] after:h-[2px] after:w-8 after:content-[''] ${variants[variant] ?? variants.primary} ${className}`.trim()}
      >
      {children} 
    </span>
  );
};
