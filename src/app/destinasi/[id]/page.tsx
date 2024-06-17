import icon_calendar from "@/app/assets/image/icon/akar-icons_calendar.svg";
import icon_location from "@/app/assets/image/icon/akar-icons_location.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { formatPrice } from "@/lib/utils";
import { getDestinationById } from "@/services/destination.service";
import DestinationMenu from "./DestinationMenu";
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
const SelectPickupPoint = dynamic(() => import("./SelectPickupPoint"), {
  ssr: false,
});

interface Props {
  params: {
    id: number;
  };
}

export default async function DetailDestinasi(props: Props) {
  const destination = await getDestinationById(props.params.id);

  const getProvice = destination?.title.split(",")[1];

  const destination_menu = {
    trip_detail: [
      [
        {
          hour: "20:30",
          description: "Perjalanan menuju destinasi",
        },
        { hour: "21:00", description: "Perjalanan menuju destinasi" },
      ],
    ],
    terms_conditions:
      "Syarat dan ketentuan berlaku untuk semua peserta yang melakukan pemesanan paket wisata di website ini. Dengan melakukan pemesanan, maka peserta dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam syarat dan ketentuan berikut ini. Syarat dan ketentuan ini dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Syarat dan ketentuan ini berlaku untuk semua peserta baik yang melakukan pemesanan secara langsung maupun melalui pihak ketiga (agen). Syarat dan ketentuan ini berlaku untuk semua peserta baik yang melakukan pemesanan secara langsung maupun melalui pihak ketiga (agen).",
    gallery: [
      destination?.imageUrl || "",
      destination?.imageUrl || "",
      destination?.imageUrl || "",
      destination?.imageUrl || "",
      destination?.imageUrl || "",
      destination?.imageUrl || "",
    ],
    reviews: [
      {
        name: "Lorem",
        username: "lorem",
        avatar: "https://via.placeholder.com/1000x1000.png/000000?text=avatar",
        rating: 5,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam hic voluptatibus omnis culpa qui, natus atque soluta nulla, consequatur ipsam ducimus perferendis recusandae incidunt adipisci quam cumque accusamus ipsum iusto quisquam facilis? Rem, non! Asperiores rem quo vero. Expedita dolorum officiis accusantium? Reprehenderit temporibus nemo aperiam alias eos ducimus!",
      },
    ],
  };

  return (
    <main>
      <section className="pt-[72px]">
        <div className="container xl:p-0 max-w-[1536px]">
          <div className="flex">
            <div className="flex-1 bg-dark-grey hidden xl:block">
              <Image
                src={destination?.imageUrl as string}
                alt=""
                width={600}
                height={980}
                className="w-full max-h-[980px] h-full  object-center object-cover"
              />
            </div>
            <div className="w-full max-w-[716px] xl:mr-[100px] xl:ml-10 mx-auto">
              <div className="pt-[60px]">
                <div className="text-dark-pink border-b border-[#e0e0e0] pb-5 mb-10">
                  Destinasi <span className="text-[#a9a9a9]">/</span>{" "}
                  <span>{getProvice}</span>
                </div>
                <h1 className="text-3xl md:text-[45px] font-bold mb-[15px]">
                  {destination?.title}
                </h1>
                <p className="mb-10 text-base text-[#9f9f9f">
                  {destination?.description}
                </p>
                <div className="bg-[#f1f1f1] text-lg flex-wrap py-3 flex justify-center gap-2 md:justify-between items-center px-[15px] mb-[30px]">
                  <span>
                    {Intl.DateTimeFormat("id-ID", {
                      dateStyle: "full",
                    }).format(new Date())}
                  </span>
                  <button className="flex text-dark-pink items-center gap-[6px] font-bold leading-none">
                    <Image src={icon_calendar} alt="" />
                    <span>Lihat Tanggal Lain</span>
                  </button>
                </div>
                <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
                  <div className="flex leading-none items-center">
                    <Image src={icon_location} alt="" />
                    <span className="ml-[5px] text-base font-medium">
                      Titik Penjemputan
                    </span>
                  </div>
                  <SelectPickupPoint />
                </div>
                <div className={`w-full h-[330px] mb-[50px]`}>
                  <Map position={[-3.7045921, 128.1023915]} />
                </div>
                <div className="flex justify-between flex-wrap gap-1 mb-[10px]">
                  <p className="font-medium text-lg">
                    Harga Berdasarkan jumlah orang
                  </p>
                  <p className="price text-[12px] text-medium md:mt-3">
                    <span className="text-dark-pink font-bold mr-1 text-lg">
                      {formatPrice(destination?.price as number)}
                    </span>{" "}
                    / Orang
                  </p>
                </div>
                <div className="kuota bg-[#e2e2e2] h-5 w-full rounded-full mb-[10px]">
                  <div className="h-full w-[calc(100%*3/10)] bg-dark-pink rounded-full"></div>
                </div>
                <p className="text-base mb-[22px] font-medium">
                  <span className="value_kuota">3</span> dari{" "}
                  <span className="max_kuota">10</span> kuota sudah terisi
                </p>
                <div className="flex gap-[10px] flex-wrap justify-center md:justify-normal">
                  <div className="flex h-[60px] items-center justify-between w-[160px] border border-[#d9d9d9]">
                    <button className="px-[10px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="akar-icons:circle-minus">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M16 12H8"
                              stroke="#C2C2C2"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              id="Vector_2"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#C2C2C2"
                              strokeWidth="2"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-full text-[22px] font-medium text-center outline-none"
                    />
                    <button className="px-[10px]">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="akar-icons:circle-plus">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M12.4854 12H8.48535M12.4854 8V12V8ZM12.4854 12V16V12ZM12.4854 12H16.4854H12.4854Z"
                              stroke="#FF385C"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              id="Vector_2"
                              d="M12.4854 22C18.0082 22 22.4854 17.5228 22.4854 12C22.4854 6.47715 18.0082 2 12.4854 2C6.9625 2 2.48535 6.47715 2.48535 12C2.48535 17.5228 6.9625 22 12.4854 22Z"
                              stroke="#FF385C"
                              strokeWidth="2"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <button className="h-[60px] font-medium text-base text-white bg-dark-pink px-[15px]">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DestinationMenu destination={destination_menu} />
    </main>
  );
}
