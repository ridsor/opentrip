"use client";

import { useState } from "react";
import DekstopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import DestinationSearch from "@/components/DestionationSearch";

export default function Header() {
  const [isSearch, setSearch] = useState<boolean>(true);

  const openCloseSearch = () => {
    setSearch((prev) => !prev);
  };

  return (
    <header className="relative">
      <div className="container">
        <MobileHeader />
        <DekstopHeader isSearch={isSearch} openCloseSearch={openCloseSearch} />
      </div>
      {isSearch && (
        <div className="absolute w-full top-full py-6 min-h-[130px] h-fit bg-white z-50">
          <div className="container h-full w-full">
            <DestinationSearch>
              <div className="w-full h-full flex items-center justify-between lg:flex-row flex-col gap-6">
                <div className="left flex gap-6 md:gap-[65px] h-fit flex-col md:flex-row">
                  <div className="form-input">
                    <label
                      htmlFor="tujuan"
                      className="text-base font-medium mb-1 block">
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
                      className="text-base font-medium mb-1 block">
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
                  className="bg-dark-pink text-white py-4 lg:py-6 leading-none px-12 lg:px-20 text-xl">
                  Cari
                </button>
              </div>
            </DestinationSearch>
          </div>
        </div>
      )}
    </header>
  );
}
