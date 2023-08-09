import { ChangeCountButton } from "./features/counter/components/ChangeCountButton";
import { CounterBody } from "./features/counter/components/CounterBody";
import { ActionType } from "./types";

export function App() {
  return (
    <div>
      <ChangeCountButton action={ActionType.IncreaseCounter} />
      <CounterBody />
      <ChangeCountButton action={ActionType.DecreaseCounter} />
    </div>
  )
}

