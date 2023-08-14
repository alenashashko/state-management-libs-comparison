import { Button } from '@chakra-ui/react';

import { fetchRandomCountValue } from '../counterSlice';
import { useAppDispatch } from '../../../app/store';

export const SetRandomCountButton = () => {
  const dispatch = useAppDispatch();

  return <Button width="100%" onClick={() => dispatch(fetchRandomCountValue())}>Load random value</Button>;
};
