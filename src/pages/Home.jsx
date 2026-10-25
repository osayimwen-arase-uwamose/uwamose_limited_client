import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

import HeroSection from "../components/home/HeroSection.jsx";
import ProductsSection from "../components/home/ProductsSection.jsx";
import BenefitsSection from "../components/home/BenefitsSection.jsx";
import UpcomingProductSection from "../components/home/UpcomingProductSection.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <UpcomingProductSection />
      </main>

      <Footer />
    </>
  );
}
