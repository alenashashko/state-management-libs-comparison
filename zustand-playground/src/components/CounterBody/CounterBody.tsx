import { useCounterStore } from '../../store/store';

export const CounterBody = () => {
  const count = useCounterStore(state => state.count);

  return <div>{count}</div>;
};
