// MyAppContext.tsx


import React, { createContext, useState } from "react";

export const MyAppContext = createContext<any>(null);

export const MyAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<unknown[]>([]);



  return (
    <MyAppContext.Provider value={{ basket, setBasket }}>
      {children}
    </MyAppContext.Provider>
  );
};

