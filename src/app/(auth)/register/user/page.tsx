import background_register from "@/app/assets/image/background/8bed1249d9258b39dc6b432626342ddf.png";
import Link from "next/link";

export default function RegisterUser() {
  return (
    <main>
      <section
        className="h-[914px] bg-[rgba(4,4,4,.45)] bg-blend-multiply bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${background_register.src}')` }}
      >
        <div className="container h-full">
          <div className="relative w-full h-full">
            <form method="POST">
              <div className="pb-[52px] pt-[48px] translate-y-[calc(115px+72px)] border-t-[5px] px-[30px] bg-white border-dark-pink max-w-[500px] w-full">
                <h1 className="text-[28px] font-medium mb-10 leading-none tracking-[0.2px]">
                  Register
                </h1>
                <div className="form-input mb-7">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-base text-[#8e8e8e]"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full text-lg font-medium px-4 border border-[#cecece] rounded-md h-[60px]"
                    name="username"
                    id="username"
                  />
                </div>
                <div className="form-input mb-7">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base text-[#8e8e8e]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full text-lg font-medium px-4 border border-[#cecece] rounded-md h-[60px]"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="form-input mb-[45px]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base text-[#8e8e8e]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full text-lg font-medium px-4 border border-[#cecece] rounded-md h-[60px]"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-input">
                  <button
                    type="submit"
                    className="text-[22px] font-bold 	py-4 text-center w-full block text-white bg-dark-pink rounded-md"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
            <div className="absolute text-lg text-white right-0 bottom-9">
              <span>Candi Borobudur, Magelang</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
