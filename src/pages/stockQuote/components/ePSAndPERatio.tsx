import { observer } from "mobx-react-lite";
import { RowCard } from "../../../common/components/rowCard";

const EPSAndPERatio = observer((props: { eps?: number; pe?: number }) => {
  const { eps, pe } = props;
  return (
    <RowCard
      firtLabel="EPS: "
      firstValue={eps}
      secondLabel="PE Ratio: "
      secondValue={pe}
    />
  );
});

export default EPSAndPERatio;
