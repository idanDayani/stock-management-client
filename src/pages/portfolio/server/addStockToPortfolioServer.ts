import { Stock } from "../../../interfaces/stockInterface";
import { httpCallPost } from "../../../common/httpCall/httpCallPost";

export async function addStockToPortfolioServer(stock: Stock) {
  await httpCallPost({ url: `portfolio/addStock`, body: { stock } });
}
