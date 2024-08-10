import { observer } from "mobx-react-lite";
import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

const LowAndHighYear = observer(
  (props: { yearLow?: number; yearHigh?: number }) => {
    const { yearLow, yearHigh } = props;
    return (
      <Row gutter={[16, 24]} className="mt-4">
        <Col span={12}>
          <Text className="text-lg">Year Low: </Text>
          <Text className="text-xl">${yearLow}</Text>
        </Col>
        <Col span={12}>
          <Text className="text-lg">Year High: </Text>
          <Text className="text-xl">${yearHigh}</Text>
        </Col>
      </Row>
    );
  }
);

export default LowAndHighYear;
