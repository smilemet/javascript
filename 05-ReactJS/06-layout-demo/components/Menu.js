import React from "react";

import MenuItem from "./MenuItem"
import tablesetting from "../img/tablesetting.jpg";

const Menu = () => {
  return (
    <article className="menu" id="menu">
      <div className="right">
        <div className="main-container2">
          <div className="art-title">
            <h2>Our Menu</h2>
          </div>
          <MenuItem className="menu-item"
            title="Bread Basket"
            text="Assortment of fresh baked fruit breads and muffins 5.50" />
          
          <MenuItem className="menu-item"
            title="Honey Almond Granola with Fruits"
            text="Natural cereal of honey toasted oats, raisins, almonds and dates 7.00" />
            
          <MenuItem className="menu-item"
            title="Belgian Waffle"
            text="Vanilla flavored batter with malted flour 7.50" />
            
          <MenuItem className="menu-item"
            title="Scrambled eggs"
            text="Scrambled eggs, roasted red pepper and garlic, with green onions 7.50" />
            
          <MenuItem className="menu-item"
            title="Blueberry Pancakes"
            text="With syrup, butter and lots of berries 8.50" />
        </div>
      </div>
      <div className="left">
        <div className="img2">
          <img src={tablesetting} alt="" />
        </div>
      </div>
    </article>
  );
};

export default Menu;
