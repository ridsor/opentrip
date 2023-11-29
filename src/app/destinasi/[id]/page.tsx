import Script from "next/script";

interface Props {
  params: {
    id: number;
  };
}
export default function DetailDestination(props: Props) {
  return (
    <>
      <article>
        <div className="pt-[75px] flex flex-col gap-[75px]">
          <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
            <div className="bg-dark-pink text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center">
              <span className="text-2xl">Hari</span>
              <span className="text-[40px]">1</span>
            </div>
            <div className="flex gap-5 flex-col font-medium text-lg w-full">
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>20.30</span>
                <span className="w-full max-w-[735px]">
                  Berkumpul di meeting point
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>21.00</span>
                <span className="w-full max-w-[735px]">
                  Perjalanan menuju ke Batu
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
            <div className="bg-dark-pink text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center">
              <span className="text-2xl">Hari</span>
              <span className="text-[40px]">2</span>
            </div>
            <div className="flex gap-5 flex-col font-medium text-lg w-full">
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>12.00</span>
                <span className="w-full max-w-[735px]">
                  Makan Siang di Lokal Restorant (Biaya Pribadi) di meeting
                  point
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>13:00</span>
                <span className="w-full max-w-[735px]">
                  Perjalanan menuju homestay
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>13:45</span>
                <span className="w-full max-w-[735px]">
                  Tiba di Homestay untuk beristirahat & Free time (Waktu Bebas)
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>22:00</span>
                <span className="w-full max-w-[735px]">
                  Persiapan perjalanan menuju Bromo
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>22:30</span>
                <span className="w-full max-w-[735px]">
                  Perjalanan menuju bromo untuk melihat sunrise
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap lg:flex-nowrap">
            <div className="bg-dark-pink text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center">
              <span className="text-2xl">Hari</span>
              <span className="text-[40px]">3</span>
            </div>
            <div className="flex gap-5 flex-col font-medium text-lg w-full">
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>03:00</span>
                <span className="w-full max-w-[735px]">
                  Tiba di Cemoro Lawang, transfer Jeep menuju Pananjakan 1 untuk
                  melihat Sunrise di Bromo, dilanjutkan menuju ke Lautan Pasir,
                  menuju ke Pura dan Kawah Bromo (dapat dengan berjalan kaki
                  atau naik kuda dengan biaya pribadi), menuju ke Savana / Bukit
                  Teletubbies dan Pasir Berbisik
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>09:00</span>
                <span className="w-full max-w-[735px]">
                  Perjalanan kembali menuju homestay
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>13:45</span>
                <span className="w-full max-w-[735px]">
                  Tiba di Homestay untuk beristirahat & Free time (Waktu Bebas)
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>22:00</span>
                <span className="w-full max-w-[735px]">
                  Persiapan perjalanan menuju Bromo
                </span>
              </div>
              <div className="flex gap-x-6 lg:gap-x-[54px]">
                <span>22:30</span>
                <span className="w-full max-w-[735px]">
                  Perjalanan menuju bromo untuk melihat sunrise
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Script>window.scrollTo(0, 0);</Script>
    </>
  );
}
