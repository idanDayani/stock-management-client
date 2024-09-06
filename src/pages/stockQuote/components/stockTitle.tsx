import { observer } from "mobx-react-lite";
import Text from "antd/es/typography/Text";

const StockTitle = observer((props: { name?: string; symbol?: string }) => {
  const { name, symbol } = props;
  return (
    <Text className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-5">
      {name} {symbol}
    </Text>
  );
});

export default StockTitle;
