import Container from "./Container.jsx";
import MaterialIcon from "../ui/MaterialIcon.jsx";

const footerGroups = [
  {
    title: "Packaged products",
    links: [
      { label: "Plantain Flour 900g sachet", href: "#products" },
      { label: "12-Pack Carton", href: "#products" },
      { label: "Pure Bean Flour (Coming Soon)", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Uwamose Limited", href: "#about" },
      { label: "Quality & Hygiene Standards", href: "#benefits" },
      { label: "Contact & Inquiries", href: "#wholesale" },
    ],
  },
  {
    title: "Regulatory & Legal",
    links: [
      { label: "NAFDAC Compliance", href: "#wholesale" },
      // { label: "Terms & Wholesale Policy", href: "#wholesale" },
      // { label: "Privacy Policy", href: "#wholesale" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="wholesale" className="site-footer">
      <Container>
        <div className="footer-brand">
          <a className="footer-brand-lockup" href="#home">
            <MaterialIcon name="package_2" size={34} />
            <span>Uwamose Limited</span>
          </a>
          <p>
            Modern agro-processing and certified packaged food manufacturing.
            Delivering pure, unadulterated Nigerian food products direct to
            households, retailers, and export markets worldwide.
          </p>
        </div>

        <div className="footer-links-grid">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Uwamose Limited. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
