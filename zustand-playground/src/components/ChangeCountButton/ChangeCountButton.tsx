import { useCounterStore } from "../../store/store";
import { ActionType } from "../../types";

type Props = {
  action: ActionType;
};

export const ChangeCountButton = ({action}: Props) => {
  const increaseCounterValue = useCounterStore(state => state.increaseCounterValue);
  const decreaseCounterValue = useCounterStore(state => state.decreaseCounterValue);

  const getContent = () => {
    return action === ActionType.IncreaseCounter ? "+" : "-";
  };

  return (
    <button onClick={action === ActionType.IncreaseCounter ? increaseCounterValue : decreaseCounterValue}>{getContent()}</button>
  );
};
