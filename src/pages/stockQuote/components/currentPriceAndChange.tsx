import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

export function CurrentPriceAndChange(props: {
  price?: number;
  change?: number;
  changesPercentage?: number;
}) {
  const { price, change, changesPercentage } = props;
  const isPositive = change! >= 0;
  const stockChangeColor = isPositive ? "text-green-500" : "text-red-500";
  return (
    <Row gutter={[16, 24]}>
      <Col span={12}>
        <Text className="text-lg font-semibold">Current Price: </Text>
        <Text className={`text-lg font-semibold ${stockChangeColor}`}>
          ${price}
        </Text>
      </Col>
      <Col span={12}>
        <Text className="text-lg font-semibold">Change: </Text>
        <Text className={`text-lg font-semibold ${stockChangeColor}`}>
          {change} ({changesPercentage}%)
        </Text>
      </Col>
    </Row>
  );
}
