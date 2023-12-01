import DestinationItem from "../DestinationItem";

interface Props {
  destination: Destination[];
}

interface Destination {
  id: number;
  image: string;
  place_name: string;
  province: string;
  package: string;
  description: string;
  price: number;
  rating: number;
}

export default function DestinationList(props: Props) {
  return (
    <div className="destination-list grid gap-x-[20px] gap-y-[77px] mb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
      <DestinationItem
        key={1}
        id={1}
        image="https://loremflickr.com/300/300/city"
        package="3D1N"
        place_name="Tanjung Benao"
        province="Bali"
        description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
        price={2000000}
        rating={4.5}
      />
      <DestinationItem
        key={3}
        id={3}
        image="https://loremflickr.com/300/300/city"
        package="3D1N"
        place_name="Tanjung Benao"
        province="Bali"
        description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
        price={2000000}
        rating={4.5}
      />
      <DestinationItem
        key={2}
        id={2}
        image="https://loremflickr.com/300/300/city"
        package="3D1N"
        place_name="Tanjung Benao"
        province="Bali"
        description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
        price={2000000}
        rating={4.5}
      />
      <DestinationItem
        key={4}
        id={4}
        image="https://loremflickr.com/300/300/city"
        package="3D1N"
        place_name="Tanjung Benao"
        province="Bali"
        description="Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku"
        price={2000000}
        rating={4.5}
      />
    </div>
  );
}
