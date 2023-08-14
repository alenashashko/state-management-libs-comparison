import { Button } from '@chakra-ui/react';

import { useAppDispatch } from '../../../app/store';
import { increment } from '../counterSlice';

export const IncreaseCountButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button width="100%" onClick={() => dispatch(increment())}>+</Button>
  );
};
