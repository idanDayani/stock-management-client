import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { portfolioStore } from "./logic/portfolioStore";
import { TitlePortfolio } from "./components/titlePortfolio";
import SearchResult from "./components/searchResult";
import SearchStocks from "./components/searchStocks";
import UserPortfolio from "./components/userPortfolio";

const UserPortfolioPage = observer(() => {
  useEffect(() => {
    portfolioStore.getPortfolio();
  }, []);

  return (
    <div className="p-4 bg-gradient-to-b from-[#FCFAF0] to-[#FDF9EA] min-h-screen">
      <TitlePortfolio />
      <SearchStocks />
      <SearchResult />
      <UserPortfolio />
    </div>
  );
});

export default UserPortfolioPage;
