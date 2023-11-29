"use client";

import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Input {
  purpose: string;
  timetable: Date | "Kapan Saja";
}

export default function DestinationSearch() {
  const [inputs, setInputs] = useState<Input>({
    purpose: "",
    timetable: "Kapan Saja",
  });

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form method="POST" onSubmit={handleSearch}>
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
            <DatePicker
              selected={
                inputs.timetable != "Kapan Saja" ? inputs.timetable : null
              }
              value={inputs.timetable as string}
              onChange={(date: Date) =>
                setInputs((prev) => ({ ...prev, timetable: date }))
              }
              name="jadwal"
              id="jadwal"
            />
            {/* <input
              id="jadwal"
              name="jadwal"
              type="text"
              className="text-[#ccc] placeholder:text-[#ccc] text-xl lg:text-[28px] outline-none w-[148px]"
              placeholder="Kapan Saja"
            /> */}
          </div>
        </div>
        <button
          type="submit"
          className="bg-dark-pink text-white py-4 lg:py-6 leading-none px-12 lg:px-20 text-xl"
        >
          Cari
        </button>
      </div>
    </form>
  );
}
