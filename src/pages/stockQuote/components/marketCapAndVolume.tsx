import { observer } from "mobx-react-lite";
import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

const MarketCapAndVolume = observer(
  (props: { marketCap?: number; volume?: number }) => {
    const { marketCap, volume } = props;
    return (
      <Row gutter={[16, 24]}>
      <Col span={12}>
        <Text className="text-lg">Market Cap: </Text>
        <Text className="text-xl">${(marketCap! / 1e9).toFixed(2)} B</Text>
      </Col>
      <Col span={12}>
        <Text className="text-lg">Volume: </Text>
        <Text className="text-xl">{volume}</Text>
      </Col>
    </Row>
    );
  }
);

export default MarketCapAndVolume;
