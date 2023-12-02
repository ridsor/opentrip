export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(process.env.BASE_URL + "/api" + url, {
    next: {
      revalidate: 10,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response.data;
};

export const postData = async <T>(url: string, input: Object): Promise<T> => {
  const response = await fetch(process.env.BASE_URL + "/api" + url, {
    next: {
      revalidate: 10,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response.data;
};
