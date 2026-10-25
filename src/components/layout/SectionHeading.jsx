import { Factory } from "lucide-react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon = Factory,
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow && (
        <span className="section-eyebrow">
          {Icon && <Icon size={16} aria-hidden="true" />}
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-7 text-on-surface-variant md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
