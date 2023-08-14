import { Button } from '@chakra-ui/react';

import { useCounterStore } from '../../store/store';

export const SetRandomCountButton = () => {
  const fetchRandomCounterValue = useCounterStore(state => state.fetchRandomCounterValue);

  return <Button width="100%" onClick={fetchRandomCounterValue}>Load random value</Button>;
};
