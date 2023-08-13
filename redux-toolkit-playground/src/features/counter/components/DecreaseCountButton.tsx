import { useDispatch } from 'react-redux';

import { decrement } from '../counterSlice';

export const DecreaseCountButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(decrement())}>-</button>
  );
};
