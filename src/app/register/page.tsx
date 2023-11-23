import background_register from "@/app/assets/image/background/8bed1249d9258b39dc6b432626342ddf.png";
import Link from "next/link";

export default function Register() {
  return (
    <main>
      <section
        className="h-[914px] bg-[rgba(4,4,4,.45)] bg-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: `url('${background_register.src}')` }}
      >
        <div className="container h-full">
          <div className="relative w-full h-full">
            <div className="pb-[92px] pt-[58px] translate-y-[188px] border-t-[5px] px-7 bg-white border-dark-pink max-w-[500px] w-full">
              <h1 className="text-[28px] font-medium mb-[58px] tracking-[0.2px]">
                Choose Registration
              </h1>
              <Link
                href="/register/user"
                className="text-[22px] font-bold 	py-4 text-center w-full block text-white bg-dark-pink rounded-md"
              >
                Register as User
              </Link>
              <div className="text-[#d2d2d2] text-lg text-center relative py-[30px] before:content-[''] before:block before:absolute before:border-b before:border-[#b8b8b8] before:top-1/2 before:-translate-y-1/2 before:-z-10 before:right-0 before:left-0">
                <span className="relative z-10 px-3 bg-white">Or</span>
              </div>
              <Link
                href="/register/hoster"
                className="text-[22px] font-bold 	py-4 text-center w-full block text-white bg-dark-pink rounded-md"
              >
                Register as Hoster
              </Link>
            </div>
            <div className="absolute text-lg text-white right-0 bottom-9">
              <span>Candi Borobudur, Magelang</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
