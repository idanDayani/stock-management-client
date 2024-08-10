import axios from "axios";

export async function httpCallGet(url: string) {
  url = "http://localhost:3000/" + url;

  try {
    const { data } = await axios.get(url, { withCredentials: true });
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
