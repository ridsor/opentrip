"use client";

import icon_calendar from "@/app/assets/image/icon/akar-icons_calendar.svg";
import icon_location from "@/app/assets/image/icon/akar-icons_location.svg";
import icon_vector from "@/app/assets/image/icon/Vector.svg";
import icon_three_point from "@/app/assets/image/icon/three-point.svg";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Select, { components, SingleValue } from "react-select";
import { getData } from "@/services/destinastion";
import TripDetail from "./TripDetail";
import TermsConditions from "./TermsConditions";
import Gallery from "./Gallery";
import Review from "./Review";

interface Props {
  params: {
    id: number;
  };
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
    rating: number;
    content: string;
  }[];
}

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

export default function DetailDestinasi(props: Props) {
  const [destination, setDestination] = useState<Destination>({
    id: 0,
    name: "",
    image: "",
    province: "",
    price: 0,
    rating: 0,
    package: "",
    description: "",
    travel_theme: "",
    travel_type: "",
    quota: 0,
    terms_conditions: "",
    date_departure: [],
    departure_location: [],
    trip_detail: [],
    gallery: [],
    review: [],
  });

  const [menu, setMenu] = useState<string>("trip_detail");
  const [nav, setNav] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dateDeparture, setDateDepature] = useState<Date>(new Date());
  const [pickupPointOptions, setPickupPointOptions] = useState([]);
  const [selectedPickupPointOption, setSelectedPickupPointOption] =
    useState<SingleValue<{ value: string; label: string }>>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY as string,
  });
  const pathname = usePathname();

  const [centerLocation, setCenterLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [positionLocation, setPositionLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    setIsLoading(true);

    getData(`/destination/${props.params.id}`)
      .then((res) => {
        setIsLoading(false);
        setDestination(res);

        const pickupPoint = res.departure_location.map(
          (x: { name: string }) => ({
            value: x.name,
            label: x.name,
          })
        );
        setPickupPointOptions(pickupPoint);

        const location = res.departure_location.map(
          (x: { location: string[] }) => ({
            lat: Number(x.location[0]),
            lng: Number(x.location[1]),
          })
        );
        setCenterLocation(location[0]);
        setPositionLocation(location[0]);
        setDateDepature(new Date(res.date_departure[0]));
      })
      .then();
  }, []);

  return (
    <main>
      <section className="pt-[72px]">
        <div className="container xl:p-0 max-w-[1536px]">
          <div className="flex">
            <div className="flex-1 bg-dark-grey hidden xl:block">
              <Image
                src={destination.image}
                alt=""
                width={600}
                height={980}
                className="w-full max-w-[600px] max-h-[980px] h-full object-center object-cover"
              />
            </div>
            <div className="w-full max-w-[716px] xl:mr-[100px] xl:ml-10 mx-auto">
              <div className="pt-[60px]">
                <div className="text-dark-pink border-b border-[#e0e0e0] pb-5 mb-10">
                  Destinasi <span className="text-[#a9a9a9]">/</span>{" "}
                  <span>{destination.province}</span>
                </div>
                <h1 className="text-3xl md:text-[45px] font-bold mb-[15px]">
                  {destination.name}
                </h1>
                <p className="mb-10 text-base text-[#9f9f9f">
                  {destination.description}
                </p>
                <div className="bg-[#f1f1f1] text-lg flex-wrap py-3 flex justify-center gap-2 md:justify-between items-center px-[15px] mb-[30px]">
                  <span>
                    {Intl.DateTimeFormat("en-GB", {
                      dateStyle: "full",
                    }).format(dateDeparture)}
                  </span>
                  <button className="flex text-dark-pink items-center gap-[6px] font-bold leading-none">
                    <Image src={icon_calendar} alt="" />
                    <span>Lihat Tanggal Lain</span>
                  </button>
                </div>
                <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
                  <div className="flex leading-none items-center">
                    <Image src={icon_location} alt="" />
                    <span className="ml-[5px] text-base font-medium">
                      Titik Penjemputan
                    </span>
                  </div>
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
                </div>
                <div
                  className={`${
                    !isLoaded && "animate-pulse"
                  } w-full bg-dark-grey h-[330px] mb-[50px]`}
                >
                  {!isLoaded ? (
                    <h1>Loading...</h1>
                  ) : (
                    <GoogleMap
                      mapContainerClassName="h-[330px]"
                      center={centerLocation}
                      zoom={17}
                    >
                      <Marker position={positionLocation} />
                    </GoogleMap>
                  )}
                </div>
                <div className="flex justify-between flex-wrap gap-1 mb-[10px]">
                  <p className="font-medium text-lg">
                    Harga Berdasarkan jumlah orang
                  </p>
                  <p className="price text-[12px] text-medium md:mt-3">
                    <span className="text-dark-pink font-bold mr-1 text-lg">
                      Rp.{" "}
                      {destination.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
                    </span>{" "}
                    / Orang
                  </p>
                </div>
                <div className="kuota bg-[#e2e2e2] h-5 w-full rounded-full mb-[10px]">
                  <div className="h-full w-[calc(100%*3/10)] bg-dark-pink rounded-full"></div>
                </div>
                <p className="text-base mb-[22px] font-medium">
                  <span className="value_kuota">{destination.quota}</span> dari{" "}
                  <span className="max_kuota">10</span> kuota sudah terisi
                </p>
                <div className="flex gap-[10px] flex-wrap justify-center md:justify-normal">
                  <div className="flex h-[60px] items-center justify-between w-[160px] border border-[#d9d9d9]">
                    <button className="px-[10px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="akar-icons:circle-minus">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M16 12H8"
                              stroke="#C2C2C2"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              id="Vector_2"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#C2C2C2"
                              strokeWidth="2"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-full text-[22px] font-medium text-center outline-none"
                    />
                    <button className="px-[10px]">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="akar-icons:circle-plus">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M12.4854 12H8.48535M12.4854 8V12V8ZM12.4854 12V16V12ZM12.4854 12H16.4854H12.4854Z"
                              stroke="#FF385C"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              id="Vector_2"
                              d="M12.4854 22C18.0082 22 22.4854 17.5228 22.4854 12C22.4854 6.47715 18.0082 2 12.4854 2C6.9625 2 2.48535 6.47715 2.48535 12C2.48535 17.5228 6.9625 22 12.4854 22Z"
                              stroke="#FF385C"
                              strokeWidth="2"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <button className="h-[60px] font-medium text-base text-white bg-dark-pink px-[15px]">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[125px]">
        <div className="container">
          <div className="border-b border-[#e0e0e0] relative">
            <button
              className="p-2 mb-4 rounded-full border lg:hidden"
              onClick={() => setNav((prev) => !prev)}
            >
              <Image src={icon_three_point} alt="" width={24} height={24} />
            </button>
            <ul
              className={`${
                nav
                  ? "opacity-100 scale-100 translate-x-0 translate-y-0"
                  : "-translate-y-1/2 -translate-x-1/2 scale-0 opacity-0"
              } lg:opacity-100 lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all flex flex-col lg:flex-row mb-4 absolute lg:static top-0 left-[60px] bg-white border gap-2 lg:gap-[50px] lg:border-0 p-3`}
            >
              <li>
                <button
                  onClick={() => setMenu("trip_detail")}
                  className={`${
                    menu === "trip_detail" ? "text-dark-pink" : "text-[#9f9f9f]"
                  } transition text-base lg:text-2xl font-medium`}
                >
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
                  } transition text-base lg:text-2xl font-medium`}
                >
                  Syarat & Ketentuan
                </button>
              </li>
              <li>
                <button
                  onClick={() => setMenu("gallery")}
                  className={`${
                    menu === "gallery" ? "text-dark-pink" : "text-[#9f9f9f]"
                  } transition text-base lg:text-2xl font-medium`}
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => setMenu("review")}
                  className={`${
                    menu === "review" ? "text-dark-pink" : "text-[#9f9f9f]"
                  } transition text-base lg:text-2xl font-medium`}
                >
                  Ulasan
                </button>
              </li>
            </ul>
          </div>
          {menu === "trip_detail" && (
            <TripDetail trip_detail={destination.trip_detail} />
          )}
          {menu === "terms_conditions" && (
            <TermsConditions terms_conditions={destination.terms_conditions} />
          )}
          {menu === "gallery" && <Gallery gallery={destination.gallery} />}
          {menu === "review" && <Review reviews={destination.review} />}
        </div>
      </section>
    </main>
  );
}
