export const getData = async (url: string) => {
  const response = await fetch("http://localhost:3000/api" + url)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response;
};

export const postData = async (url: string, input: Object) => {
  const response = await fetch("http://localhost:3000/api" + url,{
    method: "POST",
    body: JSON.stringify(input)
  })
  .then((res) => res.json())
  .catch((err) => console.error(err));

  return response;
};
