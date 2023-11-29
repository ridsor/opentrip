export default function Loading() {
  return (
    <article>
      <div className="pt-[75px] animate-pulse">
        <div className="daftar-ulasan flex flex-col gap-6	">
          <div className="flex gap-3 flex-col">
            <div className="flex gap-3">
              <div className="bg-dark-grey w-20 h-20 rounded-full object-center object-cover"></div>
              <div>
                <h3 className="text-xl font-bold max-w-full w-[150px] h-7 mb-1 bg-dark-grey rounded-lg"></h3>
                <p className="text-[12px] font-light leading-none mb-3 w-full h-3 bg-dark-grey max-w-[60px] rounded-lg"></p>
                <div className="flex items-center">
                  <div className="rating flex items-center w-9 h-4 bg-dark-grey rounded-lg"></div>
                </div>
              </div>
            </div>
            <p className="w-full h-[150px] rounded-lg bg-dark-grey"></p>
          </div>
          <div className="flex gap-3 flex-col">
            <div className="flex gap-3">
              <div className="bg-dark-grey w-20 h-20 rounded-full object-center object-cover"></div>
              <div>
                <h3 className="text-xl font-bold max-w-full w-[150px] h-7 mb-1 bg-dark-grey rounded-lg"></h3>
                <p className="text-[12px] font-light leading-none mb-3 w-full h-3 bg-dark-grey max-w-[60px] rounded-lg"></p>
                <div className="flex items-center">
                  <div className="rating flex items-center w-9 h-4 bg-dark-grey rounded-lg"></div>
                </div>
              </div>
            </div>
            <p className="w-full h-[150px] rounded-lg bg-dark-grey"></p>
          </div>
        </div>
      </div>
    </article>
  );
}
