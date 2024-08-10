import { observer } from "mobx-react-lite";
import { Row, Col, Card } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { StockPriceChangeOverPeriod } from "../../../interfaces/stockPriceChangeOverPeriod";

const PriceChangeOverPeriod = observer(
  (props: { stockPriceChange: StockPriceChangeOverPeriod | null }) => {
    const { stockPriceChange } = props;
    if (!stockPriceChange) {
      return null;
    }

    return (
      <Card className="w-full max-w-lg mx-auto shadow-lg mt-6">
        <Title level={3} className="mb-4">
          Stock Change Over Time
        </Title>
        <Row gutter={[16, 30]}>
          <Col span={12}>
            <Text className="text-base">Change for 1D: </Text>
            <Text
              className={`text-base font-semibold ${
                stockPriceChange!["1D"] >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stockPriceChange!["1D"].toFixed(3)}%
            </Text>
          </Col>
          <Col span={12}>
            <Text className="text-base">Change for 5D: </Text>
            <Text
              className={`text-base font-semibold ${
                stockPriceChange!["5D"] >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stockPriceChange!["5D"].toFixed(3)}%
            </Text>
          </Col>
        </Row>
        <Row gutter={[16, 30]}>
          <Col span={12}>
            <Text className="text-base">Change for 1M: </Text>
            <Text
              className={`text-base font-semibold ${
                stockPriceChange!["1M"] >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stockPriceChange!["1M"].toFixed(3)}%
            </Text>
          </Col>
          <Col span={12}>
            <Text className="text-base">Change for 3M: </Text>
            <Text
              className={`text-base font-semibold ${
                stockPriceChange!["3M"] >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stockPriceChange!["3M"].toFixed(3)}%
            </Text>
          </Col>
        </Row>
        <Row gutter={[16, 30]}>
          <Col span={12}>
            <Text className="text-base">Change for 1Y: </Text>
            <Text
              className={`text-base font-semibold ${
                stockPriceChange!["1Y"] >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stockPriceChange!["1Y"].toFixed(3)}%
            </Text>
          </Col>
          <Col span={12}>
            <Text className="text-base">Change for 3Y: </Text>
            <Text
              className={`text-base font-semibold ${
                stockPriceChange!["3Y"] >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stockPriceChange!["3Y"].toFixed(3)}%
            </Text>
          </Col>
        </Row>
      </Card>
    );
  }
);

export default PriceChangeOverPeriod;
