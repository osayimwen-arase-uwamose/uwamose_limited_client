import { useState } from "react";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import MaterialIcon from "../ui/MaterialIcon.jsx";
import ProductCarousel from "./ProductCarousel.jsx";
import ProductVariantSelector from "./ProductVariantSelector.jsx";

export default function FeaturedProduct() {
  const [selectedVariant, setSelectedVariant] = useState("retail");

  const cartLabel =
    selectedVariant === "retail"
      ? "Add 900g Sachet to Cart"
      : "Add Carton of 12X 900g to Cart";

  return (
    <article className="featured-product">
      <div className="featured-grid">
        <ProductCarousel
          selectedVariant={selectedVariant}
          onSelectVariant={setSelectedVariant}
        />

        <div className="featured-details">
          <div className="featured-copy">
            <div className="badge-row">
              <Badge>100% Sun-Dried &amp; Unripe</Badge>
              <Badge variant="secondary">Gluten-Free</Badge>
            </div>

            <h2 className="featured-title">Pure Plantain Flour</h2>
            <p className="featured-tagline">“As good as in Mama's kitchen”</p>
            <p className="body-copy">
              Authentic, hygienically milled unripe plantain flour processed to
              ultra-fine perfection. Formulated for traditional swallow,
              gluten-free baking, and dietary wellness with zero added sugar or
              preservatives.
            </p>
          </div>

          <ProductVariantSelector
            selectedVariant={selectedVariant}
            onChange={setSelectedVariant}
          />

          <div className="featured-actions">
            <Button
              as="a"
              href="#products"
              variant="secondary"
              className="featured-cart-button"
              aria-label={cartLabel}
            >
              <MaterialIcon name="add_shopping_cart" size={20} />
              <span>{cartLabel}</span>
            </Button>
            <Button as="a" href="#products" variant="outline" className="featured-view-button">
              <MaterialIcon name="visibility" size={20} />
              View Product
            </Button>
          </div>
          <span className="sr-only" aria-live="polite">
            Selected package: {selectedVariant === "retail" ? "900 gram retail sachet" : "10.8 kilogram master carton"}.
          </span>
        </div>
      </div>
    </article>
  );
}
