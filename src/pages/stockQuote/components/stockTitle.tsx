import { observer } from "mobx-react-lite";
import Title from "antd/es/typography/Title";

const StockTitle = observer((props: { name?: string; symbol?: string }) => {
  const { name, symbol } = props;
  return (
    <Title level={2}>
      {name} ({symbol})
    </Title>
  );
});

export default StockTitle;
