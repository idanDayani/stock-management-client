import { makeAutoObservable } from "mobx";
import { Stock } from "../../../interfaces/stockInterface";
import { getLatestQuoteServer } from "../server/searchStockServer";
import { getPriceChangeOverPeriodServer } from "../server/getPriceChangeOverPeriodServer";
import { StockPriceChangeOverPeriod } from "../../../interfaces/stockPriceChangeOverPeriod";

class StockQuoteStore {
  stock: Stock | null = null;
  isFetchingLastQuote = false;
  isFetchingPriceChangeOverPeriod = false;
  stockPriceChange: StockPriceChangeOverPeriod | null = null;
  errorMessageGetData = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getLatestQuote(symbol: string) {
    this.isFetchingLastQuote = true;
    try {
      const res = await getLatestQuoteServer(symbol);
      this.stock = res;
    } catch (error) {
      this.errorMessageGetData = "Failed to fetch stocks";
    } finally {
      this.isFetchingLastQuote = false;
    }
  }

  async getPriceChangeOverPeriod(symbol: string) {
    this.isFetchingPriceChangeOverPeriod = true;
    try {
      const res = await getPriceChangeOverPeriodServer(symbol);
      this.stockPriceChange = res;
    } catch (error) {
      this.errorMessageGetData = "Failed to fetch stocks";
    } finally {
      this.isFetchingPriceChangeOverPeriod = false;
    }
  }
}

export const stockQuoteStore = new StockQuoteStore();
