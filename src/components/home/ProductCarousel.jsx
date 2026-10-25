import { useEffect, useState } from "react";
import MaterialIcon from "../ui/MaterialIcon.jsx";
import { productImages } from "../../data/products.js";

const slides = [
  { src: productImages.retail, alt: "Pure Plantain Flour 900g retail pouch", caption: "Retail 900g Pouch" },
  { src: productImages.bulk, alt: "Commercial 12-pack master carton", caption: "Commercial 12-Pack Carton" },
];

export default function ProductCarousel({ selectedVariant, onSelectVariant }) {
  const [currentSlide, setCurrentSlide] = useState(selectedVariant === "bulk" ? 1 : 0);

  useEffect(() => {
    setCurrentSlide(selectedVariant === "bulk" ? 1 : 0);
  }, [selectedVariant]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  const selectSlide = (index) => {
    setCurrentSlide(index);
    onSelectVariant?.(index === 0 ? "retail" : "bulk");
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="carousel-panel">
      <div className="carousel-image-wrap" aria-live="polite">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`carousel-image ${currentSlide === index ? "carousel-image-active" : ""}`}
            aria-hidden={currentSlide !== index}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow focus-ring"
          aria-label="Previous product image"
          onClick={() => selectSlide((currentSlide - 1 + slides.length) % slides.length)}
        >
          <MaterialIcon name="chevron_left" size={20} />
        </button>

        <div className="carousel-dots" aria-label="Choose product image">
          {slides.map((slide, index) => (
            <button
              key={slide.caption}
              type="button"
              className={`carousel-dot ${currentSlide === index ? "carousel-dot-active" : ""}`}
              aria-label={`Show ${slide.caption}`}
              aria-pressed={currentSlide === index}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow focus-ring"
          aria-label="Next product image"
          onClick={() => selectSlide((currentSlide + 1) % slides.length)}
        >
          <MaterialIcon name="chevron_right" size={20} />
        </button>

        <span className="carousel-caption">
          {currentSlide + 1} / {slides.length}: {activeSlide.caption}
        </span>
      </div>
    </div>
  );
}
