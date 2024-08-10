import { httpCallGet } from "../../../common/httpCall/httpCallGet";

export async function getPortfolioServer() {
  const res = await httpCallGet(`portfolio/getPortfolio`);
  return res;
}
