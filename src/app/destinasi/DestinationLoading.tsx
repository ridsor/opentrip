import LoadingDestinationItem from "../LoadingDestinationItem";

export default function DestinationLoading() {
  return (
    <div className="animate-pulse destination-list grid gap-x-[20px] gap-y-[77px] mb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center ">
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
      <LoadingDestinationItem />
    </div>
  );
}
