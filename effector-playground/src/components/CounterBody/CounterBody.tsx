import { useStore } from 'effector-react';
import { Input } from '@chakra-ui/react';

import { $counterStore } from '../../store/store';

export const CounterBody = () => {
  const count = useStore($counterStore);

  return <Input value={count} readOnly={true} />;
};
