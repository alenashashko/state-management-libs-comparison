import { Button } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { state } from '../../store/store';

export const DecreaseCountButton = observer(() => {
  return (
    <Button width="100%" onClick={state.decreaseCount}>-</Button>
  );
});
