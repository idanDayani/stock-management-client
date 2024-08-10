import axios from "axios";

export async function httpCallDelete(params: {
  url: string;
  body?: object;
  noAwait?: boolean;
}) {
  let { url, body, noAwait } = params;
  url = "http://localhost:3000/" + url;
  if (noAwait) {
    axios.delete(url, {
      data: { ...body },
      withCredentials: true,
    });
    return;
  }

  try {
    const { data } = await axios.delete(url, {
      data: { ...body },
      withCredentials: true,
    });
    return data;
  } catch (e: any) {
    // In case we have to used token for authentication with login in our app
    // if(e?.response?.status === 401){
    //     await logout(true);
    //     navigate(`/login`);
    //     throw new Error("Token expired");
    // }
    // In case we have log monitoring in our app
    // LogFunction({ message: e.message, level: "error", extra: { url } });
    // In case we have Sentry to follow up the errors in our app
    // sendExceptionToSentryAndReThrow({ error: e, extra: { url } })
  }
}
