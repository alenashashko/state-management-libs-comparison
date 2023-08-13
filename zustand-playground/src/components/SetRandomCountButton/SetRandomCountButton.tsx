import { useCounterStore } from '../../store/store';

export const SetRandomCountButton = () => {
  const fetchRandomCounterValue = useCounterStore(state => state.fetchRandomCounterValue);

  return <button onClick={fetchRandomCounterValue}>load random value</button>
};
