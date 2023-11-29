// export default function Loading() {
//   return (
// <article>
//   <div className="pt-[75px] flex flex-col gap-[75px] animate-pulse">
//     <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
//       <div className="bg-dark-grey text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center w-[100px] h-[100px]"></div>
//       <div className="flex gap-5 flex-col font-medium w-full text-lg">
//         <div className="flex gap-x-6 lg:gap-x-[54px] ">
//           <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
//           <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
//         </div>
//         <div className="flex gap-x-6 lg:gap-x-[54px] ">
//           <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
//           <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
//         </div>
//       </div>
//     </div>
//     <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
//       <div className="bg-dark-grey text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center w-[100px] h-[100px]"></div>
//       <div className="flex gap-5 flex-col font-medium w-full text-lg">
//         <div className="flex gap-x-6 lg:gap-x-[54px] ">
//           <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
//           <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
//         </div>
//         <div className="flex gap-x-6 lg:gap-x-[54px] ">
//           <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
//           <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
//         </div>
//         <div className="flex gap-x-6 lg:gap-x-[54px] ">
//           <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
//           <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
//         </div>
//         <div className="flex gap-x-6 lg:gap-x-[54px] ">
//           <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
//           <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </article>
//   );
// }

export default function Loading() {
  return (
    <main>
      <section className="pt-[72px]">
        <div className="container xl:p-0 max-w-[1536px]">
          <div className="flex">
            <div className="flex-1 bg-dark-grey hidden xl:block"></div>
            <div className="w-full max-w-[716px] xl:mr-[100px] xl:ml-10 mx-auto">
              <div className="pt-[60px]">
                <div className="text-dark-pink border-b border-[#e0e0e0] pb-5 mb-10 w-full  max-w-[200px] h-5 rounded-lg bg-dark-grey"></div>
                <h1 className="text-3xl md:text-[45px] font-bold mb-[15px] h-8 w-full max-w-[300px] rounded-lg bg-dark-grey"></h1>
                <p className="mb-10 text-base text-[#9f9f9f h-5  w-full max-w-[450px] rounded-lg bg-dark-grey"></p>
                <div className="bg-dark-grey text-lg flex-wrap rounded-lg flex justify-center gap-2 md:justify-between items-center px-[15px] mb-[30px] h-[60px]"></div>
                <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
                  <div className="flex leading-none items-center w-full max-w-[200px] h-7 rounded-lg bg-dark-grey"></div>
                  <div className="w-full bg-dark-grey rounded-lg h-10 max-w-[250px]"></div>
                </div>
                <div
                  className={`"animate-pulsew-full bg-dark-grey h-[330px] mb-[50px]`}
                ></div>
                <div className="flex justify-between flex-wrap gap-1 mb-[10px]">
                  <p className="font-medium text-lg h-5 w-full max-w-[300px] bg-dark-grey rounded-lg"></p>
                  <p className="price text-[12px] text-medium md:mt-3 h-5 w-full max-w-[200px] bg-dark-grey rounded-lg"></p>
                </div>
                <div className="kuota bg-dark-grey h-5 w-full rounded-full mb-[10px]"></div>
                <p className="text-base mb-[22px] font-medium w-full bg-dark-grey rounded-lg h-5 max-w-[220px]"></p>
                <div className="flex gap-[10px] flex-wrap justify-center md:justify-normal">
                  <div className="flex h-[60px] items-center justify-between w-[160px] bg-dark-grey rounded-lg"></div>
                  <button className="h-[60px] font-medium text-base text-white bg-dark-grey rounded-lg w-[154px]"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[125px]">
        <div className="container">
          <div className="border-b border-[#e0e0e0] relative">
            <button className="mb-4 rounded-full border-[2px] lg:hidden w-[44px] h-[44px] bg-dark-grey"></button>
            <ul
              className={`-translate-y-1/2 -translate-x-1/2 scale-0 opacity-0lg:opacity-100 lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all flex flex-col lg:flex-row mb-4 absolute lg:static top-0 left-[60px] bg-white border gap-2 lg:gap-[50px] lg:border-0 p-3 items-center`}
            >
              <li className="w-full max-w-[250px] h-7 bg-dark-grey rounded-lg"></li>
              <li className="w-full max-w-[250px] h-7 bg-dark-grey rounded-lg"></li>
              <li className="w-full max-w-[150px] h-7 bg-dark-grey rounded-lg"></li>
              <li className="w-full max-w-[150px] h-7 bg-dark-grey rounded-lg"></li>
            </ul>
          </div>
          <article>
            <div className="pt-[75px] flex flex-col gap-[75px] animate-pulse">
              <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
                <div className="bg-dark-grey text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center w-[100px] h-[100px]"></div>
                <div className="flex gap-5 flex-col font-medium w-full text-lg">
                  <div className="flex gap-x-6 lg:gap-x-[54px] ">
                    <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
                    <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
                  </div>
                  <div className="flex gap-x-6 lg:gap-x-[54px] ">
                    <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
                    <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-[88px] gap-y-4 items-start flex-wrap md:flex-nowrap">
                <div className="bg-dark-grey text-white flex flex-col font-medium pt-3 pb-1 px-[26px] text-center w-[100px] h-[100px]"></div>
                <div className="flex gap-5 flex-col font-medium w-full text-lg">
                  <div className="flex gap-x-6 lg:gap-x-[54px] ">
                    <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
                    <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
                  </div>
                  <div className="flex gap-x-6 lg:gap-x-[54px] ">
                    <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
                    <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
                  </div>
                  <div className="flex gap-x-6 lg:gap-x-[54px] ">
                    <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
                    <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
                  </div>
                  <div className="flex gap-x-6 lg:gap-x-[54px] ">
                    <div className="w-[80px] h-5 rounded-lg bg-dark-grey"></div>
                    <div className="w-full max-w-[735px] bg-dark-grey h-5 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
