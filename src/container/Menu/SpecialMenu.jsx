import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="grub-specialMenu flex__center section__padding" id="menu">
    <div className="grub-specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="grub-specialMenu-menu">
      <div className="grub-specialMenu-menu_wine  flex__center">
        <p className="grub-specialMenu-menu_heading">Water & Juice</p>
        <div className="grub-specialMenu_menu_items">
          {data.water.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="grub-specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="grub-specialMenu-menu_cocktails  flex__center">
        <p className="grub-specialMenu-menu_heading">Cocktails</p>
        <div className="grub-specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
