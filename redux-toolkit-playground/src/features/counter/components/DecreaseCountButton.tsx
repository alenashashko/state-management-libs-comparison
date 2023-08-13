import { useAppDispatch } from '../../../app/store';
import { decrement } from '../counterSlice';

export const DecreaseCountButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(decrement())}>-</button>
  );
};
