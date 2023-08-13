import { useAppDispatch } from '../../../app/store';

import { increment } from '../counterSlice';

export const IncreaseCountButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(increment())}>+</button>
  );
};
