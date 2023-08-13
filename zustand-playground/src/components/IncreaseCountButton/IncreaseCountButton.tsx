import { useCounterStore } from '../../store/store';

export const IncreaseCountButton = () => {
  const increaseCounterValue = useCounterStore(state => state.increaseCounterValue);

  return (
    <button onClick={increaseCounterValue}>+</button>
  );
};
