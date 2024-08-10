import { observer } from "mobx-react-lite";
import { RowCard } from "../../../common/components/rowCard";

const LowAndHighYear = observer(
  (props: { yearLow?: number; yearHigh?: number }) => {
    const { yearLow, yearHigh } = props;
    return (
      <RowCard
        firtLabel="Year Low: "
        firstValue={yearLow}
        secondLabel="Year High: "
        secondValue={yearHigh}
      />
    );
  }
);

export default LowAndHighYear;
