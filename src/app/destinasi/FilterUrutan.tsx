"use client";

import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import Image from "next/image";
import { useContext, useState } from "react";
import Select, { components } from "react-select";
import { DestinationContext } from "./layout";

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
          fill="none">
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

export default function FilterUrutan() {
  const destinationContext = useContext(DestinationContext);

  const [selectedSortOption, setSelectedSortOption] = useState(null);

  return (
    <div className="flex gap-[10px] items-center mb-6 md:mb-0">
      <span className="font-semibold text-[10px]">Urutkan</span>
      <Select
        className="relative z-20 w-[130px] text-[12px]"
        placeholder="Pilih Urutan"
        defaultValue={selectedSortOption}
        onChange={(selectedSortOption: any) =>
          setSelectedSortOption(selectedSortOption)
        }
        options={sortOptions}
        isSearchable={false}
        {...sortSelect}
      />
      <button
        className="lg:hidden"
        onClick={() => destinationContext?.toggleFilter()}>
        <Image src={icon_filter} alt="" width={24} height={24} />
      </button>
    </div>
  );
}
