import { LatestQuote } from "./latestQuoteInterface";

export interface Stock {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  latestQuote?: LatestQuote;
}
