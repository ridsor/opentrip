import DestinationItem from "../DestinationItem";
import { getDestinations } from "@/services/destination.service";
import Paginate from "./Paginate";

export default async function DestinationList() {
  const destinations = await getDestinations({ s: "", p: "", sort: "" });
  const paginate = {
    currentPage: 1,
    totalPage: 120,
  };

  return (
    <>
      <div className="destination-list grid gap-x-[20px] gap-y-[77px] mb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {destinations !== undefined &&
          destinations?.map((destination) => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
      </div>
      <Paginate paginate={paginate} />
    </>
  );
}
