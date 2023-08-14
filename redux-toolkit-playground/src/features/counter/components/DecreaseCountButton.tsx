import { Button } from '@chakra-ui/react';

import { useAppDispatch } from '../../../app/store';
import { decrement } from '../counterSlice';

export const DecreaseCountButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button width="100%" onClick={() => dispatch(decrement())}>-</Button>
  );
};
