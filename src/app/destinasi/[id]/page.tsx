"use client";

import icon_calendar from "@/app/assets/image/icon/akar-icons_calendar.svg";
import icon_location from "@/app/assets/image/icon/akar-icons_location.svg";
import icon_vector from "@/app/assets/image/icon/Vector.svg";
import Image from "next/image";
import { useState } from "react";

interface Props {
  params: {
    id: number;
  };
}

export default function DetailDestination(props: Props) {
  const [location, setLocation] = useState<string>();

  return (
    <main>
      <section className="pt-[72px]">
        <div className="container p-0 max-w-none">
          <div className="flex">
            <div className="flex-1 bg-red-500"></div>
            <div className="w-full max-w-[716px] mr-[100px] ml-10">
              <div className="pt-[60px]">
                <div className="text-dark-pink border-b border-[#e0e0e0] pb-5 mb-10">
                  Destinasi <span className="text-[#a9a9a9]">/</span>{" "}
                  <span>Jawa Timur</span>
                </div>
                <h1 className="text-[45px] font-bold mb-[15px]">
                  Gunung Bromo
                </h1>
                <p className="mb-10 text-base text-[#9f9f9f">
                  Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku
                </p>
                <div className="bg-[#f1f1f1] text-lg flex justify-between h-[60px] items-center px-[15px] mb-[30px]">
                  <span>Saturday, 29 May 2021</span>
                  <button className="flex text-dark-pink items-center gap-[6px] font-bold leading-none">
                    <Image src={icon_calendar} alt="" />
                    <span>Lihat Tanggal Lain</span>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex leading-none items-center">
                    <Image src={icon_location} alt="" />
                    <span className="ml-[5px] text-base font-medium">
                      Titik Penjemputan
                    </span>
                  </div>
                  <button className="rounded-lg border border-[#d4d4d4] h-[40px] w-[295px] font-medium text-[12px] flex items-center">
                    <span className="flex-1 text-left pl-[15px]">
                      Indomart Point Mall Taman Anggrek
                    </span>
                    <div className="px-[15px] ">
                      <Image src={icon_vector} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
