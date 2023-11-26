import Image from "next/image";
import star from "@/app/assets/image/icon/star.svg";
import Link from "next/link";

interface Props {
  id: number;
  image: string;
  place_name: string;
  province: string;
  package: string;
  description: string;
  price: number;
  rating: number;
}

export default function DestinationItem(props: Props) {
  return (
    <div className="destionation-item flex flex-col w-full max-w-[295px]">
      <div className="relative">
        <Image
          src={props.image}
          alt={props.place_name}
          width={295}
          height={295}
          className="bg-[#C4C4C4] object-cover object-center w-full aspect-square h-auto"
        />
        <div className="absolute text-base font-semibold text-white px-[15px] py-[5px] bottom-0 right-0 bg-[#1d1d1d]">
          <span>{props.package}</span>
        </div>
      </div>
      <div className="content py-6 px-5 flex-1 grid">
        <div>
          <h3 className="title font-bold text-[22px] mb-5">
            {props.place_name}, {props.province}
          </h3>
          <div className="description text-sm font-medium mb-5">
            <span>{props.description}</span>
          </div>
          <div className="flex justify-between mb-5">
            <div className="price flex items-center gap-1">
              <span className="text-lg font-bold text-dark-pink">
                Rp{" "}
                {props.price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
              </span>
              <span className="text-[12px] font-medium"> / Orang</span>
            </div>
            <div className="rating flex items-center gap-[2px]">
              <Image src={star} alt="star" width={20} height={20} />
              <span className="text-[12px] font-bold"> {props.rating}</span>
            </div>
          </div>
        </div>
        <div className="order self-end">
          <Link
            href="/"
            className="text-base font-semibold text-white bg-dark-pink py-[15.5px] text-center block"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
