import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store';

export const CounterBody = () => {
  const count = useSelector<RootState, number>((state) => state.counter.value);

  return <div>{count}</div>;
}
