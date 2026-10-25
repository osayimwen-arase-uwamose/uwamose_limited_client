import MaterialIcon from "../ui/MaterialIcon.jsx";

export default function BenefitCard({ benefit }) {
  return (
    <article className="benefit-card">
      <div className={`benefit-icon ${benefit.accent ? "benefit-icon-accent" : ""}`}>
        <MaterialIcon name={benefit.icon} size={25} />
      </div>
      <span className={`benefit-eyebrow ${benefit.accent ? "benefit-eyebrow-accent" : ""}`}>
        {benefit.eyebrow}
      </span>
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </article>
  );
}
