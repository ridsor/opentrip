import Image from "next/image";
import DestinationItem from "./DestinationItem";
import Link from "next/link";
import arrow from "@/app/assets/image/icon/bi_arrow-right.svg";

interface Destination {
  id: number;
  image: string;
  place_name: string;
  province: string;
  package: string;
  description: string;
  price: number;
  rating: number;
}

interface Props {
  destinations: Destination[];
  name: string;
  className: string;
}

export default function DestinationList(props: Props) {
  return (
    <div className={props.className || ""}>
      <div className="flex justify-between items-center mb-10 flex-wrap gap-2">
        <h2 className="text-3xl md:text-[35px] font-bold">{props.name}</h2>
        <Link
          href="/"
          className="font-medium text-lg text-dark-pink flex gap-[10px] items-center"
        >
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
      <div className="destionation-wrapper relative">
        <div className="destionation-list">
          {props.destinations.map((destination) => (
            <DestinationItem
              key={1}
              id={1}
              image="https://loremflickr.com/300/300/city"
              package="3D1N"
              place_name="Tanjung Benao"
              province="Bali"
              description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
              price={2000000}
              rating={4.5}
            />
          ))}
          <DestinationItem
            key={2}
            id={2}
            image="https://loremflickr.com/300/300/city"
            package="3D1N"
            place_name="Tanjung Benao"
            province="Bali"
            description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
            price={2000000}
            rating={4.5}
          />
          <DestinationItem
            key={2}
            id={2}
            image="https://loremflickr.com/300/300/city"
            package="3D1N"
            place_name="Tanjung Benao"
            province="Bali"
            description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
            price={2000000}
            rating={4.5}
          />
          <DestinationItem
            key={2}
            id={2}
            image="https://loremflickr.com/300/300/city"
            package="3D1N"
            place_name="Tanjung Benao"
            province="Bali"
            description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
            price={2000000}
            rating={4.5}
          />
          <DestinationItem
            key={2}
            id={2}
            image="https://loremflickr.com/300/300/city"
            package="3D1N"
            place_name="Tanjung Benao"
            province="Bali"
            description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
            price={2000000}
            rating={4.5}
          />
          <DestinationItem
            key={2}
            id={2}
            image="https://loremflickr.com/300/300/city"
            package="3D1N"
            place_name="Tanjung Benao"
            province="Bali"
            description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
            price={2000000}
            rating={4.5}
          />
          <DestinationItem
            key={2}
            id={2}
            image="https://loremflickr.com/300/300/city"
            package="3D1N"
            place_name="Tanjung Benao"
            province="Bali"
            description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
            price={2000000}
            rating={4.5}
          />
          <DestinationItem
            key={3}
            id={3}
            image="https://loremflickr.com/300/300/city"
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
  );
}
