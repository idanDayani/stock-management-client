import { observer } from "mobx-react-lite";
import { RowCard } from "../../../common/components/rowCard";

const LowAndHighDay = observer(
  (props: { dayLow?: number; dayHigh?: number }) => {
    const { dayLow, dayHigh } = props;
    return (
      <RowCard
        firtLabel="Day Low: "
        firstValue={dayLow}
        secondLabel="Day High: "
        secondValue={dayHigh}
      />
    );
  }
);

export default LowAndHighDay;
