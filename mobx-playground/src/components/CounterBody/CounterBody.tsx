import { Input } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { state } from '../../store/store';

export const CounterBody = observer(() => {
  return <Input value={state.count} readOnly={true} />;
});
