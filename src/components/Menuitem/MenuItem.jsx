import "./MenuItem.css";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ title, price, tags }) => (
  <div className="grub-menuitem">
    <div className="grub-menuitem-head">
      <div className="grub-menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="grub-menuitem-dash" />
      <div className="grub-menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="grub-menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
