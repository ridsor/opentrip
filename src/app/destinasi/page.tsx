"use client";

import Image from "next/image";
import DestinationList from "./DestinationList";
import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import Filter from "./Filter";
import Paginate from "./Paginate";
import { useState } from "react";

export default function Destinasi() {
  const [filters, setFilters] = useState({});
  const [isFilter, setFilter] = useState<boolean>(false);

  const handleOnChangeFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      <section className="pt-[calc(72px+70px)]">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-[10px] border-b mb-[52px] border-[#e3e3e3] items-center relative before:absolute before:content-[''] before:block before:w-[100px] before:border-b-8 before:border-dark-pink before:bottom-0 before:left-0">
            <h1 className="text-[35px] font-bold md:mb-4 w-full md:w-fit">
              Semua Tur
            </h1>
            <div className="flex gap-[10px] items-center mb-6 md:mb-0">
              <span className="font-semibold text-[10px]">Urutkan</span>
              <select
                name="urutkan"
                defaultValue={""}
                className="rounded-[4px]  w-[130px] h-[30px] text-[#a6a6a6] text-[10px] border border-[#d9d9d9] bg-white p-[7px]"
              >
                <option value="" disabled>
                  Pilih Urutan
                </option>
                <option value="ASC">A - Z</option>
              </select>
              <button
                className="lg:hidden"
                onClick={() => setFilter((prev) => !prev)}
              >
                <Image src={icon_filter} alt="" width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="flex gap-[60px] relative">
            <div
              className={`${
                isFilter
                  ? "right-[calc(100%-255px)] opacity-100 pointer-events-auto"
                  : "right-full opacity-0 pointer-events-none"
              } lg:opacity-100 top-0 transition-all ease-out w-[255px] absolute lg:static z-10 lg:block`}
            >
              <Filter />
            </div>
            <div className="flex-1">
              <DestinationList destination={[]} />
              <Paginate />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
