import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { portfolioStore } from "../logic/portfolioStore";
import Text from "antd/es/typography/Text";
import { Button, List } from "antd";

const UserPortfolio = observer(() => {
  const navigate = useNavigate();
  const { portfolio } = portfolioStore;

  const deleteStockFromPortfolio = (symbol: string) => {
    portfolioStore.deleteStockFromPortfolio(symbol);
  };

  const handleStockClick = (symbol: string) => {
    portfolioStore.resetSearchState();
    navigate(`/stock/${symbol}`);
  };


  return (
    <div className="mt-10">
      <Text className="text-indigo-600 font-bold text-3xl">Your Portfolio</Text>
      <List
        bordered
        dataSource={portfolio}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button onClick={() => deleteStockFromPortfolio(item.symbol)}>
                Remove
              </Button>,
              <Button onClick={() => handleStockClick(item.symbol)}>
                Check latest quote
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`Symbol: ${item.symbol}, Exchange: ${item.exchange}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
});

export default UserPortfolio;
