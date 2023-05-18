import React from "react";

interface CookieProps {
  cookieAmount: number,
  setCookieAmount: React.Dispatch<React.SetStateAction<number>>
}

const CookieContext = React.createContext<CookieProps>({
  cookieAmount: 0,
  setCookieAmount: () => {},
});

export default CookieContext;
