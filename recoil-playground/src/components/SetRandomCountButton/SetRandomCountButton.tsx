import { useSetRecoilState } from 'recoil';
import { Button } from '@chakra-ui/react';

import { counterState } from '../../store/store';
import { fakeRequest } from '../../utils/fakeRequest';

export const SetRandomCountButton = () => {
  const setCount = useSetRecoilState(counterState);

  const onButtonClick = async () => {
    const count = await fakeRequest();
    
    setCount(count);
  };
  
  return <Button width="100%" onClick={onButtonClick}>Load random value</Button>;
};
