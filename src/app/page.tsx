import background_hero from "./assets/image/background/asad-photo-maldives.png";

export default function Home() {
  console.log(background_hero);
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${background_hero.src})` }}
        className="h-[449.369px] w-full bg-blend-multiply bg-[#c4c4c4] bg-cover bg-center"
      >
        <div className="container h-full">
          <div className="flex items-center h-full w-full mx-auto max-w-[calc(1440px-(205px+205px))] relative">
            <h1 className="font-bold text-3xl lg:text-[45px] text-white leading-snug">
              NEVER STOP
              <br />
              EXPLORING THE WORLD
            </h1>
            <div className="absolute [box-shadow:0_4px_40px_0_rgba(0,0,0,0.1)] w-full lg:-bottom-[70px] bottom-[-200px] bg-white">
              <form className="flex items-center h-full w-full flex-col lg:flex-row py-6 px-6 gap-5 lg:gap-0">
                <div className="form-input lg:ml-[calc(50px-24px)] lg:border-r lg:border-[#e3e3e3] lg:pr-6 w-full">
                  <label
                    htmlFor="tujuan"
                    className="block mb-1 text-base font-medium"
                  >
                    Tujuan
                  </label>
                  <input
                    type="text"
                    className="text-[#ccc] text-xl lg:text-[28px] placeholder:text-[#ccc] outline-none w-full lg:w-[calc(198px+140px-24px)]"
                    placeholder="Semua Tujuan"
                    id="tujuan"
                    name="tujuan"
                  />
                </div>
                <div className="lg:ml-[140px] form-input lg:mr-6 w-full">
                  <label
                    htmlFor="jadwal"
                    className="block mb-1 text-base font-medium"
                  >
                    Jadwal
                  </label>
                  <input
                    type="text"
                    className="text-[#ccc] text-xl lg:text-[28px] w-full placeholder:text-[#ccc] outline-none"
                    placeholder="Kapan Saja"
                    id="jadwal"
                    name="jadwal"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-dark-pink text-white py-4 lg:py-6 leading-none px-12 lg:px-20 text-xl"
                >
                  Cari
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mt-[223px]"></div>
        </div>
      </section>
    </main>
  );
}
