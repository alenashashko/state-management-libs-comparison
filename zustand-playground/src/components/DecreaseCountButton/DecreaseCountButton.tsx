import { Button } from '@chakra-ui/react';

import { useCounterStore } from '../../store/store';

export const DecreaseCountButton = () => {
  const decreaseCounterValue = useCounterStore(state => state.decreaseCounterValue);

  return (
    <Button width="100%" onClick={decreaseCounterValue}>-</Button>
  );
};
