import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

export function EarningsAnnouncementRow(props: {
  earningsAnnouncement?: Date;
}) {
  return (
    <Row gutter={[16, 24]} className="mt-4">
      <Col span={24}>
        <Text className="text-lg font-semibold">Earnings Announcement: </Text>
        <Text className="text-lg">
          {new Date(props.earningsAnnouncement!).toLocaleDateString()}
        </Text>
      </Col>
    </Row>
  );
}
