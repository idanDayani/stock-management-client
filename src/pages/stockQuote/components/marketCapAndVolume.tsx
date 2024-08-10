import { observer } from "mobx-react-lite";
import { RowCard } from "../../../common/components/rowCard";

const MarketCapAndVolume = observer(
  (props: { marketCap?: number; volume?: number }) => {
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
);

export default MarketCapAndVolume;
