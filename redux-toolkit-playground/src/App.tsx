import { DecreaseCountButton } from './features/counter/components/DecreaseCountButton';
import { CounterBody } from './features/counter/components/CounterBody';
import { IncreaseCountButton } from './features/counter/components/IncreaseCountButton';
import { SetRandomCountButton } from './features/counter/components/SetRandomCountButton';

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
