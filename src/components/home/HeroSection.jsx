import Container from "../layout/Container.jsx";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import MaterialIcon from "../ui/MaterialIcon.jsx";
import FeaturedProduct from "./FeaturedProduct.jsx";
import { productImages } from "../../data/products.js";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <img src={productImages.hero} alt="" fetchPriority="high" />
        <div className="hero-overlay" />
      </div>

      <Container className="hero-content">
        <FeaturedProduct />

        <div className="hero-intro">
          <div className="hero-intro-copy">
            <Badge variant="light" className="hero-brand-badge">
              <MaterialIcon name="factory" size={16} />
              Uwamose Limited
            </Badge>

            <h1>Wholesome Packaged Foods, Processed &amp; Sealed With Care.</h1>

            <p>
              At Uwamose Limited, we transform premium agricultural staples
              into certified, factory-sealed pantry essentials. Starting with
              our flagship Pure Plantain Flour, every batch represents
              unmatched purity, consistent texture, and strict hygienic
              processing.
            </p>

            <div className="hero-actions">
              <Button as="a" href="#products" variant="secondary" className="hero-primary-cta">
                <MaterialIcon name="grid_view" size={20} />
                Explore Our Products
              </Button>
              <Button as="a" href="#wholesale" variant="outline" className="hero-secondary-cta">
                Contact / Wholesale Inquiries
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
