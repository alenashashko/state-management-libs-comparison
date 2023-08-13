import { fetchRandomCountValue } from '../counterSlice';
import { useAppDispatch } from '../../../app/store';

export const SetRandomCountButton = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(fetchRandomCountValue())}>load random value</button>
};
