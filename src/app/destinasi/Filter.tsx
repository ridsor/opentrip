import icon_filter from "@/app/assets/image/icon/fluent_filter.svg";
import chevron_up from "@/app/assets/image/icon/chevron-up.svg";
import star from "@/app/assets/image/icon/star.svg";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";

interface Props {
  filters: {
    tanggal_keberangkatan: Date | null;
  };
  onChangeFilter: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onChangeDate: (date: Date) => void;
}

export default function Filter(props: Props) {
  return (
    <div className="filters bg-white rounded-md">
      <div className="gap-[5px] items-center mb-[30px] hidden lg:flex">
        <Image src={icon_filter} alt="" width={16} height={16} />
        <h3 className="font-semibold text-lg tracking-[0.2px] text-dark-pink">
          Filter
        </h3>
      </div>
      <div className="rounded-md [box-shadow:0px_8px_20px_0px_rgba(48,48,48,0.07)] ">
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[18px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm text-[#4d4d4d]">
              Tipe Perjalanan
            </h4>
            <button className="filter rounded-full bg-[#f5f5f5]">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden transition-all ease-in">
            <div className="flex gap-[15px] p-[15px] flex-col">
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="open_trip" />{" "}
                <label
                  htmlFor="open_trip"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3"
                >
                  Open Trip
                </label>
              </div>
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="private_trip" />{" "}
                <label
                  htmlFor="private_trip"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3"
                >
                  Private Trip
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm text-[#4d4d4d]">
              Tema Perjalanan
            </h4>
            <button className="filter rounded-full bg-[#f5f5f5]">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden transition-all ease-in">
            <div className=" flex gap-[15px] p-[15px] flex-col">
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="destinasi_populer" />{" "}
                <label
                  htmlFor="destinasi_populer"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3"
                >
                  Destinasi Populer
                </label>
              </div>
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="vitamin_sea" />{" "}
                <label
                  htmlFor="vitamin_sea"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3"
                >
                  Vitamin Sea
                </label>
              </div>
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="naik_naik_ke_puncak_gunung" />{" "}
                <label
                  htmlFor="naik_naik_ke_puncak_gunung"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3"
                >
                  Naik Naik ke Puncak Gunung
                </label>
              </div>
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="menyatu_dengan_alam" />{" "}
                <label
                  htmlFor="menyatu_dengan_alam"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3"
                >
                  Menyatu Dengan Alam
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm text-[#4d4d4d]">
              Budget
            </h4>
            <button className="rounded-full bg-[#f5f5f5] filter">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden transition-all ease-in">
            <div className="flex gap-[10px] p-[15px] flex-col">
              <div className="flex items-center border-[#e4e4e4] h-[32px] rounded-md border overflow-hidden">
                <label
                  htmlFor="budget_minimum"
                  className="text-[12px] font-medium  leading-3 bg-[#f3f3f3] pr-[8px] pl-[9px] h-full flex items-center text-[#4d4d4d]"
                >
                  Rp
                </label>
                <input
                  type="text"
                  id="budget_minimum"
                  className="w-full placeholder:text-[#bcbcbc] h-full px-[10px] tracking-[0.2px] placeholder:tracking-[0.2px] outline-none"
                  placeholder="Budget minimum"
                />
              </div>
              <div className="flex items-center border-[#e4e4e4] h-[32px] rounded-md border overflow-hidden">
                <label
                  htmlFor="budget_maksimum"
                  className="text-[12px] font-medium  leading-3 bg-[#f3f3f3] pr-[8px] pl-[9px] h-full flex items-center text-[#4d4d4d]"
                >
                  Rp
                </label>
                <input
                  type="text"
                  id="budget_maksimum"
                  className="w-full placeholder:text-[#bcbcbc] h-full px-[10px] tracking-[0.2px] placeholder:tracking-[0.2px] outline-none"
                  placeholder="Budget maksimum"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm">
              Lokasi Keberangkatan
            </h4>
            <button className="rounded-full bg-[#f5f5f5] filter">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden transition-all ease-in">
            <div className="flex gap-[10px] p-[15px] flex-col">
              <div className="flex items-center border-[#e4e4e4] h-[32px] rounded-md border overflow-hidden">
                <label
                  htmlFor="lokasi_keberangkatan"
                  className="text-[12px] font-medium  leading-3 bg-[#f3f3f3] pr-[8px] pl-[9px] h-full flex items-center text-[#4d4d4d]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_126_162)">
                      <path
                        d="M12.4896 12.7475L9.87275 10.126L12.4896 12.7475ZM11.3229 6.62255C11.3229 7.93758 10.8005 9.19875 9.87066 10.1286C8.94079 11.0585 7.67962 11.5809 6.36458 11.5809C5.04955 11.5809 3.78838 11.0585 2.85851 10.1286C1.92864 9.19875 1.40625 7.93758 1.40625 6.62255C1.40625 5.30752 1.92864 4.04635 2.85851 3.11648C3.78838 2.18661 5.04955 1.66422 6.36458 1.66422C7.67962 1.66422 8.94079 2.18661 9.87066 3.11648C10.8005 4.04635 11.3229 5.30752 11.3229 6.62255V6.62255Z"
                        stroke="#C0C0C0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_126_162">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.239746 0.497559)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
                <input
                  type="text"
                  id="lokasi_keberangkatan"
                  className="w-full placeholder:text-[#bcbcbc] h-full px-[10px] tracking-[0.2px] placeholder:tracking-[0.2px] outline-none"
                  placeholder="Cari lokasi keberangkatan"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm">Destinasi</h4>
            <button className="rounded-full bg-[#f5f5f5] filter">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden transition-all ease-in">
            <div className="flex gap-[10px] p-[15px] flex-col">
              <div className="flex items-center border-[#e4e4e4] h-[32px] rounded-md border overflow-hidden">
                <label
                  htmlFor="lokasi_keberangkatan"
                  className="text-[12px] font-medium  leading-3 bg-[#f3f3f3] pr-[8px] pl-[9px] h-full flex items-center text-[#4d4d4d]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_126_162)">
                      <path
                        d="M12.4896 12.7475L9.87275 10.126L12.4896 12.7475ZM11.3229 6.62255C11.3229 7.93758 10.8005 9.19875 9.87066 10.1286C8.94079 11.0585 7.67962 11.5809 6.36458 11.5809C5.04955 11.5809 3.78838 11.0585 2.85851 10.1286C1.92864 9.19875 1.40625 7.93758 1.40625 6.62255C1.40625 5.30752 1.92864 4.04635 2.85851 3.11648C3.78838 2.18661 5.04955 1.66422 6.36458 1.66422C7.67962 1.66422 8.94079 2.18661 9.87066 3.11648C10.8005 4.04635 11.3229 5.30752 11.3229 6.62255V6.62255Z"
                        stroke="#C0C0C0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_126_162">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.239746 0.497559)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
                <input
                  type="text"
                  id="lokasi_keberangkatan"
                  className="w-full placeholder:text-[#bcbcbc] h-full px-[10px] tracking-[0.2px] placeholder:tracking-[0.2px] outline-none"
                  placeholder="Cari destinasi"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm">
              Periode Berangkat
            </h4>
            <button className="rounded-full bg-[#f5f5f5] filter">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden transition-all ease-in">
            <div className="flex gap-[10px] p-[15px] flex-col">
              <div className="flex items-center border-[#e4e4e4] h-[32px] rounded-md border overflow-hidden">
                <label
                  htmlFor="tanggal_keberangkatan"
                  className="text-[12px] font-medium  leading-3 bg-[#f3f3f3] pr-[8px] pl-[9px] h-full flex items-center text-[#4d4d4d]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_126_259)">
                      <path
                        d="M10.7396 2.83093H3.73958C2.45092 2.83093 1.40625 3.8756 1.40625 5.16427V10.9976C1.40625 12.2863 2.45092 13.3309 3.73958 13.3309H10.7396C12.0282 13.3309 13.0729 12.2863 13.0729 10.9976V5.16427C13.0729 3.8756 12.0282 2.83093 10.7396 2.83093Z"
                        stroke="#C0C0C0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.90625 1.66425V3.99758"
                        stroke="#C0C0C0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.57275 1.66425V3.99758"
                        stroke="#C0C0C0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.40625 6.33093H13.0729"
                        stroke="#C0C0C0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_126_259">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.239746 0.497559)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
                <ReactDatePicker
                  selected={props.filters.tanggal_keberangkatan}
                  onChange={(date: Date) => props.onChangeDate(date)}
                  placeholderText="Pilih tanggal keberangkatan"
                  name="tanggal_keberangkatan"
                  id="tanggal_keberangkatan"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm text-[#4d4d4d]">
              Rating
            </h4>
            <button className="rounded-full bg-[#f5f5f5] filter">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden ease-in transition-all">
            <div className=" flex gap-[15px] p-[15px] flex-col">
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="peringkat_5" />{" "}
                <label
                  htmlFor="peringkat_5"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3 flex gap-[5px] items-center text-[#4d4d4d]"
                >
                  <Image
                    src={star}
                    width={12}
                    height={12}
                    alt=""
                    className="w-[12px] h-[12px]"
                  />
                  <span>5 Bintang</span>
                </label>
              </div>
              <div className="flex gap-[11px] items-center">
                <input type="checkbox" id="peringkat_3_4" />{" "}
                <label
                  htmlFor="peringkat_3_4"
                  className="text-[12px] font-medium tracking-[0.2px] leading-3 flex gap-[5px] items-center text-[#4d4d4d]"
                >
                  <Image
                    src={star}
                    width={12}
                    height={12}
                    alt=""
                    className="w-[12px] h-[12px]"
                  />
                  <span>3 - 4 Bintang</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#e4e4e4] px-[15px] pt-[15px] pb-5 flex items-center justify-between">
            <h4 className="font-bold tracking-[0.2px] text-sm">Durasi</h4>
            <button className="rounded-full bg-[#f5f5f5] filter">
              <Image src={chevron_up} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="overflow-hidden ease-in transition-all">
            <div className="px-[15px] pt-[15px] w-full pb-[43px]">
              <div className="flex gap-[10px]">
                <div className="flex items-center border flex-1 border-[#e4e4e4] rounded-md overflow-hidden">
                  <input
                    type="number"
                    id="durasi_minimum"
                    className="outline-none h-[32px] w-full pl-[11px]"
                    defaultValue={1}
                  />
                  <label
                    htmlFor="durasi_minimum"
                    className="text-[12px] font-medium tracking-[0.2px] px-[6px] h-full flex items-center"
                  >
                    Hari
                  </label>
                </div>

                <div className="flex items-center flex-1 border border-[#e4e4e4] rounded-md overflow-hidden">
                  <input
                    type="number"
                    id="durasi_maksimum"
                    className="outline-none h-[32px] w-full pl-[11px]"
                    defaultValue={10}
                  />
                  <label
                    htmlFor="durasi_maksimum"
                    className="text-[12px] font-medium tracking-[0.2px] px-[6px] h-full flex items-center"
                  >
                    Hari
                  </label>
                </div>
              </div>
              <div className="border-dark-pink relative border-b-[5px] mt-[13px] rounded-full before:content-[''] before:block before:w-3 before:h-3 before:border-[3px] before:border-dark-pink before:absolute before:-top-[3.85px] before:left-0 before:rounded-full before:bg-white after:content-[''] after:block after:w-3 after:h-3 after:border-[3px] after:border-dark-pink after:absolute after:-top-[3.85px] after:right-0 after:rounded-full after:bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
