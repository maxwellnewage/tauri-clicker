import React, { useState, useContext, useEffect, useRef } from "react";
import cookieImage from "../../images/cookie.png";
import "./cookie.css";
import CookieContext from "../../context/CookieContext";
import CookieCounter from "../CookieCounter";
import useInventory from "../../hooks/useInventory";
import { ItemMethodEnum } from "../../../data/shop_items";


const Cookie: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const {cookieAmount, setCookieAmount} = useContext(CookieContext)
  const { inventory, getTotalGiveInventory } = useInventory();
  const [clickerUpgrade, setClickerUpgrade] = useState(0)

  useEffect(() => {
    setClickerUpgrade(getTotalGiveInventory(ItemMethodEnum.M))
  }, [inventory])

  const incrementCookie = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCookieAmount(cookieAmount + 1 + clickerUpgrade)

      setTimeout(() => {
        setIsAnimating(false)
      }, 100);
    }
  };

  return (
    <div className="text-center">
      <CookieCounter />
      <img
        className={`cookie-img ${isAnimating ? "cookie-img--animated" : ""}`}
        width="450"
        src={cookieImage}
        onClick={incrementCookie}
      />
    </div>
  );
}

export default Cookie;
