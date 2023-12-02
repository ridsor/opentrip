interface Props {
  reviews: Review[];
}

interface Review {
  name: string;
  avatar: string;
  usename: string;
  rating: number;
  content: string;
}

import star from "@/app/assets/image/icon/star.svg";
import Image from "next/image";

export default function Review({ reviews }: Props) {
  return (
    <article>
      <div className="pt-[75px]">
        <div className="daftar-ulasan flex flex-col gap-6	">
          {reviews.length > 0 ? (
            reviews.map((review, i) => (
              <div key={i} className="flex gap-3 flex-col">
                <div className="flex gap-3">
                  <Image
                    src={review.avatar}
                    alt=""
                    className="bg-dark-grey w-20 h-20 rounded-full object-center object-cover"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <p className="text-[12px] font-light leading-none mb-3">
                      {review.usename}
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
                        <span>{review.rating / 2}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p>{review.content}</p>
              </div>
            ))
          ) : (
            <h1 className="text-xl font-medium py-3">Data tidak ada</h1>
          )}
        </div>
      </div>
    </article>
  );
}
