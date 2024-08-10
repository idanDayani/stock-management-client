import { RowCard } from "../../../common/components/rowCard";

export function LowAndHighYear(props: { yearLow?: number; yearHigh?: number }) {
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
