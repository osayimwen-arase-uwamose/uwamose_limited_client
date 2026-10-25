import Container from "../layout/Container.jsx";
import Badge from "../ui/Badge.jsx";
import MaterialIcon from "../ui/MaterialIcon.jsx";
import NotificationSignup from "./NotificationSignup.jsx";

const features = [
  "No soaking or peeling required",
  "Fluffy Akara & smooth Moi-Moi",
  "High protein & naturally fiber-rich",
  "Airtight seal for extended shelf life",
];

export default function UpcomingProductSection() {
  return (
    <section id="about" className="upcoming-section section-spacing">
      <Container>
        <div className="upcoming-panel">
          <div className="upcoming-copy">
            <div className="upcoming-kicker">
              <Badge variant="secondary">
                <MaterialIcon name="schedule" size={16} />
                Coming Soon
              </Badge>
              <span className="benefits-eyebrow">What's Next</span>
            </div>

            <h2>Pure Roasted Bean Flour</h2>
            <p className="upcoming-description">
              Theodore Limited's next innovation will completely eliminate
              the exhausting labor of soaking and manual peeling. Our upcoming
              100% natural, roasted and finely milled bean flour is formulated
              specifically for light, fluffy Akara and ultra-smooth Moi-Moi
              with zero gritty residue.
            </p>

            <ul className="upcoming-features">
              {features.map((feature) => (
                <li key={feature}>
                  <MaterialIcon name="check_circle" size={22} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="notification-area">
              <NotificationSignup />
            </div>
          </div>

          <aside className="upcoming-preview" aria-label="Upcoming bean flour product preview">
            <div className="upcoming-product-icon">
              <MaterialIcon name="soup_kitchen" size={48} />
            </div>
            <Badge variant="secondary">Coming Soon</Badge>
            <h3>Roasted Brown Bean Flour</h3>
            <p>
              100% dehulled, cleaned, and stone-milled cowpea beans. Coming in
              500g and 1kg retail sachets as well as catering bulk cartons.
            </p>

            <div className="launch-stats">
              <div>
                <strong>Q2</strong>
                <span>Launch Window</span>
              </div>
              <span className="launch-divider" aria-hidden="true" />
              <div>
                <strong>100%</strong>
                <span>Pure Beans</span>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
