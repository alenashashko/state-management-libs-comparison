import { Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux'

import { RootState } from '../../../app/store';

export const CounterBody = () => {
  const count = useSelector<RootState, number>((state) => state.counter.value);

  return <Input value={count} readOnly={true} />;
};
