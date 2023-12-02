import Image from "next/image";

interface Props {
  gallery: string[];
}

export default function Gallery({ gallery }: Props) {
  return (
    <article>
      <div className="pt-[75px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {gallery.length > 0 ? (
            gallery.map((x, i) => (
              <div key={i} className="bg-dark-grey">
                <Image
                  src={x}
                  width={400}
                  height={400}
                  alt=""
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            ))
          ) : (
            <h1 className="font-medium text-xl py-3">Data tidak ada</h1>
          )}
        </div>
      </div>
    </article>
  );
}
