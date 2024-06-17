interface Props {
  trip_detail: {
    hour: string;
    description: string;
  }[][];
}

export default function TripDetail({ trip_detail }: Props) {
  return (
    <article>
      <div className="pt-[75px] flex flex-col gap-[75px]">
        {trip_detail.map((x, i) => (
          <div
            key={i}
            className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
            <div className="bg-dark-pink text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center">
              <span className="text-2xl">Hari</span>
              <span className="text-[40px]">{++i}</span>
            </div>
            <div className="flex gap-5 flex-col font-medium text-lg w-full">
              {x.map((k, j) => (
                <div key={j} className="flex gap-x-6 lg:gap-x-[54px]">
                  <span>{k.hour}</span>
                  <span className="w-full max-w-[735px]">{k.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
