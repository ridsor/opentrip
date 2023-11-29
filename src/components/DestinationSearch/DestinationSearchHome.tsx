"use client";

import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

interface Input {
  purpose: string;
  timetable: Date | null;
}

export default function DestinationSearchHome() {
  const [inputs, setInputs] = useState<Input>({
    purpose: "",
    timetable: null,
  });

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form method="POST">
      <div className="flex items-center h-full w-full flex-col lg:flex-row py-6 px-6 gap-5 lg:gap-0">
        <div className="form-input lg:ml-[calc(50px-24px)] lg:border-r lg:border-[#e3e3e3] lg:pr-6 w-full">
          <label htmlFor="tujuan" className="block mb-1 text-base font-medium">
            Tujuan
          </label>
          <input
            type="text"
            className="text-[#ccc] text-xl lg:text-[28px] placeholder:text-[#ccc] outline-none w-full lg:w-[calc(198px+140px-24px)]"
            placeholder="Semua Tujuan"
            id="tujuan"
            name="tujuan"
          />
        </div>
        <div className="lg:ml-[140px] form-input lg:mr-6 w-full">
          <label htmlFor="jadwal" className="block mb-1 text-base font-medium">
            Jadwal
          </label>
          <DatePicker
            placeholderText="Kapan Saja"
            selected={inputs.timetable}
            onChange={(date: Date) =>
              setInputs((prev) => ({ ...prev, timetable: date }))
            }
            name="jadwal"
            id="jadwal"
            className="search_destination"
          />
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
