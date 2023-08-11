import { increaseOnValue } from "../../store/store";

export const IncreaseOnValueButton = () => {
  return (
    <button onClick={() => increaseOnValue(5)}>+5</button>
  );
};