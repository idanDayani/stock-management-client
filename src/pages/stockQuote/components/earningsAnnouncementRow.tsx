import { observer } from "mobx-react-lite";
import { Row, Col } from "antd";
import Text from "antd/es/typography/Text";

const EarningsAnnouncementRow = observer((props: { earningsAnnouncement?: Date; }) => {
  return (
    <Row gutter={[16, 24]} className="mt-4">
    <Col span={24}>
      <Text className="text-lg">Earnings Announcement: </Text>
      <Text className="text-xl">
        {new Date(props.earningsAnnouncement!).toLocaleDateString()}
      </Text>
    </Col>
  </Row>
  );
});

export default EarningsAnnouncementRow;