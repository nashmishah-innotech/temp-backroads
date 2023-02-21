// import { dataLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks.js";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks
        parent="footer-links"
        children="footer-link"
        id="footer-links"
      />
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
