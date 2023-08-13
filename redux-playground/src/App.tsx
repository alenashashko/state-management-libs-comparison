import { CounterBody } from './components/CounterBody/CounterBody';
import { DecreaseCountButton } from './components/DecreaseCountButton/DecreaseCountButton';
import { IncreaseCountButton } from './components/IncreaseCountButton/IncreaseCountButton';

export const App = () => {
  return (
    <div>
      <IncreaseCountButton />
      <CounterBody />
      <DecreaseCountButton />
    </div>
  )
}
