import { CounterBody } from "./components/CounterBody/CounterBody";
import { DecreaseCountButton } from "./components/DecreaseCountButton/DecreaseCountButton";
import { IncreaseCountButton } from "./components/IncreaseCountButton/IncreaseCountButton";
import { IncreaseOnValueButton } from "./components/IncreaseOnValueButton/increaseOnValueButton";

export function App() {
  return (
    <div>
      <IncreaseCountButton />
      <IncreaseOnValueButton />
      <CounterBody />
      <DecreaseCountButton />
    </div>
  )
}
