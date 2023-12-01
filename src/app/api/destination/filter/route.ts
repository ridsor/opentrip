import { NextRequest } from "next/server";

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
  travel_type: string;
  quota: number;
  terms_conditions: string;
  date_departure: string[];
  departure_location: {
    name: string;
    location: string[];
  }[];
  trip_detail: {
    hour: string;
    description: string;
  }[][];
  gallery: string[];
  review: {
    name: string;
    avatar: string;
    usename: string;
    rating: string;
    content: string;
  }[];
}

interface Filter {
  travel_type_open_trip: boolean;
  travel_type_private_trip: boolean;
  travel_theme_popular_destination: boolean;
  travel_theme_vitaminsea_destination: boolean;
  travel_theme_mountain_destination: boolean;
  travel_theme_nature_destination: boolean;
  min_price: number;
  max_price: number;
  departure_location: string;
  destination: string;
  date_departure?: Date;
  rating5: boolean;
  rating34: boolean;
  min_duration: number;
  max_duration: number;
}

interface Sort {
  orderby: string;
  order: string;
}

export async function POST(req: NextRequest) {
  const input: { filter: Filter; sort: Sort } = await req.json();
  let data: Destination[] = [];

  data = await fetch(
    process.env.API_URL +
      `/api/v1/destination?sortby=${input.sort.orderby}&sort=${input.sort.order}&name=${input.filter.destination}&date_departure=${input.filter.date_departure}&departure_location=${input.filter.departure_location}`
  )
    .then((res) => res.json())
    .catch(() => {
      throw Error("Failed to fetch data");
    });

  data = data.filter((x) => {
    return x;
  });
}
