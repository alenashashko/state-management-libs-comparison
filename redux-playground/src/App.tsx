import { ChangeCountButton } from './components/ChangeCountButton/ChangeCountButton';
import { CounterBody } from './components/CounterBody/CounterBody';
import { ActionType } from './store/types';

export function App() {
  return (
    <div>
      <ChangeCountButton action={ActionType.IncreaseCounter} />
      <CounterBody />
      <ChangeCountButton action={ActionType.DecreaseCounter} />
    </div>
  )
}
