import { RowCard } from "../../../common/components/rowCard";

export function MarketCapAndVolume(props: {
  marketCap?: number;
  volume?: number;
}) {
  const { marketCap, volume } = props;
  return (
    <RowCard
      firtLabel="Market Cap: "
      firstValue={`${(marketCap! / 1e9).toFixed(2)} B`}
      secondLabel="Volume: "
      secondValue={volume}
    />
  );
}
