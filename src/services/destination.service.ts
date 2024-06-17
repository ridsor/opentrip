"use server";

import { dataDestinations } from "@/lib/dataDummy";
import { Destination } from "@/types/destination.type";

export const getDestinastionByCategory = async (
  category: string
): Promise<Destination[] | undefined> => {
  let response;

  if (category == "popular") {
    response = dataDestinations.filter((x) => x.isPopular);
  } else {
    response = dataDestinations.filter((x) => x.category === category);
  }

  return response;
};

export const getDestinationById = async (id: number) => {
  const response = dataDestinations.find((destination) => destination.id == id);
  return response;
};

export const getDestinations = async ({
  s,
  p,
  sort,
}: {
  s: string;
  p: string;
  sort: string;
}) => {
  const response = dataDestinations.slice(0, 10);
  return response;
};
