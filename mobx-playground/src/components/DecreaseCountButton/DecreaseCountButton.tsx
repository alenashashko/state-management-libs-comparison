import { observer } from 'mobx-react-lite';

import { state } from "../../store/store";

export const DecreaseCountButton = observer(() => {
  return (
    <button onClick={state.decreaseCount}>-</button>
  );
});
