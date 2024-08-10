import { observer } from "mobx-react-lite";
import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

const LowAndHighDay = observer(
  (props: { dayLow?: number; dayHigh?: number }) => {
    const { dayLow, dayHigh } = props;
    return (
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <Text className="text-lg">Day Low: </Text>
          <Text className="text-xl">${dayLow}</Text>
        </Col>
        <Col span={12}>
          <Text className="text-lg">Day High: </Text>
          <Text className="text-xl">${dayHigh}</Text>
        </Col>
      </Row>
    );
  }
);

export default LowAndHighDay;
