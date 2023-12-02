import { NextRequest, NextResponse } from "next/server";

interface Destination {
  id: string;
  name: string;
  image: string;
  province: string;
  price: number;
  rating: string;
  package: string;
  description: string;
  travel_theme: string;
  travel_type: string;
  quota: string;
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
  min_price: string;
  max_price: string;
  departure_location: string;
  destination: string;
  date_departure?: Date;
  rating5: boolean;
  rating34: boolean;
  min_duration: string;
  max_duration: string;
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
      `/api/v1/destination?search=${input.filter.destination}`
  )
    .then((res) => res.json())
    .catch(() => {
      throw Error("Failed to fetch data");
    });

  const min_price = Number(input.filter.min_price) || 0;
  const max_price = (Number(input.filter.max_price) || 0)
  const min_duration = (Number(input.filter.min_duration) || 0)
  const max_duration = (Number(input.filter.max_duration) || 0);

  
  data = data.filter((x) => {
    if((min_price) != 0 || (max_price) != 0) {
      if((min_price) > (max_price) && min_price != 0 && max_price != 0) {
        return false;
      } else {
        if((min_price) != 0 && (max_price) != 0) {
          return (Number(x.price) >= (min_price) && Number(x.price) <= (max_price)) && (x.trip_detail.length >= (min_duration) && x.trip_detail.length <= max_duration);
        } else if((min_price) != 0) {
          return Number(x.price) >= (min_price)  && (x.trip_detail.length >= (min_duration) && x.trip_detail.length <= (max_duration));
        } else if(max_price != 0) {
          return (Number(x.price) <= (max_price)) && (x.trip_detail.length >= (min_duration) && x.trip_detail.length <= (max_duration));
        }
      }
    }
    
    return (x.trip_detail.length >= (min_duration) && x.trip_detail.length <= max_duration);
  });
  console.log(data)


  const totalPage = Math.ceil(data.length / 9);
  const pageSize = 9;
  const currentPage = Number(req.nextUrl.searchParams.get("p")) || 1;
  const paginate = (array: Destination[], page: number, limit: number): Destination[] => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return array.slice(start, end)
  }
  
  data = paginate(data, currentPage, pageSize);
  return NextResponse.json({
    status: 'success',
    message: "data has been successfully retrieved",
    data,
    paginate: {
      totalPage,
      pageSize,
      currentPage,
    }
  });
}
