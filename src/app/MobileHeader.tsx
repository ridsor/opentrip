import Image from "next/image";
import icon_brand from "@/app/assets/image/icon/brand.svg";
import icon_menu from "@/app/assets/image/icon/fries-menu.svg";
import Link from "next/link";

interface Props {
  pathname: string;
  isSearch: boolean;
  isNav: boolean;
  openCloseNav: () => void;
  openCloseSearch: () => void;
}

export default function MobileHeader(props: Props) {
  return (
    <article className="flex lg:hidden justify-between h-[72px] items-center relative">
      <div className="left">
        <Image
          src={icon_brand}
          alt="brand"
          width={156.689}
          height={22}
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="right">
        <div className="flex items-center gap-1">
          <button onClick={() => props.openCloseSearch()}>
            <svg
              width="24"
              height="24"
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
          <button onClick={() => props.openCloseNav()}>
            <Image src={icon_menu} alt="" width={32} height={32} priority />
          </button>
          <div
            className={`${
              props.isNav
                ? "opacity-100 pointer-events-auto scale-100 translate-x-0 translate-y-0"
                : "opacity-0 pointer-events-none scale-0 translate-x-1/2 -translate-y-1/2"
            } absolute w-full max-w-[200px] top-full right-0 z-50 transition duration-200 ease-out`}
          >
            <nav className="w-full bg-white border p-4">
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link
                    href="/"
                    className={`${
                      props.pathname === "/" ? "after:w-3" : "after:w-0"
                    } after:transition-all after:rounded-full text-sm font-medium after:content-[''] after:block after:border-b-4 after:border-dark-pink after:absolute relative after:left-[calc(100%+.4rem)] after:top-1/2 after:-translate-y-1/2`}
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinasi"
                    className={`${
                      props.pathname === "/destinasi"
                        ? "after:w-3"
                        : "after:w-0"
                    } after:transition-all after:rounded-full text-sm font-medium after:content-[''] after:block after:border-b-4 after:border-dark-pink after:absolute relative after:left-[calc(100%+.4rem)] after:top-1/2 after:-translate-y-1/2`}
                  >
                    Destinasti
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    href="/login"
                    className="font-bold w-fit block text-dark-pink px-5 py-2 bg-[#f1e4ff] rounded-md"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="font-bold w-fit block text-white bg-dark-pink px-5 py-2 rounded-md"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
}
