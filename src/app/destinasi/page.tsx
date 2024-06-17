import { getDestinations } from "@/services/destination.service";
import DestinationList from "./DestinationList";

import Filter from "./Filter";
import FilterUrutan from "./FilterUrutan";
import Paginate from "./Paginate";
import "./style.css";
import Script from "next/script";
import { Metadata } from "next";
import { Suspense } from "react";
import DestinationLoading from "./DestinationLoading";

export const metadata: Metadata = {
  title: "Open Trip - Destinasi",
  description: "open trip",
};

export default async function Destinasi() {
  return (
    <main>
      <section className="pt-[calc(72px+70px)]">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-[10px] border-b mb-[52px] border-[#e3e3e3] items-center relative before:absolute before:content-[''] before:block before:w-[100px] before:border-b-8 before:border-dark-pink before:bottom-0 before:left-0">
            <h1 className="text-[35px] font-bold md:mb-4 w-full md:w-fit">
              Semua Tur
            </h1>
            <FilterUrutan />
          </div>
          <div className="flex gap-[60px] z-10 relative">
            <Filter />
            <div className="flex-1">
              <Suspense fallback={<DestinationLoading />}>
                <DestinationList />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <Script src="/assets/js/destination.js"></Script>
    </main>
  );
}
