export default function ProductVariantSelector({ selectedVariant, onChange }) {
  const variants = [
    {
      id: "retail",
      title: "900g Sachet",
      subtitle: "Retail Pouch SKU",
    },
    {
      id: "bulk",
      title: "10.8kg Master Carton",
      subtitle: "12 × 900g Wholesale",
    },
  ];

  return (
    <fieldset className="variant-fieldset">
      <legend className="field-label">Select Package Format:</legend>
      <div className="variant-options">
        {variants.map((variant) => {
          const selected = selectedVariant === variant.id;
          return (
            <button
              key={variant.id}
              type="button"
              className={`variant-option ${selected ? "variant-option-selected" : ""}`}
              aria-pressed={selected}
              onClick={() => onChange(variant.id)}
            >
              <span className="variant-title">{variant.title}</span>
              <span className="variant-subtitle">{variant.subtitle}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
