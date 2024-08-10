import { httpCallDelete } from "../../../common/httpCall/httpCallDelete";

export async function deleteStockFromPortfolioServer(symbol: string) {
  await httpCallDelete({ url: `portfolio/deleteStock`, body: { symbol } });
}
