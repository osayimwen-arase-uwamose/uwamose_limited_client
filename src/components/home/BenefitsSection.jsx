import Container from "../layout/Container.jsx";
import BenefitCard from "./BenefitCard.jsx";
import { benefits } from "../../data/products.js";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="benefits-section section-spacing">
      <Container>
        <div className="benefits-heading">
          <span className="benefits-eyebrow">Theodore Processing Standard</span>
          <h2>Why Purchase From Us</h2>
          <p>
            We eliminate traditional processing flaws with strict modern
            quality controls, transparent sourcing, and export-grade packaging.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
