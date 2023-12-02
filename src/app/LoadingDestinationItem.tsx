export default function LoadingDestinationItem() {
  return (
    <div className="destionation-item flex flex-col w-full max-w-[295px] [box-shadow:_0px_10px_60px_0px_rgba(46,46,46,0.15)]">
      <div className="w-[295px] h-[295px] bg-dark-grey rounded-lg relative"></div>
      <div className="content py-6 px-5 flex-1 grid">
        <div>
          <div className="title font-bold text-[22px] mb-4 block w-full bg-dark-grey rounded-lg h-[27px]"></div>
          <div className="description text-sm font-medium mb-5 h-[34px] w-full bg-dark-grey rounded-lg"></div>
          <div className="flex justify-between mb-5">
            <div className="price flex items-center gap-1 bg-dark-grey w-[150px] h-[22px] rounded-lg"></div>
            <div className="rating flex items-center gap-[2px] bg-dark-grey rounded-lg w-[40px] h-[20px]"></div>
          </div>
        </div>
        <div className="order self-end">
          <div className="text-base font-semibold text-white bg-dark-grey h-[50px] w-full rounded-md text-center block"></div>
        </div>
      </div>
    </div>
  );
}
