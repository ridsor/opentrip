import Image from "next/image";
import icon_brand from "@/app/assets/image/icon/brand.svg";
import icon_menu from "@/app/assets/image/icon/fries-menu.png";

export default function MobileHeader() {
  return (
    <article
      className="flex lg:hidden justify-between h-[72px] items-center"
      id="mobile">
      <div className="left">
        <Image src={icon_brand} alt="brand" width={156.689} height={22} />
      </div>
      <div className="right">
        <nav>
          <button>
            <Image
              src={icon_menu}
              alt=""
              width={40}
              height={40}
              className="[transform:rotateY(180deg)]"
            />
          </button>
        </nav>
      </div>
    </article>
  );
}
