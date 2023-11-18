import Link from "next/link";
import Image from "next/image";
import search from "@/app/assets/image/icon/akar-icons_search.svg";
import brand from "@/app/assets/image/icon/brand.svg";

export default function DekstopHeader() {
  return (
    <article
      className="justify-between h-[72px] items-center hidden lg:flex"
      id="dekstop">
      <div className="left">
        <ul className="flex gap-8">
          <li>
            <Link
              href="/"
              className="font-medium border-b-4 py-0.5 block border-dark-pink">
              Beranda
            </Link>
          </li>
          <li className="flex gap-5 items-center">
            <Link href="/" className="font-medium leading-7 block">
              Destinasi
            </Link>
            <button>
              <Image src={search} alt="" width={18} height={18} />
            </button>
          </li>
        </ul>
      </div>
      <div className="center">
        <Image src={brand} alt="brand" width={156.689} height={22} />
      </div>
      <div className="right">
        <div className="flex gap-[14px]">
          <Link
            href="/login"
            className="font-bold text-dark-pink px-5 py-2 bg-[#f1e4ff] rounded-md">
            Login
          </Link>
          <Link
            href="/signup"
            className="font-bold text-white bg-dark-pink px-5 py-2 rounded-md">
            Sign up
          </Link>
        </div>
      </div>
    </article>
  );
}
