import Image from "next/image";
import Link from "next/link";
import chevron_left from "@/app/assets/image/icon/chevron-left.svg";
import chevron_right from "@/app/assets/image/icon/chevron-right.svg";

interface Props {
  paginate: {
    totalPage: number;
    currentPage: number;
    pageSize: number;
  };
}

export default function Paginate({ paginate }: Props) {
  return (
    <div className="paginate flex md:justify-end text-[#878787] font-medium gap-[23px] flex-wrap justify-center">
      <div className="flex gap-5 flex-wrap justify-center">
        <Link
          href={`/destinasi?p=${paginate.currentPage - 1}`}
          className={`${
            paginate.currentPage < 2 ? "pointer-events-none" : ""
          } p-[5px] rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]`}
        >
          <Image src={chevron_left} width={20} height={20} alt="" />
        </Link>
        <div className="flex gap-[6px]">
          {!(paginate.currentPage - 2 < 1) && (
            <Link
              href={`/destinasi?p=${paginate.currentPage - 2}`}
              className={`${
                paginate.currentPage - 2 < 1 ? "pointer-events-none" : ""
              } w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]`}
            >
              {paginate.currentPage - 2}
            </Link>
          )}
          {!(paginate.currentPage - 1 < 1) && (
            <Link
              href={`/destinasi?p=${paginate.currentPage - 1}`}
              className={`${
                paginate.currentPage - 1 < 1 ? "pointer-events-none" : ""
              } w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]`}
            >
              {paginate.currentPage - 1}
            </Link>
          )}
          <Link
            href="/"
            className="bg-dark-pink text-white w-[30px] aspect-square flex items-center justify-center rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]"
          >
            {paginate.currentPage}
          </Link>
          {!(paginate.currentPage + 1 > paginate.totalPage) && (
            <Link
              href={`/destinasi?p=${paginate.currentPage + 1}`}
              className={`${
                paginate.currentPage + 1 > paginate.totalPage
                  ? "pointer-events-none"
                  : ""
              } w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]`}
            >
              {paginate.currentPage + 1}
            </Link>
          )}
          {!(paginate.currentPage + 2 > paginate.totalPage) && (
            <Link
              href={`/destinasi?p=${paginate.currentPage + 2}`}
              className={`${
                paginate.currentPage + 2 > paginate.totalPage
                  ? "pointer-events-none"
                  : ""
              } w-[30px] aspect-square flex items-center justify-center text-sm rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]`}
            >
              {paginate.currentPage + 2}
            </Link>
          )}
        </div>
        <Link
          href={`/destinasi?p=${paginate.currentPage + 1}`}
          className={`${
            paginate.currentPage >= paginate.totalPage
              ? "pointer-events-none"
              : ""
          } p-[5px] rounded-[3px] [box-shadow:0px_0px_8px_0px_rgba(0,0,0,0.10)]`}
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
