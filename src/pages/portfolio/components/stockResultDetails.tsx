import { List } from "antd";
import { Stock } from "../../../interfaces/stockInterface";

export function StockResultDetails(props: { item: Stock }) {
  const { item } = props;
  return (
    <List.Item.Meta
      title={item.name}
      description={`Symbol: ${item.symbol}, Exchange: ${item.exchange}`}
    />
  );
}
