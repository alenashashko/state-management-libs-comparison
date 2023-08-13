import { observer } from 'mobx-react-lite';

import { state } from '../../store/store';

export const CounterBody = observer(() => {
  return <div>{state.count}</div>;
});
