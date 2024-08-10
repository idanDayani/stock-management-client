import { httpCallGet } from "../../../common/httpCall/httpCallGet";

export async function getPriceChangeOverPeriodServer(symbol: string) {
    const res = await httpCallGet(`stock/getPriceChangeOverPeriod?symbol=${symbol}`);
    return res;
}