import { useDispatch } from 'react-redux';

import { increment } from '../counterSlice';

export const IncreaseCountButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>+</button>
  );
};
