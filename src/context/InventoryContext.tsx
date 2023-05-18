import React from "react";
import { ItemType } from "../../data/shop_items";

export type InventoryType = {
  shopItem: ItemType;
  amount: number;
};

interface InventoryProps {
  inventory: InventoryType[];
  setInventory: React.Dispatch<React.SetStateAction<InventoryType[]>>
}

const InventoryContext = React.createContext<InventoryProps>({
  inventory: [],
  setInventory: () => {},
});

export default InventoryContext;
