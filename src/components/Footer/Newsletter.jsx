import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="grub-newsletter">
    <div className="grub-newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="grub-newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
