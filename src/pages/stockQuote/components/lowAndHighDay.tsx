import { RowCard } from "../../../common/components/rowCard";

export function LowAndHighDay(props: { dayLow?: number; dayHigh?: number }) {
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
