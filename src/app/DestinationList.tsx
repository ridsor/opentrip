import Image from "next/image";
import DestinationItem from "./DestinationItem";
import Link from "next/link";
import arrow from "@/app/assets/image/icon/bi_arrow-right.svg";

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
              key={destination.id}
              id={destination.id}
              image={destination.image}
              package={destination.package}
              place_name={destination.name}
              province={destination.province}
              description={destination.description}
              price={destination.price}
              rating={destination.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
