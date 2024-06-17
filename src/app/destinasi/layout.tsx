"use client";

import { useState } from "react";
import DestinationContext from "./DestinationContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<boolean>(false);

  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };

  return (
    <DestinationContext.Provider value={{ filter, toggleFilter }}>
      {children}
    </DestinationContext.Provider>
  );
}
