import React from "react";
import items from "../test";
import "../App.css";

const Items = () => {
  const nameQualities = {
    Legendary: "item-name-legendary",
    Uncommon: "item-name-uncommon",
    Common: "item-name-common",
  };

  const iconQualities = {
    Legendary: "item-icon-legendary",
    Uncommon: "item-icon-uncommon",
    Common: "item-icon-common",
  };

  const renderItems = () =>
    items.map(({name, quality, image, item_class, type}) => (
      <div className="item">
        <img
          className={iconQualities[quality]}
          alt="Item"
          src={image}
        />
        <p className={nameQualities[quality]}>{name}</p>
        <p>Class: {item_class}</p>
        <div>Type: {type}</div>
      </div>
    ));

  return <div className="items">{renderItems()}</div>;
};

export default Items;
