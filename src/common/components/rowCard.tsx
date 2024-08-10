import { Col, Row } from "antd";
import Text from "antd/es/typography/Text";

export function RowCard(props: {
  firtLabel?: string;
  firstValue?: number | string;
  secondLabel?: string;
  secondValue?: number;
}) {
  const { firtLabel, firstValue, secondLabel, secondValue } = props;
  return (
    <Row gutter={[16, 24]}>
      <Col span={12}>
        <Text className="text-lg font-semibold">{firtLabel}</Text>
        <Text className="text-lg">{firstValue}</Text>
      </Col>
      <Col span={12}>
        <Text className="text-lg font-semibold">{secondLabel}</Text>
        <Text className="text-lg">{secondValue}</Text>
      </Col>
    </Row>
  );
}
