import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import MaterialIcon from "../ui/MaterialIcon.jsx";

export default function ProductCard({ product, image }) {
  const isRetail = product.variant === "retail";

  return (
    <article className={`product-card surface-card ${isRetail ? "product-card-retail" : "product-card-wholesale"}`}>
      <div className="product-card-image product-image-surface">
        <img src={image} alt={product.imageAlt} loading="lazy" />
      </div>

      <div className="product-card-content">
        <div className="badge-row">
          <Badge>{product.format}</Badge>
          <Badge variant={isRetail ? "secondary" : "neutral"}>{product.packageLabel}</Badge>
        </div>

        <div>
          <h3>{product.title}</h3>
          <p className="body-copy">{product.description}</p>
        </div>

        {isRetail && (
          <div className="product-availability">
            <span>Consumer Unit</span>
            <strong>Ready to Ship</strong>
          </div>
        )}

        <div className="product-card-action">
          <Button as="a" href="#wholesale" className="w-full">
            <MaterialIcon name={product.icon} size={20} />
            {product.actionLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
