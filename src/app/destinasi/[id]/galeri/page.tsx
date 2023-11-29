interface Props {
  params: {
    id: number;
  };
}
export default function DetailDestination(props: Props) {
  return (
    <article>
      <div className="pt-[75px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="bg-dark-grey h-[300px]"></div>
          <div className="bg-dark-grey h-[300px]"></div>
          <div className="bg-dark-grey h-[300px]"></div>
          <div className="bg-dark-grey h-[300px]"></div>
        </div>
      </div>
    </article>
  );
}
