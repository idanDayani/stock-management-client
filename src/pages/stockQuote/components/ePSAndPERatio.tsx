import { observer } from "mobx-react-lite";
import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

const EPSAndPERatio = observer((props: { eps?: number; pe?: number }) => {
  const { eps, pe } = props;
  return (
    <Row gutter={[16, 24]} className="mt-4">
      <Col span={12}>
        <Text className="text-lg">EPS: </Text>
        <Text className="text-xl">${eps}</Text>
      </Col>
      <Col span={12}>
        <Text className="text-lg">PE Ratio: </Text>
        <Text className="text-xl">{pe}</Text>
      </Col>
    </Row>
  );
});

export default EPSAndPERatio;
