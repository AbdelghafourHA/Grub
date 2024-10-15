import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="grub-footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="grub-footer-links">
      <div className="grub-footer-links_contact">
        <h1 className="grub-footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, Algeria, RE 10019, DZD</p>
        <p className="p__opensans">+213 698-05-53-44</p>
        <p className="p__opensans">+213 553-52-31-88</p>
      </div>

      <div className="grub-footer-links_logo">
        <h1>GRUB</h1>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="grub-footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="grub-footer-links_work">
        <h1 className="grub-footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Grub. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
