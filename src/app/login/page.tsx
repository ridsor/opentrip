import background_login from "@/app/assets/image/background/background-login.png";
import logo from "@/app/assets/image/icon/brand.svg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Trip - Login",
  description: "open trip",
};

export default function Login() {
  return (
    <main>
      <section>
        <div className="container max-w-full p-0">
          <div className="flex flex-wrap lg:flex-nowrap justify-center">
            <div className="hidden lg:block w-full">
              <div
                className="w-full bg-cover bg-center h-[1024px] relative bg-blend-multiply bg-[rgba(4,4,4,.3)]"
                style={{
                  backgroundImage: `url(${background_login.src})`,
                }}>
                <span className="absolute bottom-[30px] left-[100px] font-medium text-lg text-white">
                  Pantai Keliking Bali
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center w-full h-[1024px] lg:h-full justify-center px-3 md:px-5 xl:pl-[72px] xl:pr-[100px] relative">
                <form action="" method="POST">
                  <div className="logo mb-[80.18px]">
                    <Image
                      src={logo}
                      alt="logo"
                      width={222.883}
                      height={31.294}
                      className="mx-auto"
                      priority
                    />
                  </div>
                  <div className="form-input mb-10 w-full lg:w-[457px]">
                    <label
                      htmlFor="username"
                      className="text-[#8E8E8E] text-base mb-[10px] inline-block">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="block h-[60px] px-3 outline-dark-grey w-full  text-xl font-medium border rounded-md border-[#cecece]"
                    />
                  </div>
                  <div className="form-input mb-10 w-full lg:w-[457px]">
                    <label
                      htmlFor="password"
                      className="text-[#8E8E8E] text-base mb-[10px] inline-block">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block h-[60px] px-3 w-full outline-dark-grey text-xl font-medium border rounded-md border-[#cecece]"
                    />
                  </div>
                  <div className="form-input mb-10">
                    <button className="w-full lg:w-[457px] h-[60px] bg-dark-pink rounded-md text-[22px] font-bold text-center text-white">
                      Login
                    </button>
                  </div>
                  <div className="flex justify-between flex-wrap gap-x-6 gap-y-2">
                    <Link
                      href="/"
                      className="text-base text-[#8f8f8f8f] tracking-[0.2px]">
                      Forgot password
                    </Link>
                    <Link
                      href="/register"
                      className="text-base text-[#8f8f8f8f] tracking-[0.2px]">
                      Don&apos;t have an account?{" "}
                      <span className="text-dark-pink">Register Here</span>
                    </Link>
                  </div>
                </form>
                <div className="absolute bottom-[30px] w-full text-center text-sm font-medium text-[#b0b0b0]">
                  &copy; 2020 OPENTRIP. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
