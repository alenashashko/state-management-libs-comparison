import { increaseCounter } from '../../store/store';

export const IncreaseCountButton = () => {
  return (
    <button onClick={() => increaseCounter()}>+</button>
  );
};
