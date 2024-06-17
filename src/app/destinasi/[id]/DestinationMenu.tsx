"use client";

import Image from "next/image";
import TripDetail from "./TripDetail";
import TermsConditions from "./TermsConditions";
import Review from "./Review";
import Gallery from "./Gallery";
import icon_three_point from "@/app/assets/image/icon/three-point.svg";
import { useState } from "react";
import { Destination } from "@/types/destination.type";

interface Props {
  destination: {
    trip_detail: { hour: string; description: string }[][];
    terms_conditions: string;
    gallery: string[];
    reviews: {
      name: string;
      avatar: string;
      username: string;
      rating: number;
      content: string;
    }[];
  };
}

export default function DestinationMenu(props: Props) {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState<
    "trip_detail" | "terms_conditions" | "gallery" | "review"
  >("trip_detail");

  return (
    <section className="pt-[125px]">
      <div className="container">
        <div className="border-b border-[#e0e0e0] relative">
          <button
            className="p-2 mb-4 rounded-full border lg:hidden"
            onClick={() => setNav((prev) => !prev)}>
            <Image src={icon_three_point} alt="" width={24} height={24} />
          </button>
          <ul
            className={`${
              nav
                ? "opacity-100 scale-100 translate-x-0 translate-y-0"
                : "-translate-y-1/2 -translate-x-1/2 scale-0 opacity-0"
            } lg:opacity-100 lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all flex flex-col lg:flex-row mb-4 absolute lg:static top-0 left-[60px] bg-white border gap-2 lg:gap-[50px] lg:border-0 p-3`}>
            <li>
              <button
                onClick={() => setMenu("trip_detail")}
                className={`${
                  menu === "trip_detail" ? "text-dark-pink" : "text-[#9f9f9f]"
                } transition text-base lg:text-2xl font-medium`}>
                Detail Perjalanan
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("terms_conditions")}
                className={`${
                  menu === "terms_conditions"
                    ? "text-dark-pink"
                    : "text-[#9f9f9f]"
                } transition text-base lg:text-2xl font-medium`}>
                Syarat & Ketentuan
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("gallery")}
                className={`${
                  menu === "gallery" ? "text-dark-pink" : "text-[#9f9f9f]"
                } transition text-base lg:text-2xl font-medium`}>
                Galeri
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("review")}
                className={`${
                  menu === "review" ? "text-dark-pink" : "text-[#9f9f9f]"
                } transition text-base lg:text-2xl font-medium`}>
                Ulasan
              </button>
            </li>
          </ul>
        </div>
        {menu === "trip_detail" && (
          <TripDetail trip_detail={props.destination.trip_detail} />
        )}
        {menu === "terms_conditions" && (
          <TermsConditions
            terms_conditions={props.destination.terms_conditions}
          />
        )}
        {menu === "gallery" && <Gallery gallery={props.destination.gallery} />}
        {menu === "review" && <Review reviews={props.destination.reviews} />}
      </div>
    </section>
  );
}
