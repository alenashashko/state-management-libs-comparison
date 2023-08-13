import { useSetRecoilState } from 'recoil';

import { counterState } from '../../store/store';
import { fakeRequest } from '../../utils/fakeRequest';

export const SetRandomCountButton = () => {
  const setCount = useSetRecoilState(counterState);

  const onButtonClick = async () => {
    const count = await fakeRequest();
    
    setCount(count);
  };
  
  return <button onClick={onButtonClick}>load random value</button>
};
