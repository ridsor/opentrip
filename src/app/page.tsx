import { Metadata } from "next";
import background_hero from "./assets/image/background/asad-photo-maldives.png";
import background_phone1 from "./assets/image/background/background_phone1.png";
import background_phone2 from "./assets/image/background/background_phone2.png";
import "./style.css";
import DestinationList from "./DestinationList";
import Link from "next/link";
import icon_playstore from "@/app/assets/image/icon/Google Play Badge.svg";
import icon_appstore from "@/app/assets/image/icon/App Store Badge.svg";
import Image from "next/image";
import DestinationSearchHome from "@/components/DestinationSearch/DestinationSearchHome";
import { getData } from "@/services/destinastion";

export const metadata: Metadata = {
  title: "Open Trip",
  description: "open trip",
};

interface Destination {
  id: number;
  name: string;
  image: string;
  province: string;
  price: number;
  rating: number;
  package: string;
  description: string;
  travel_theme: string;
}

export default async function Home() {
  const popularDestinations = await getData<Destination[]>(
    "/destination?travel_theme=Destinasi Populer"
  );
  const vitaminSeaDestinations = await getData<Destination[]>(
    "/destination?travel_theme=Destinasi Populer"
  );
  const mountainDestinations = await getData<Destination[]>(
    "/destination?travel_theme=Naik Naik ke Puncak Gunung"
  );
  const natureDestinations = await getData<Destination[]>(
    "/destination?travel_theme=Menyatu Dengan Alam"
  );

  return (
    <main>
      <section
        style={{ backgroundImage: `url(${background_hero.src})` }}
        className="h-[calc(449.369px+72px)] pt-[72px] w-full bg-blend-multiply bg-[#c4c4c4] bg-center bg-cover"
      >
        <div className="container h-full">
          <div className="flex h-full w-full mx-auto max-w-[calc(1440px-(205px+205px))] items-center relative">
            <h1 className="font-bold text-3xl lg:text-[45px] text-white leading-snug">
              NEVER STOP
              <br />
              EXPLORING THE WORLD
            </h1>
            <div className="absolute [box-shadow:0_4px_40px_0_rgba(0,0,0,0.1)] w-full lg:-bottom-[70px] bottom-[-200px] bg-white">
              <DestinationSearchHome />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mt-[323px] lg:mt-[223px]">
            <DestinationList
              name="Destinasi Populer"
              destinations={popularDestinations}
              className="mb-[100px]"
            />
            <DestinationList
              name="Vitamin Sea"
              destinations={vitaminSeaDestinations}
              className="mb-[100px]"
            />
            <DestinationList
              name="Naik Naik ke Puncak Gunung"
              destinations={mountainDestinations}
              className="mb-[100px]"
            />
            <DestinationList
              name="Menyatu Dengan Alam"
              destinations={natureDestinations}
              className="mb-[200px]"
            />
          </div>
        </div>
      </section>
      <section className="bg-dark-pink text-white">
        <div className="container w-full">
          <div className="flex gap-7">
            <div className="w-full h-full max-w-[540px] xl:mr-[138px]">
              <div className="py-[100px]">
                <h2 className="font-extrabold  text-3xl md:text-5xl mb-4">
                  Download App
                </h2>
                <p className="text-lg mb-12 w-full">
                  Download the app to manage your projects, keep track of the
                  progress and complete tasks without procastinating. Stay on
                  track and complete on time!
                </p>
                <h3 className="text-lg font-medium mb-2">Get the App</h3>
                <div className="app flex gap-3">
                  <Link href="/">
                    <Image
                      src={icon_playstore}
                      width={135}
                      height={40}
                      alt=""
                      className="w-[135px] h-[40px]"
                    />
                  </Link>
                  <Link href="/">
                    <Image src={icon_appstore} width={135} height={40} alt="" className="w-[135px] h-[40px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full hidden lg:block">
              <div className="relative h-full overflow-hidden">
                <div className="absolute top-0 left-0">
                  <Image
                    src={background_phone1}
                    alt=""
                    width={232}
                    height={464}
                    priority
                    className="max-w-none w-[232px] h-[464px]"
                  />
                </div>
                <div className="absolute bottom-0 left-[calc(232px+32px)]">
                  <Image
                    src={background_phone2}
                    alt=""
                    width={232}
                    height={464}
                    priority
                    className="w-[232px] h-[464px] max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
