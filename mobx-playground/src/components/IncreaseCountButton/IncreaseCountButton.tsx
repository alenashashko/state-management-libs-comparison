import { observer } from 'mobx-react-lite';

import { state } from '../../store/store';

export const IncreaseCountButton = observer(() => {
  return (
    <button onClick={state.increaseCount}>+</button>
  );
});
