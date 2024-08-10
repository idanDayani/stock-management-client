import { httpCallGet } from "../../../common/httpCall/httpCallGet";

export async function searchStockServer(symbol: string) {
  const res = await httpCallGet(`stock/search?symbol=${symbol}`);
  return res;
}
