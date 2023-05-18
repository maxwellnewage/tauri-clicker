import React, { useContext, useEffect, useState } from "react";
import { ItemType } from "../../data/shop_items";
import CookieContext from "../context/CookieContext";
import useInventory from "../hooks/useInventory";

interface ShopItemProps {
  shopItem: ItemType;
}

const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
  const itemSellingCost = shopItem.cost / 2;
  const { cookieAmount, setCookieAmount } = useContext(CookieContext);
  const [itemAmount, setItemAmount] = useState(0);
  const { inventory, getItemInventory, setAmountItemInventory } = useInventory();

  useEffect(() => {
    const itemInventory = getItemInventory(shopItem);
    setItemAmount(itemInventory.amount);
  }, [inventory]);

  const transaction = (action: "B" | "S") => () => {
    if (action == "B") {
      setCookieAmount(cookieAmount - shopItem.cost);
      setAmountItemInventory(shopItem, "B");
    } else {
      setCookieAmount(cookieAmount + itemSellingCost);
      setAmountItemInventory(shopItem, "S");
    }
  };

  return (
    <div className="row m-2">
      <div className="col">
        <div className="row">
          <div className="col">
            <h1 className="d-inline" style={{ verticalAlign: "middle" }}>
              {itemAmount}
            </h1>
          </div>

          <div className="col">
            <span>
              <shopItem.icon size="50" />
            </span>

            <span className="ms-3">{shopItem.name}</span>
          </div>
        </div>
      </div>

      <div className="col">
        <button
          className="btn btn-success"
          disabled={cookieAmount < shopItem.cost}
          onClick={transaction("B")}
        >
          <h5>${shopItem.cost}</h5>
        </button>

        <button className="ms-3 btn btn-danger" onClick={transaction("S")}>
          <h5>${itemSellingCost}</h5>
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
