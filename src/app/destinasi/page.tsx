"use client";

import Image from "next/image";
import DestinationList from "./DestinationList";
import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import Filter from "./Filter";
import Paginate from "./Paginate";
import { useCallback, useEffect, useState } from "react";
import Select, { components } from "react-select";
import "./style.css";
import Script from "next/script";
import { postData } from "@/services/destinastion";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

interface Destination {
  id: number;
  name: string;
  image: string;
  province: string;
  price: number;
  rating: number;
  package: string;
  description: string;
  travel_theme: string;
}

interface Filter {
  travel_type_open_trip: boolean;
  travel_type_private_trip: boolean;
  travel_theme_popular_destination: boolean;
  travel_theme_vitaminsea_destination: boolean;
  travel_theme_mountain_destination: boolean;
  travel_theme_nature_destination: boolean;
  min_price: string;
  max_price: string;
  departure_location: string;
  date_departure?: Date;
  rating5: boolean;
  rating34: boolean;
  min_duration: string;
  max_duration: string;
}

interface Destination {
  id: number;
  name: string;
  image: string;
  province: string;
  price: number;
  rating: number;
  package: string;
  description: string;
  travel_theme: string;
  travel_type: string;
  quota: number;
  terms_conditions: string;
  date_departure: string[];
  departure_location: {
    name: string;
    location: string[];
  }[];
  trip_detail: {
    hour: string;
    description: string;
  }[][];
  gallery: string[];
  review: {
    name: string;
    avatar: string;
    usename: string;
    rating: string;
    content: string;
  }[];
}

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
          fill="none"
        >
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

interface Paginate {
  totalPage: number;
  currentPage: number;
  pageSize: number;
}

export default function Destinasi() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [delayFilter, setDelayFilter] = useState<NodeJS.Timeout>();
  const [paginate, setPaginate] = useState<Paginate>({
    totalPage: 1,
    currentPage: 1,
    pageSize: 9,
  });
  const [filter, setFilter] = useState<Filter>({
    travel_type_open_trip: false,
    travel_type_private_trip: false,
    travel_theme_popular_destination: false,
    travel_theme_vitaminsea_destination: false,
    travel_theme_mountain_destination: false,
    travel_theme_nature_destination: false,
    min_price: "0",
    max_price: "0",
    departure_location: "",
    rating5: false,
    rating34: false,
    min_duration: "1",
    max_duration: "10",
  });

  const [selectedSortOption, setSelectedSortOption] = useState(null);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  const handleOnChangeFilter = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(delayFilter);

      setDelayFilter(
        setTimeout(() => {
          setFilter((prev) => ({
            ...prev,
            [e.target.name]:
              e.target.type == "checkbox" ? e.target.checked : e.target.value,
          }));
        }, 500)
      );
    },
    []
  );
  const handleChangeDate = useCallback((date: Date) => {
    setFilter((prev) => ({ ...prev, tanggal_keberangkatan: date }));
  }, []);
  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(delayFilter);

      setDelayFilter(
        setTimeout(() => {
          router.push("/destinasi?s=" + e.target.value);
        }, 500)
      );
    },
    [delayFilter]
  );

  useEffect(() => {
    setLoading(true);
    const page = Number(searchParams.get("p")) || 1;
    const search = searchParams.get("s") || "";

    postData(`/destination/filter?s=${search}`, {
      filter,
      sort: selectedSortOption,
    }).then((res) => {
      setDestinations(res.data);
      setPaginate(res.paginate);
      setLoading(false);
    });
  }, [filter, searchParams]);

  return (
    <main>
      <section className="pt-[calc(72px+70px)]">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-[10px] border-b mb-[52px] border-[#e3e3e3] items-center relative before:absolute before:content-[''] before:block before:w-[100px] before:border-b-8 before:border-dark-pink before:bottom-0 before:left-0">
            <h1 className="text-[35px] font-bold md:mb-4 w-full md:w-fit">
              Semua Tur
            </h1>
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
                onClick={() => setIsFilter((prev) => !prev)}
              >
                <Image src={icon_filter} alt="" width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="flex gap-[60px] z-10 relative">
            <div
              className={`${
                isFilter
                  ? "right-[calc(100%-255px)] opacity-100 pointer-events-auto"
                  : "right-full opacity-0 pointer-events-none"
              } lg:opacity-100 top-0 transition-all ease-out w-[255px] lg:pointer-events-auto absolute lg:static z-10 lg:block`}
            >
              <Filter
                filter={filter}
                onChangeFilter={handleOnChangeFilter}
                onChangeDate={handleChangeDate}
                onChangeSearch={handleChangeSearch}
              />
            </div>
            <div className="flex-1">
              {!isLoading ? (
                <>
                  <DestinationList destinations={destinations} />
                  <Paginate paginate={paginate} />
                </>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </section>
      <Script src="/assets/js/destination.js"></Script>
    </main>
  );
}
