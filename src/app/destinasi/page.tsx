import DestinationItem from "../DestinationItem";
import DestinationList from "./DestinationList";
import Filter from "./Filter";
import Paginate from "./Paginate";

export default function Destinasi() {
  return (
    <main>
      <section className="pt-[calc(72px+70px)]">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-[10px] border-b mb-[52px] border-[#e3e3e3] items-center relative before:absolute before:content-[''] before:block before:w-[100px] before:border-b-8 before:border-dark-pink before:bottom-0 before:left-0">
            <h1 className="text-[35px] font-bold md:mb-4 w-full md:w-fit">
              Semua Tur
            </h1>
            <div className="flex gap-[10px] items-center mb-6 md:mb-0">
              <span className="font-semibold text-[10px]">Urutkan</span>
              <select
                name="urutkan"
                className="rounded-[4px]  w-[130px] h-[30px] text-[#a6a6a6] text-[10px] border border-[#d9d9d9] bg-white p-[7px]">
                <option value="" selected>
                  Pilih Urutan
                </option>
              </select>
            </div>
          </div>
          <div className="flex gap-[60px]">
            <div className="w-[255px] hidden lg:block">
              <Filter />
            </div>
            <div className="flex-1">
              <DestinationList destination={[]} />
              <Paginate />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
