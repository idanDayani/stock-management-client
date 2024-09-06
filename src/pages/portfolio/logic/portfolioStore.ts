import { makeAutoObservable } from "mobx";
import { getPortfolioServer } from "../server/getPortfolioServer";
import { searchStockServer } from "../server/searchStockServer";
import { addStockToPortfolioServer } from "../server/addStockToPortfolioServer";
import { Stock } from "../../../interfaces/stockInterface";
import { deleteStockFromPortfolioServer } from "../server/deleteStockFromPortfolioServer";
import { formatStockRes } from "./formatStockRes";

class PortfolioStore {
  portfolio: Stock[] = [];
  isFetching = false;
  isSearchingStock = false;
  searchStockResults: Stock[] = [];
  errorMessageSearchStock = "";
  successMessageAddStock = "";
  MAX_OF_STOCKS_IN_PORTFOLIO = 10;

  constructor() {
    makeAutoObservable(this);
  }

  async getPortfolio() {
    this.isFetching = true;
    const res = await getPortfolioServer();
    this.portfolio = res;
    this.isFetching = false;
  }

  async searchStock(symbol: string) {
    this.isSearchingStock = true;
    this.errorMessageSearchStock = "";
    try {
      const res = await searchStockServer(symbol);
      if (!res.length) {
        this.errorMessageSearchStock = "No stocks found";
      }
      const formatedRes = formatStockRes(res);
      this.searchStockResults = formatedRes;
    } catch (error) {
      this.errorMessageSearchStock = "Failed to fetch stocks from API";
    } finally {
      this.isSearchingStock = false;
    }
  }

  async addStockToPortfolio(stock: Stock) {
    this.searchStockResults = [];

    if (!this.portfolio) {
      this.portfolio = [stock];
    } else {
      if (this.portfolio.find((s) => s.symbol === stock.symbol)) {
        this.errorMessageSearchStock = "Stock already in portfolio";
        return;
      }

      if (this.portfolio.length >= this.MAX_OF_STOCKS_IN_PORTFOLIO) {
        this.errorMessageSearchStock =
          "You can't have more than 10 stocks in portfolio for this Plan, to upgrade your plan please contact idandayani@gmail.com";
        return;
      }

      this.portfolio = this.portfolio.concat(stock);
    }

    this.successMessageAddStock = "Stock added to portfolio";
    await addStockToPortfolioServer(stock);
  }

  async deleteStockFromPortfolio(symbol: string) {
    this.portfolio = this.portfolio.filter((stock) => stock.symbol !== symbol);
    await deleteStockFromPortfolioServer(symbol);
  }

  resetSearchState() {
    this.searchStockResults = [];
    this.errorMessageSearchStock = "";
    this.successMessageAddStock = "";
  }
}

export const portfolioStore = new PortfolioStore();
