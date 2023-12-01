"use client";

import Image from "next/image";
import DestinationList from "./DestinationList";
import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import Filter from "./Filter";
import Paginate from "./Paginate";
import { useCallback, useState } from "react";
import Select, { components } from "react-select";
import "./style.css";
import { SingleValue } from "react-select/dist/declarations/src";

interface Filter {
  tanggal_keberangkatan: Date | null;
}

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
  travel_type: string;
  quota: number;
  terms_conditions: string;
  date_departure: string[];
  departure_location: {
    name: string;
    location: string[];
  }[];
  trip_detail: {
    hour: string;
    description: string;
  }[][];
  gallery: string[];
  review: {
    name: string;
    avatar: string;
    usename: string;
    rating: string;
    content: string;
  }[];
}

interface filter {
  travel_type_open_trip: boolean;
  travel_type_private_trip: boolean;
  travel_theme: string;
  price: {
    min: number;
    max: number;
  };
  departure_location: string;
  destination: string;
  date_departure: string;
  rating: number;
  duration: {
    min: number;
    max: number;
  };
}

const sortOptions = [
  { value: "az", label: "A-Z" },
  { value: "za", label: "Z-A" },
  { value: "now", label: "Terbaru" },
  { value: "latest", label: "Terlama" },
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
  const [filters, setFilters] = useState<Filter>({
    tanggal_keberangkatan: null,
  });

  const [selectedSortOption, setSelectedSortOption] =
    useState<SingleValue<{ value: string; label: string }>>(null);
  const [isFilter, setFilter] = useState<boolean>(false);

  const handleOnChangeFilter = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );
  const handleChangeDate = useCallback((date: Date) => {
    setFilters((prev) => ({ ...prev, tanggal_keberangkatan: date }));
  }, []);

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
                onClick={() => setFilter((prev) => !prev)}
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
                filters={filters}
                onChangeFilter={handleOnChangeFilter}
                onChangeDate={handleChangeDate}
              />
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
