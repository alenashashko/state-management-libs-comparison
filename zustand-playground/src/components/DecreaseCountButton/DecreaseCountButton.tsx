import { useCounterStore } from '../../store/store';

export const DecreaseCountButton = () => {
  const decreaseCounterValue = useCounterStore(state => state.decreaseCounterValue);

  return (
    <button onClick={decreaseCounterValue}>-</button>
  );
};
