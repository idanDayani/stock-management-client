import { makeAutoObservable } from "mobx";
import { Stock } from "../../../interfaces/stockInterface";
import { getLatestQuoteServer } from "../server/searchStockServer";
import { getPriceChangeOverPeriodServer } from "../server/getPriceChangeOverPeriodServer";
import { StockPriceChangeOverPeriod } from "../../../interfaces/stockPriceChangeOverPeriod";

class StockQuoteStore {
  stock: Stock | null = null;
  isFetching = false;
  stockPriceChange: StockPriceChangeOverPeriod | null = null;
  errorMessageGetData = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getLatestQuote(symbol: string) {
    this.isFetching = true;
    try {
      const resQuoate = await getLatestQuoteServer(symbol);
      const resChange = await getPriceChangeOverPeriodServer(symbol);
      this.stock = resQuoate;
      this.stockPriceChange = resChange;
    } catch (error) {
      this.errorMessageGetData = "Failed to fetch stocks";
    } finally {
      this.isFetching = false;
    }
  }
}

export const stockQuoteStore = new StockQuoteStore();
