import { useStore } from 'effector-react';

import { $counterStore } from '../../store/store';

export const CounterBody = () => {
  const count = useStore($counterStore);

  return <div>{count}</div>;
};
