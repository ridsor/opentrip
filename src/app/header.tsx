"use client";

import { useState } from "react";
import DekstopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import DestinationSearch from "@/components/DestinationSearch/DestionationSearchHeader";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSearch, setSearch] = useState<boolean>(false);
  const [isNav, setNav] = useState<boolean>(false);
  const pathname = usePathname();

  const openCloseSearch = () => {
    if (isNav) setNav(false);
    setSearch((prev) => !prev);
  };

  const openCloseNav = () => {
    if (isSearch) setSearch(false);
    setNav((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white z-50 [box-shadow:0px_4px_15px_0px_rgba(115,115,115,0.07)]">
      <div className="container">
        <MobileHeader
          isSearch={isSearch}
          openCloseSearch={openCloseSearch}
          isNav={isNav}
          openCloseNav={openCloseNav}
          pathname={pathname}
        />
        <DekstopHeader
          isSearch={isSearch}
          openCloseSearch={openCloseSearch}
          pathname={pathname}
        />
      </div>
      <div
        className={`${
          isSearch
            ? "opacity-100 pointer-events-auto top-full"
            : "opacity-0 pointer-events-none top-[calc(100%-1rem)]"
        } absolute w-full  py-6 min-h-[130px] h-fit bg-white z-50 transition-all ease-out`}
      >
        <div className="container h-full w-full">
          <DestinationSearch />
        </div>
      </div>
    </header>
  );
}
