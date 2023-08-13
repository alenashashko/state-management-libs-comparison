import { useRecoilValue } from 'recoil';

import { counterState } from '../../store/store';

export const CounterBody = () => {
  const count = useRecoilValue(counterState);

  return <div>{count}</div>;
};
