import React from "react";
import ShopItemList from "./ShopItemList";

const Shop: React.FC = () => {
  return (
    <div className="text-center">
      <h1>Tienda</h1>
      <div className="row">
        <ShopItemList />
      </div>
    </div>
  );
}

export default Shop;
