import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';

import { counterState } from '../../store/store';

export const IncreaseCountButton = () => {
  const setCount = useSetRecoilState(counterState);

  return (
    <Button width="100%" onClick={() => setCount((count) => count + 1)}>+</Button>
  );
};
