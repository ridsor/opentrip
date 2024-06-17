"use client";

import { createContext, useState } from "react";

export const DestinationContext = createContext<{
  filter: boolean;
  toggleFilter: () => void;
} | null>(null);

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
