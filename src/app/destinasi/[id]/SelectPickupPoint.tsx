"use client";

import { useState } from "react";
import Select, { components, SingleValue } from "react-select";
import icon_vector from "@/app/assets/image/icon/Vector.svg";
import Image from "next/image";

const pickupPointSelect = {
  components: {
    DropdownIndicator: (props: any) => (
      <components.DropdownIndicator {...props}>
        <Image src={icon_vector} alt="" className="w-[14px] h-[8px]" />
      </components.DropdownIndicator>
    ),
  },
  styles: {
    control: (baseStyles: any) => ({
      ...baseStyles,
      borderColor: "#d4d4d4",
      height: "40px",
      minHeight: "40px",
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      margin: "0px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: "40px",
      padding: "0 0 0 10px",
    }),
    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "40px",
    }),
  },
  theme: (theme: any) => ({
    ...theme,
    borderRadius: 8,
    colors: {
      ...theme.colors,
      primary25: "#E5E5E5",
      primary: "#FF385C",
      primary50: "none",
    },
  }),
};

export default function SelectPickupPoint() {
  const [pickupPointOptions, setPickupPointOptions] = useState([]);
  const [selectedPickupPointOption, setSelectedPickupPointOption] =
    useState<SingleValue<{ value: string; label: string }>>(null);

  return (
    <Select
      defaultValue={selectedPickupPointOption}
      onChange={(selectedPickupPointOption) =>
        setSelectedPickupPointOption(selectedPickupPointOption)
      }
      isSearchable={false}
      options={pickupPointOptions}
      {...pickupPointSelect}
      placeholder="Pilih tempat"
      className="w-full max-w-[295px] font-medium text-[12px] relative z-10"
    />
  );
}
