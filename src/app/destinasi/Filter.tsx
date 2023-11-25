import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import chevron_down from "@/app/assets/image/icon/chevron-down.svg";
import Image from "next/image";

export default function Filter() {
  return (
    <div className="filter">
      <div className="flex gap-[5px] items-center mb-[30px]">
        <Image src={icon_filter} alt="" width={16} height={16} />
        <h3 className="font-semibold text-lg tracking-[0.2px] text-dark-pink">
          Filter
        </h3>
      </div>
      <div className="rounded-md [box-shadow:0px_8px_20px_0px_rgba(48,48,48,0.07)] ">
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[18px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm">
              Tipe Perjalanan
            </h4>
            <button className="rounded-full bg-[#f5f5f5]">
              <Image src={chevron_down} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="flex gap-[15px] p-[15px] flex-col">
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" id="open_trip" />{" "}
              <label
                htmlFor="open_trip"
                className="text-[12px] font-medium tracking-[0.2px] leading-3">
                Open Trip
              </label>
            </div>
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" id="private_trip" />{" "}
              <label
                htmlFor="private_trip"
                className="text-[12px] font-medium tracking-[0.2px] leading-3">
                Private Trip
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm">
              Tema Perjalanan
            </h4>
            <button className="rounded-full bg-[#f5f5f5]">
              <Image src={chevron_down} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="flex gap-[15px] p-[15px] flex-col">
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" id="destinasi_populer" />{" "}
              <label
                htmlFor="destinasi_populer"
                className="text-[12px] font-medium tracking-[0.2px] leading-3">
                Destinasi Populer
              </label>
            </div>
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" id="vitamin_sea" />{" "}
              <label
                htmlFor="vitamin_sea"
                className="text-[12px] font-medium tracking-[0.2px] leading-3">
                Vitamin Sea
              </label>
            </div>
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" id="naik_naik_ke_puncak_gunung" />{" "}
              <label
                htmlFor="naik_naik_ke_puncak_gunung"
                className="text-[12px] font-medium tracking-[0.2px] leading-3">
                Naik Naik ke Puncak Gunung
              </label>
            </div>
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" id="menyatu_dengan_alam" />{" "}
              <label
                htmlFor="menyatu_dengan_alam"
                className="text-[12px] font-medium tracking-[0.2px] leading-3">
                Menyatu Dengan Alam
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
