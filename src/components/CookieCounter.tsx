import React, { useContext, useEffect, useState } from "react";
import CookieContext from "../context/CookieContext";
import useInventory from "../hooks/useInventory";
import { ItemMethodEnum } from "../../data/shop_items";

const CookieCounter: React.FC = () => {
  const {cookieAmount, setCookieAmount} = useContext(CookieContext)
  const { inventory, getTotalGiveInventory } = useInventory();
  const [giveInventory, setGiveInventory] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCookieAmount(cookieAmount + giveInventory);
    }, 100);

    return () => clearInterval(intervalId);
  }, [cookieAmount]);

  useEffect(() => {
    setGiveInventory(getTotalGiveInventory(ItemMethodEnum.A))
  }, [inventory])

  return (
    <div>
      <h1>
        {Math.floor(cookieAmount)} galletas
      </h1>
      <h2>{giveInventory.toFixed(2)} g/s</h2>
    </div>
  );
};

export default CookieCounter;
