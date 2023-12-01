"use client";

import Image from "next/image";
import DestinationList from "./DestinationList";
import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import Filter from "./Filter";
import Paginate from "./Paginate";
import { useCallback, useEffect, useState } from "react";
import Select, { components } from "react-select";
import "./style.css";
import { SingleValue } from "react-select/dist/declarations/src";
import Script from "next/script";
import { getData, postData } from "@/services/destinastion";

interface Destination {
  id: number;
  name: string;
  image: string;
  province: string;
  price: number;
  rating: number;
  package: string;
  description: string;
  travel_theme: string;
}

interface Filter {
  travel_type_open_trip: boolean;
  travel_type_private_trip: boolean;
  travel_theme_popular_destination: boolean;
  travel_theme_vitaminsea_destination: boolean;
  travel_theme_mountain_destination: boolean;
  travel_theme_nature_destination: boolean;
  min_price: number;
  max_price: number;
  departure_location: string;
  destination: string;
  date_departure?: Date;
  rating5: boolean;
  rating34: boolean;
  min_duration: number;
  max_duration: number;
}

const sortOptions = [
  { value: { orderby: "asc", order: "name" }, label: "A-Z" },
  { value: { orderby: "desc", order: "name" }, label: "Z-A" },
  { value: { orderby: "desc", order: "createdAt" }, label: "Terbaru" },
  { value: { orderby: "asc", order: "createdAt" }, label: "Terlama" },
];

const sortSelect = {
  components: {
    DropdownIndicator: (props: any) => (
      <components.DropdownIndicator {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M4.07959 6.56366L8.07959 10.5637L12.0796 6.56366"
            stroke="#4D4D4D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </components.DropdownIndicator>
    ),
  },
  styles: {
    control: (baseStyles: any) => ({
      ...baseStyles,
      borderColor: "#d9d9d9",
      height: "30px",
      minHeight: "30px",
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      margin: "0px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: "30px",
      padding: "0 0 0 10px",
    }),
    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "30px",
    }),
  },
  theme: (theme: any) => ({
    ...theme,
    borderRadius: 4,
    colors: {
      ...theme.colors,
      primary25: "#E5E5E5",
      primary: "#FF385C",
      primary50: "none",
    },
  }),
};

export default function Destinasi() {
  const [destinations, setDestinations] = useState<Destination[]>();
  const [filter, setFilter] = useState<Filter>({
    travel_type_open_trip: false,
    travel_type_private_trip: false,
    travel_theme_popular_destination: false,
    travel_theme_vitaminsea_destination: false,
    travel_theme_mountain_destination: false,
    travel_theme_nature_destination: false,
    min_price: 0,
    max_price: 0,
    departure_location: "",
    destination: "",
    rating5: false,
    rating34: false,
    min_duration: 1,
    max_duration: 10,
  });

  const [selectedSortOption, setSelectedSortOption] = useState<
    SingleValue<{
      value: { orderby: string; order: string };
      label: string;
    }>
  >(null);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const handleOnChangeFilter = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.type == "checkbox" ? e.target.checked : e.target.value,
      }));
    },
    []
  );
  const handleChangeDate = useCallback((date: Date) => {
    setFilter((prev) => ({ ...prev, tanggal_keberangkatan: date }));
  }, []);

  useEffect(() => {
    postData<Destination[]>("/destination?p=1&l=9", {
      filter,
      sort: selectedSortOption,
    }).then((data) => {
      setDestinations(data);
    });
  }, [filter]);

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
              <Select
                className="relative z-20 w-[130px] text-[12px]"
                placeholder="Pilih Urutan"
                defaultValue={selectedSortOption}
                onChange={(selectedSortOption) =>
                  setSelectedSortOption(selectedSortOption)
                }
                options={sortOptions}
                isSearchable={false}
                {...sortSelect}
              />
              <button
                className="lg:hidden"
                onClick={() => setIsFilter((prev) => !prev)}
              >
                <Image src={icon_filter} alt="" width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="flex gap-[60px] z-10 relative">
            <div
              className={`${
                isFilter
                  ? "right-[calc(100%-255px)] opacity-100 pointer-events-auto"
                  : "right-full opacity-0 pointer-events-none"
              } lg:opacity-100 top-0 transition-all ease-out w-[255px] lg:pointer-events-auto absolute lg:static z-10 lg:block`}
            >
              <Filter
                filter={filter}
                onChangeFilter={handleOnChangeFilter}
                onChangeDate={handleChangeDate}
              />
            </div>
            <div className="flex-1">
              <DestinationList destinations={destinations} />
              <Paginate />
            </div>
          </div>
        </div>
      </section>
      <Script src="/assets/js/destination.js"></Script>
    </main>
  );
}
