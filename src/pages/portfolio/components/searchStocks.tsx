import { portfolioStore } from "../logic/portfolioStore";
import { useCallback, useState } from "react";
import Title from "antd/es/typography/Title";
import Search from "antd/es/input/Search";
import { observer } from "mobx-react-lite";

const SearchStocks = observer(() => {
  const [symbol, setStockSymbol] = useState<string>("");

  const onSearch = useCallback(async (value: string) => {
    portfolioStore.searchStock(value);
  }, []);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    portfolioStore.resetSearchState();
    setStockSymbol(value);
  }, []);

  return (
    <>
      <Title level={3}>Search for Stocks</Title>
      <Search
        placeholder="Type stock symbol/name"
        enterButton
        onSearch={onSearch}
        onChange={onChange}
        value={symbol}
      />
    </>
  );
});

export default SearchStocks;
