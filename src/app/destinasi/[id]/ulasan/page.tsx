import star from "@/app/assets/image/icon/star.svg";
import Image from "next/image";

export default function Ulasan() {
  return (
    <article>
      <div className="pt-[75px]">
        <div className="daftar-ulasan flex flex-col gap-6	">
          <div className="flex gap-3 flex-col">
            <div className="flex gap-3">
              <Image
                src=""
                alt=""
                className="bg-dark-grey w-20 h-20 rounded-full object-center object-cover"
                width={80}
                height={80}
              />
              <div>
                <h3 className="text-xl font-bold">Full Name</h3>
                <p className="text-[12px] font-light leading-none mb-3">
                  username
                </p>
                <div className="flex items-center">
                  <div className="rating flex items-center">
                    <Image
                      src={star}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      alt=""
                    />
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, facilis porro? Qui quaerat modi provident in ex
              corporis mollitia libero nemo inventore, repudiandae, atque
              voluptate recusandae? Ullam doloribus praesentium excepturi
              voluptatibus dolor asperiores culpa maiores ex fugit aut nihil,
              beatae accusamus consectetur debitis corrupti totam rem architecto
              tempora adipisci, voluptatum itaque eligendi, dolorem eum
              voluptate? Odio vel iure labore. Nulla quasi deleniti ab magnam!
              Distinctio accusamus itaque doloribus? Itaque molestiae molestias
              maxime vel optio aliquid minus eius facere consequatur eveniet rem
              quo tenetur error, obcaecati labore? Assumenda, sed doloremque?
              Necessitatibus, tempore sit asperiores minus modi facilis porro
              aut ut tenetur.
            </p>
          </div>
          <div className="flex gap-3 flex-col">
            <div className="flex gap-3">
              <Image
                src=""
                alt=""
                className="bg-dark-grey w-20 h-20 rounded-full object-center object-cover"
                width={80}
                height={80}
              />
              <div>
                <h3 className="text-xl font-bold">Full Name</h3>
                <p className="text-[12px] font-light leading-none mb-3">
                  username
                </p>
                <div className="flex items-center">
                  <div className="rating flex items-center">
                    <Image
                      src={star}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      alt=""
                    />
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, facilis porro? Qui quaerat modi provident in ex
              corporis mollitia libero nemo inventore, repudiandae, atque
              voluptate recusandae? Ullam doloribus praesentium excepturi
              voluptatibus dolor asperiores culpa maiores ex fugit aut nihil,
              beatae accusamus consectetur debitis corrupti totam rem architecto
              tempora adipisci, voluptatum itaque eligendi, dolorem eum
              voluptate? Odio vel iure labore. Nulla quasi deleniti ab magnam!
              Distinctio accusamus itaque doloribus? Itaque molestiae molestias
              maxime vel optio aliquid minus eius facere consequatur eveniet rem
              quo tenetur error, obcaecati labore? Assumenda, sed doloremque?
              Necessitatibus, tempore sit asperiores minus modi facilis porro
              aut ut tenetur.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
