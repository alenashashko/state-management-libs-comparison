import { useRecoilState } from 'recoil';
import { Button } from '@chakra-ui/react';

import { counterState } from '../../store/store';

export const DecreaseCountButton = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <Button width="100%" onClick={() => setCount(count - 1)}>-</Button>
  );
};
