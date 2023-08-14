import { Button } from '@chakra-ui/react';

import { decreaseCounter } from '../../store/store';

export const DecreaseCountButton = () => {
  return (
    <Button width="100%" onClick={() => decreaseCounter()}>-</Button>
  );
};
