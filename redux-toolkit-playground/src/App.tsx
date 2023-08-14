import s from './App.module.css';

import { CounterBody } from './features/counter/components/CounterBody';
import { DecreaseCountButton } from './features/counter/components/DecreaseCountButton';
import { IncreaseCountButton } from './features/counter/components/IncreaseCountButton';
import { SetRandomCountButton } from './features/counter/components/SetRandomCountButton';

export const App = () => {
  return (
    <div className={s.wrap}>
      <div className={s.centered}>
        <CounterBody />

        <div className={s.actions}>
          <IncreaseCountButton />
          <DecreaseCountButton />
        </div>

        <div className={s.actions}>
          <SetRandomCountButton />
        </div>
      </div>
    </div>
  );
};
