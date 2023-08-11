import { useRecoilState } from 'recoil';

import { counterState } from '../../store/store';


export const DecreaseCountButton = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <button onClick={() => setCount(count - 1)}>-</button>
  );
};