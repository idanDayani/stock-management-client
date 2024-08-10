import { makeAutoObservable } from "mobx";
import { Stock } from "../../../interfaces/stockInterface";
import { getLatestQuoteServer } from "../server/searchStockServer";
import { StockPriceChangeOverPeriod } from "../../../interfaces/stockPriceChangeOverPeriod";

class StockQuoteStore {
  stockLatestQuote: Stock | null = null;
  isFetching = false;
  stockPriceChange: StockPriceChangeOverPeriod | null = null;
  errorMessageGetData = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getLatestQuote(symbol: string) {
    this.isFetching = true;
    try {
      const { stockLatestQuote, stockPriceChange} = await getLatestQuoteServer(symbol);
      this.stockLatestQuote = stockLatestQuote;
      this.stockPriceChange = stockPriceChange;
    } catch (error) {
      this.errorMessageGetData = "Failed to fetch stocks";
    } finally {
      this.isFetching = false;
    }
  }
}

export const stockQuoteStore = new StockQuoteStore();
