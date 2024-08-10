import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Stock } from "../../../interfaces/stockInterface";
import { portfolioStore } from "../logic/portfolioStore";
import { Button, List } from "antd";
import { Spinner } from "../../../common/components/spinner";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { StockResultDetails } from "./stockResultDetails";

const SearchResult = observer(() => {
  const addStockToPortfolio = useCallback((stock: Stock) => {
    portfolioStore.addStockToPortfolio(stock);
  }, []);

  const {
    isSearchingStock,
    searchStockResults,
    errorMessageSearchStock,
    successMessageAddStock,
  } = portfolioStore;

  if (isSearchingStock) return <Spinner />;

  if (successMessageAddStock)
    return <Text className="text-green-500">{successMessageAddStock}</Text>;

  if (errorMessageSearchStock)
    return <Text className="text-red-500">{errorMessageSearchStock}</Text>;

  if (!searchStockResults?.length) return null;

  return (
    <div className="mt-5">
      <Title level={4}>Results:</Title>
      <List
        bordered
        dataSource={searchStockResults}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => addStockToPortfolio(item)}>
                Add to Portfolio
              </Button>,
            ]}
          >
            <StockResultDetails item={item} />
          </List.Item>
        )}
      />
    </div>
  );
});

export default SearchResult;
