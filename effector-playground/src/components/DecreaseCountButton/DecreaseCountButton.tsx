import { decreaseCounter } from '../../store/store';

export const DecreaseCountButton = () => {
  return (
    <button onClick={() => decreaseCounter()}>-</button>
  );
};
