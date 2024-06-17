import Image from "next/image";
import star from "@/app/assets/image/icon/star.svg";
import Link from "next/link";
import { Destination } from "@/types/destination.type";
import { formatPrice, getDayNight } from "@/lib/utils";

interface Props {
  destination: Destination;
}

export default function DestinationItem(props: Props) {
  return (
    <div className="destionation-item flex flex-col w-full max-w-[295px]">
      <Link href={`/destinasi/${props.destination.id}`} className="relative">
        <Image
          src={props.destination.imageUrl}
          alt={"Destination Background"}
          width={295}
          height={295}
          className="bg-[#C4C4C4] object-cover object-center w-full aspect-square h-auto"
        />
        <div className="absolute text-base font-semibold text-white px-[15px] py-[5px] bottom-0 right-0 bg-[#1d1d1d]">
          <span>
            {getDayNight(props.destination.day, props.destination.night)}
          </span>
        </div>
      </Link>
      <div className="content py-6 px-5 flex-1 grid">
        <div>
          <Link
            href={`/destinasi/${props.destination.id}`}
            className="title font-bold text-[22px] mb-5 block">
            {props.destination.title}
          </Link>
          <div className="description text-sm font-medium mb-5">
            <span>{props.destination.description}</span>
          </div>
          <div className="flex justify-between mb-5">
            <div className="price flex items-center gap-1">
              <span className="text-lg font-bold text-dark-pink">
                {formatPrice(props.destination.price)}
              </span>
              <span className="text-[12px] font-medium"> / Orang</span>
            </div>
            <div className="rating flex items-center gap-[2px]">
              <Image
                src={star}
                alt="star"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-[12px] font-bold">
                {" "}
                {props.destination.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="order self-end">
          <Link
            href="/"
            className="text-base font-semibold text-white bg-dark-pink py-[15.5px] text-center block">
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
