import Image from "next/image";
import Link from "next/link";
import icon_brand from "@/app/assets/image/icon/brand.svg";
import icon_playstore from "@/app/assets/image/icon/Google Play Badge.svg";
import icon_appstore from "@/app/assets/image/icon/App Store Badge.svg";
import icon_socialmedia1 from "@/app/assets/image/icon/Social Icons.svg";
import icon_socialmedia2 from "@/app/assets/image/icon/Social Icons-1.svg";
import icon_socialmedia3 from "@/app/assets/image/icon/Social Icons-2.svg";
import { usePathname } from "next/navigation";

const disableSocialMedia = ["/register", "/register/user"];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-white">
      <div className="container">
        <div className="pt-[100px] pb-[133px] grid gap-[50px] text-[#333] lg:flex md:grid-cols-2">
          <div className="brand md:col-span-2 row-span-1 lg:col-auto lg:row-auto mr-[calc(99px-50px)]">
            <Image
              src={icon_brand}
              alt=""
              width={216}
              height={30}
              priority
              className="w-[216px] h-[30px]"
            />
          </div>
          <div className="company whitespace-nowrap">
            <h3 className="text-xl font-medium mb-8">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className=" text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-base">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="support whitespace-nowrap">
            <h3 className="text-xl font-medium mb-8">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className=" text-base">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base">
                  Terms of services
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="kerja-sama whitespace-nowrap">
            <h3 className="text-xl font-medium mb-8">Kerja Sama</h3>
            <ul className="flex flex-col gap-3 ">
              <li>
                <Link href="/" className="text-base">
                  Daftar Jadi Hoster
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base">
                  Hoster Terdaftar
                </Link>
              </li>
            </ul>
          </div>
          <div className="get-the-app md:col-span-2 md:row-span-4 lg:col-auto lg:row-auto whitespace-nowrap">
            <h3 className="text-xl font-medium mb-2">Get The App</h3>
            <div className="flex gap-6">
              <Link href="/">
                <Image
                  src={icon_playstore}
                  alt="playstore"
                  width={135}
                  height={40}
                  className="w-[135px] h-[40px]"
                />
              </Link>
              <Link href="/">
                <Image
                  src={icon_appstore}
                  alt="appstore"
                  width={135}
                  height={40}
                  className="w-[135px] h-[40px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {!disableSocialMedia.includes(pathname) && (
        <div className="py-6 bg-[#0b0d17] text-white">
          <div className="container flex justify-center md:justify-between flex-wrap gap-6">
            <span>&copy; 2020 OPENTRIP. All rights reserved</span>
            <ul className="social-media flex gap-4">
              <li>
                <Link href="">
                  <Image
                    src={icon_socialmedia1}
                    alt=""
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={icon_socialmedia2}
                    alt=""
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={icon_socialmedia3}
                    alt=""
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}
