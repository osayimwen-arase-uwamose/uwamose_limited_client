export default function Container({
  as: Element = "div",
  className = "",
  children,
  ...props
}) {
  return (
    <Element
      className={`container-page ${className}`.trim()}
      {...props}
    >
      {children}
    </Element>
  );
};
