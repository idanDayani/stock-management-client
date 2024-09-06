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
      <Text className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Your Portfolio</Text>
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
