import Link from "next/link";
import Image from "next/image";
import brand from "@/app/assets/image/icon/brand.svg";

interface Props {
  pathname: string;
  isSearch: boolean;
  openCloseSearch: () => void;
}

export default function DekstopHeader(props: Props) {
  return (
    <article className="justify-between h-[72px] items-center hidden lg:flex text-dark-grey">
      <div className="left">
        <ul className="flex gap-8">
          <li>
            <Link
              href="/"
              className={`${
                props.pathname === "/" ? "after:w-full" : "after:w-0"
              } font-medium py-0.5 block relative after:block after:absolute after:top-full after:transition-all after:right-1/2 after:translate-x-1/2 after:h-[3px] after:bg-dark-pink`}
            >
              Beranda
            </Link>
          </li>
          <li className="flex gap-5 items-center">
            <Link
              href="/destinasi"
              className={`${
                props.pathname === "/destinasi" ? "after:w-full" : "after:w-0"
              } font-medium py-0.5 block relative after:block after:absolute after:top-full after:transition-all after:right-1/2 after:translate-x-1/2 after:h-[3px] after:bg-dark-pink`}
            >
              Destinasi
            </Link>
            <button
              className="w-[18px] h-[18px]"
              onClick={() => props.openCloseSearch()}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="akar-icons:search">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M15.75 15.75L12.3855 12.3795L15.75 15.75ZM14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18425 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18425 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18425 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18425 14.25 7.875V7.875Z"
                      stroke={`${props.isSearch ? "#FF385C" : "#4A4A4A"}`}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className="center">
        <Image
          src={brand}
          alt="brand"
          width={156}
          height={22}
          priority
          className="w-[156px] h-[22px]"
        />
      </div>
      <div className="right">
        <div className="flex gap-[14px]">
          <Link
            href="/login"
            className="font-bold text-dark-pink px-5 py-2 bg-[#f1e4ff] rounded-md"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="font-bold text-white bg-dark-pink px-5 py-2 rounded-md"
          >
            Sign up
          </Link>
        </div>
      </div>
    </article>
  );
}
