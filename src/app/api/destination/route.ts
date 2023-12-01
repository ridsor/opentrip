import { NextRequest, NextResponse } from "next/server";

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

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  let data: Destination[] = [];
  const p = searchParams.get("p") || "";
  const l = searchParams.get("l") || "";
  const travel_theme = searchParams.get("travel_theme") || "";
  data = await fetch(
    process.env.API_URL +
      `/api/v1/destination?p=${p}&l=${l}&travel_theme=${travel_theme}`
  )
    .then((res) => res.json())
    .catch(() => {
      throw Error("Failed to fetch data");
    });

  return NextResponse.json({
    status: "success",
    message: "data has been successfully retrieved",
    data,
  });
}
