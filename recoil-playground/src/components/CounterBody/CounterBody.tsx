import { useRecoilValue } from 'recoil';
import { Input } from '@chakra-ui/react';

import { counterState } from '../../store/store';

export const CounterBody = () => {
  const count = useRecoilValue(counterState);

  return <Input value={count} readOnly={true} />;
};
