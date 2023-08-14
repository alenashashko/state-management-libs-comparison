import { Button } from '@chakra-ui/react';

import { increaseCounter } from '../../store/store';

export const IncreaseCountButton = () => {
  return (
    <Button width="100%" onClick={() => increaseCounter()}>+</Button>
  );
};
