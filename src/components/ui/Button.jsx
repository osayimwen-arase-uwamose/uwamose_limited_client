export default function Button({
  as: Element = "button",
  variant = "primary",
  className = "",
  children,
  type,
  ...props
}) {
  const variants = {
    primary: "button-primary",
    secondary: "button-secondary",
    outline: "button-outline",
  };

  const elementProps =
    Element === "button"
      ? { type: type ?? "button" }
      : {};

  return (
    <Element
      className={`button-base focus-ring ${variants[variant] ?? variants.primary} ${className}`.trim()}
      {...elementProps}
      {...props}
    >
      {children}
    </Element>
  );
}
