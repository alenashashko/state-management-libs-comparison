import { CounterBody } from './components/CounterBody/CounterBody';
import { DecreaseCountButton } from './components/DecreaseCountButton/DecreaseCountButton';
import { IncreaseCountButton } from './components/IncreaseCountButton/IncreaseCountButton';
import { SetRandomCountButton } from './components/SetRandomCountButton/SetRandomCountButton';

export const App = () => {
  return (
    <div>
      <IncreaseCountButton />
      <CounterBody />
      <DecreaseCountButton />
      <SetRandomCountButton />
    </div>
  )
};
