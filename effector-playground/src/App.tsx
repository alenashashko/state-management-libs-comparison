import s from './App.module.css';

import { CounterBody } from './components/CounterBody/CounterBody';
import { DecreaseCountButton } from './components/DecreaseCountButton/DecreaseCountButton';
import { IncreaseCountButton } from './components/IncreaseCountButton/IncreaseCountButton';
import { IncreaseOnValueButton } from './components/IncreaseOnValueButton/IncreaseOnValueButton';
import { SetRandomCountButton } from './components/SetRandomCountButton/SetRandomCountButton';

export const App = () => {
  return (
    <div className={s.wrap}>
      <div className={s.centered}>
        <CounterBody />

        <div className={s.actions}>
          <IncreaseCountButton />
          <DecreaseCountButton />
          <IncreaseOnValueButton value={5} />
        </div>

        <div className={s.actions}>
          <SetRandomCountButton />
        </div>
      </div>
    </div>
  );
};
