"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

interface Input {
  purpose: string;
  timetable: Date | null;
}

export default function DestinationSearch() {
  const router = useRouter();

  const [inputs, setInputs] = useState<Input>({
    purpose: "",
    timetable: null,
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/destinasi?s=" + inputs.purpose);
  };

  return (
    <form method="POST" onSubmit={handleSearch}>
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
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, purpose: e.target.value }))
              }
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
            <ReactDatePicker
              selected={inputs.timetable}
              onChange={(date: Date) =>
                setInputs((prev) => ({ ...prev, timetable: date }))
              }
              name="jadwal"
              id="jadwal"
              className="search_destination"
              placeholderText="Kapan Saja"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-dark-pink text-white py-4 lg:py-6 leading-none px-12 lg:px-20 text-xl">
          Cari
        </button>
      </div>
    </form>
  );
}
