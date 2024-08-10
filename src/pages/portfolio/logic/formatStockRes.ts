import { Stock } from "../../../interfaces/stockInterface";

export function formatStockRes(res: Stock[]) {
  return res.map((stock: any) => ({
    symbol: stock.symbol,
    name: stock.name,
    currency: stock.currency,
    exchange: stock.exchangeShortName,
  }));
}
