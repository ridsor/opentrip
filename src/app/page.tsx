import { Metadata } from "next";
import background_hero from "./assets/image/background/asad-photo-maldives.png";

import DestinationSearch from "@/components/DestionationSearch";
import "./style.css";
import DestinationList from "./DestinationList";
import Link from "next/link";
import icon_playstore from "@/app/assets/image/icon/Google Play Badge.svg";
import icon_appstore from "@/app/assets/image/icon/App Store Badge.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Open Trip",
  description: "open trip",
};

export default function Home() {
  console.log(background_hero);
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
            <DestinationList
              name="Destinasi Populer"
              destinations={[]}
              className="mb-[100px]"
            />
            <DestinationList
              name="Vitamin Sea"
              destinations={[]}
              className="mb-[100px]"
            />
            <DestinationList
              name="Naik Naik ke Puncak Gunung"
              destinations={[]}
              className="mb-[100px]"
            />
            <DestinationList
              name="Menyatu Dengan Alam"
              destinations={[]}
              className="mb-[200px]"
            />
          </div>
        </div>
      </section>
      <section className="bg-dark-pink text-white">
        <div className="container w-full">
          <div className="py-[100px] w-full lg:w-1/2">
            <h2 className="font-extrabold  text-5xl mb-4">Download App</h2>
            <p className="text-lg mb-12">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
            <h3 className="text-lg font-medium mb-2">Get the App</h3>
            <div className="app flex gap-3">
              <Link href="/">
                <Image src={icon_playstore} width={135} height={40} alt="" />
              </Link>
              <Link href="/">
                <Image src={icon_appstore} width={135} height={40} alt="" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
