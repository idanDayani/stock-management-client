import { RowCard } from "../../../common/components/rowCard";

export function EPSAndPERatio(props: { eps?: number; pe?: number }) {
  const { eps, pe } = props;
  return (
    <RowCard
      firtLabel="EPS: "
      firstValue={eps}
      secondLabel="PE Ratio: "
      secondValue={pe}
    />
  );
}
