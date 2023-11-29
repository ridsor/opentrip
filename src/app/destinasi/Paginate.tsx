import Image from "next/image";
import Link from "next/link";
import chevron_left from "@/app/assets/image/icon/chevron-left.svg";
import chevron_right from "@/app/assets/image/icon/chevron-right.svg";

export default function Paginate() {
  return (
    <div className="paginate flex md:justify-end text-[#878787] font-medium gap-[23px] flex-wrap justify-center">
      <div className="flex gap-5 flex-wrap justify-center">
        <Link
          href="/"
          className="p-[5px] rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
        >
          <Image src={chevron_left} width={20} height={20} alt="" />
        </Link>
        <div className="flex gap-[6px]">
          <Link
            href="/"
            className="bg-dark-pink text-white w-[30px] aspect-square flex items-center justify-center rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
          >
            1
          </Link>
          <Link
            href="/"
            className="w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
          >
            2
          </Link>
          <Link
            href="/"
            className="w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
          >
            3
          </Link>
          <Link
            href="/"
            className="w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
          >
            4
          </Link>
          <Link
            href="/"
            className="w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
          >
            5
          </Link>
        </div>
        <Link
          href="/"
          className="p-[5px] rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
        >
          <Image src={chevron_right} width={20} height={20} alt="" />
        </Link>
      </div>
      <button className="px-[10px] h-[30px] flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]">
        9 / Page
      </button>
    </div>
  );
}
