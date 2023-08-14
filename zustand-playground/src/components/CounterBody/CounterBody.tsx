import { Input } from '@chakra-ui/react';

import { useCounterStore } from '../../store/store';

export const CounterBody = () => {
  const count = useCounterStore(state => state.count);

  return <Input value={count} readOnly={true} />;
};
