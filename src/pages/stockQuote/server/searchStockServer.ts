import { httpCallGet } from "../../../common/httpCall/httpCallGet";

export async function getLatestQuoteServer(symbol: string) {
    const res = await httpCallGet(`stock/getLatestQuote?symbol=${symbol}`);
    return res;
}