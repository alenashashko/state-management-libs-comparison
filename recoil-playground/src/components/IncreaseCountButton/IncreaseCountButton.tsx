import { useSetRecoilState } from 'recoil';

import { counterState } from "../../store/store";

export const IncreaseCountButton = () => {
  const setCount = useSetRecoilState(counterState);

  return (
    <button onClick={() => setCount((count) => count + 1)}>+</button>
  );
};

// обновится ли компонент если обновится count?