import DestinationItem from "../DestinationItem";

interface Props {
  destinations?: Destination[];
}

interface Destination {
  id: number;
  name: string;
  image: string;
  province: string;
  price: number;
  rating: number;
  package: string;
  description: string;
  travel_theme: string;
}

export default function DestinationList(props: Props) {
  return (
    <div className="destination-list grid gap-x-[20px] gap-y-[77px] mb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
      {props.destinations !== undefined && props.destinations?.map((destination) => (
            <DestinationItem
              key={destination.id}
              id={destination.id}
              image={destination.image}
              package={destination.package}
              place_name={destination.name}
              province={destination.province}
              description={destination.description}
              price={destination.price}
              rating={destination.rating}
            />
          ))}
    </div>
  );
}
