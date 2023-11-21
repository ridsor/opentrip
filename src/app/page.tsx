import { Metadata } from "next";
import background_hero from "./assets/image/background/asad-photo-maldives.png";
import DestinationSearch from "@/components/DestionationSearch";
import "./style.css";
import Image from "next/image";

import arrow from "@/app/assets/image/icon/bi_arrow-right.svg";
import Link from "next/link";
import DestinationItem from "./DestinationItem";

export const metadata: Metadata = {
  title: "Open Trip",
  description: "open trip",
};

export default function Home() {
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${background_hero.src})` }}
        className="h-[449.369px] w-full bg-blend-multiply bg-[#c4c4c4] bg-cover bg-center">
        <div className="container h-full">
          <div className="flex items-center h-full w-full mx-auto max-w-[calc(1440px-(205px+205px))] relative">
            <h1 className="font-bold text-3xl lg:text-[45px] text-white leading-snug">
              NEVER STOP
              <br />
              EXPLORING THE WORLD
            </h1>
            <div className="absolute [box-shadow:0_4px_40px_0_rgba(0,0,0,0.1)] w-full lg:-bottom-[70px] bottom-[-200px] bg-white">
              <DestinationSearch>
                <div className="flex items-center h-full w-full flex-col lg:flex-row py-6 px-6 gap-5 lg:gap-0">
                  <div className="form-input lg:ml-[calc(50px-24px)] lg:border-r lg:border-[#e3e3e3] lg:pr-6 w-full">
                    <label
                      htmlFor="tujuan"
                      className="block mb-1 text-base font-medium">
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
                    <label
                      htmlFor="jadwal"
                      className="block mb-1 text-base font-medium">
                      Jadwal
                    </label>
                    <input
                      type="text"
                      className="text-[#ccc] text-xl lg:text-[28px] w-full placeholder:text-[#ccc] outline-none"
                      placeholder="Kapan Saja"
                      id="jadwal"
                      name="jadwal"
                    />
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
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mt-[223px]">
            <div className="populer-destination mb-[100.5px]">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-[35px] font-bold">Destinasi Populer</h2>
                <Link
                  href="/"
                  className="font-medium text-lg text-dark-pink flex gap-[10px] items-center">
                  <span className="leading-none">LIHAT LIBURAN LAINNYA </span>
                  <Image
                    src={arrow}
                    width={20}
                    height={20}
                    alt="arrow"
                    className="-translate-y-[1px]"
                  />
                </Link>
              </div>
              <div className="destionation-list">
                <DestinationItem
                  package="3D1N"
                  place_name="Tanjung Benao"
                  province="Bali"
                  description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
                  price={2000000}
                  rating={4.5}
                />
                <DestinationItem
                  package="3D1N"
                  place_name="Tanjung Benao"
                  province="Bali"
                  description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
                  price={2000000}
                  rating={4.5}
                />
                <DestinationItem
                  package="3D1N"
                  place_name="Tanjung Benao"
                  province="Bali"
                  description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
                  price={2000000}
                  rating={4.5}
                />
                <DestinationItem
                  package="3D1N"
                  place_name="Tanjung Benao"
                  province="Bali"
                  description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
                  price={2000000}
                  rating={4.5}
                />
                <DestinationItem
                  package="3D1N"
                  place_name="Tanjung Benao"
                  province="Bali"
                  description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
                  price={2000000}
                  rating={4.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
