import { portfolioStore } from "../logic/portfolioStore";
import { useCallback, useState } from "react";
import Text from "antd/es/typography/Text";
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
    <div className="flex flex-col mt-10">
      <Text className="text-2xl font-bold">Search for Stocks</Text>
      <Search
        placeholder="Type stock symbol/name"
        enterButton
        onSearch={onSearch}
        onChange={onChange}
        value={symbol}
      />
    </div>
  );
});

export default SearchStocks;
