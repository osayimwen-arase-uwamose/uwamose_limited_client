import Container from "../layout/Container.jsx";
import SectionHeading from "../layout/SectionHeading.jsx";
import ProductCard from "./ProductCard.jsx";
import { products } from "../../data/products.js";

export default function ProductsSection() {
  return (
    <section id="products" className="section-spacing products-section">
      <Container>
        <SectionHeading
          eyebrow="Theodore Catalog"
          icon="inventory_2"
          title="Our Products"
          description="Discover Theodore Limited's growing range of hygienically processed staple foods. We adhere to stringent milling and moisture-tight packaging protocols to supply households, supermarkets, and international distributors."
        />

        <div className="product-group">
          <div className="product-group-heading">
            <div>
              <h3>Theodore Plantain Flour</h3>
              <p>
                Milled exclusively from unripe, hand-selected green plantains
                with zero sand residue, additives, or gluten.
              </p>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
