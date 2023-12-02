"use server"
export const getData = async (url: string) => {
  const response = await fetch(process.env.API_URL+"/api/v1" + url)
  .then((res) => res.json())
  .catch((err) => console.error(err));

  return response;
};

export const postData = async (url: string, input: Object) => {
  const response = await fetch(process.env.BASE_URL+"/api" + url,{
    method: "POST",
    body: JSON.stringify(input)
  })
  .then((res) => res.json())
  .catch((err) => console.error(err));

  return response;
};
