import { portfolioStore } from "../logic/portfolioStore";
import { useCallback, useState } from "react";
import Title from "antd/es/typography/Title";
import Search from "antd/es/input/Search";
import { observer } from "mobx-react-lite";
import DOMPurify from "dompurify";

const SearchStocks = observer(() => {
  const [symbol, setStockSymbol] = useState<string>("");

  const sanitizeInput = (input: string) => {
    return DOMPurify.sanitize(input);
  };

  const onSearch = useCallback(async (value: string) => {
    const sanitizedValue = sanitizeInput(value);
    portfolioStore.searchStock(sanitizedValue);
  }, []);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    portfolioStore.resetSearchState();
    const sanitizedValue = sanitizeInput(value);
    setStockSymbol(sanitizedValue);
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
