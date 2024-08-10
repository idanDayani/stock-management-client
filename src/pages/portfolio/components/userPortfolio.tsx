import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { portfolioStore } from "../logic/portfolioStore";
import Title from "antd/es/typography/Title";
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
      <Title level={3}>Your Portfolio</Title>
      <List
        bordered
        dataSource={portfolio}
        renderItem={(item) => (
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
