"use client";

import { useState } from "react";
import DekstopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import DestinationSearch from "@/components/DestionationSearch";
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
          <DestinationSearch>
            <div className="w-full h-full flex items-center justify-between lg:flex-row flex-col gap-6">
              <div className="left flex gap-6 md:gap-[65px] h-fit flex-col md:flex-row">
                <div className="form-input">
                  <label
                    htmlFor="tujuan"
                    className="text-base font-medium mb-1 block"
                  >
                    Tujuan
                  </label>
                  <input
                    type="text"
                    id="tujuan"
                    name="tujuan"
                    className="text-[#ccc] text-xl placeholder:text-[#ccc] lg:text-[28px] outline-none block w-[198px]"
                    placeholder="Semua Tempat"
                  />
                </div>
                <div className="hidden md:block h-[70px] border-r border-[#e3e3e3]"></div>
                <div className="form-input">
                  <label
                    htmlFor="jadwal"
                    className="text-base font-medium mb-1 block"
                  >
                    Jadwal
                  </label>
                  <input
                    id="jadwal"
                    name="jadwal"
                    type="text"
                    className="text-[#ccc] placeholder:text-[#ccc] text-xl lg:text-[28px] outline-none w-[148px]"
                    placeholder="Kapan Saja"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-dark-pink text-white py-4 lg:py-6 leading-none px-12 lg:px-20 text-xl"
              >
                Cari
              </button>
            </div>
          </DestinationSearch>
        </div>
      </div>
    </header>
  );
}
