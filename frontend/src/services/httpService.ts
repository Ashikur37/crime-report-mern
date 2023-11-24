type Props = {
  url: string;
  body: object;
};

export async function getRequest({ url }: { url: string }) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(
    import.meta.env.VITE_API_ENDPOINT + url,
    requestOptions
  );

  const data = await res.json();
  return data;
}
export async function postRequest({ body, url }: Props) {
  const requestOptions = {
    method: "POST",
     credentials: 'include' as RequestCredentials,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...body,
    }),
  };
  const res = await fetch(
    import.meta.env.VITE_API_ENDPOINT + url,
    requestOptions
  );

  const data = await res.json();
  return data;
}
