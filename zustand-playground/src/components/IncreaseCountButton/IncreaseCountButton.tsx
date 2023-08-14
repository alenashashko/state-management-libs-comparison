import { Button } from '@chakra-ui/react';

import { useCounterStore } from '../../store/store';

export const IncreaseCountButton = () => {
  const increaseCounterValue = useCounterStore(state => state.increaseCounterValue);

  return (
    <Button width="100%" onClick={increaseCounterValue}>+</Button>
  );
};
