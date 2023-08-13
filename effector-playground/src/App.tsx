import { CounterBody } from "./components/CounterBody/CounterBody";
import { DecreaseCountButton } from "./components/DecreaseCountButton/DecreaseCountButton";
import { IncreaseCountButton } from "./components/IncreaseCountButton/IncreaseCountButton";
import { IncreaseOnValueButton } from "./components/IncreaseOnValueButton/IncreaseOnValueButton";
import { SetRandomCountButton } from "./components/SetRandomCountButton/SetRandomCountButton";

export const App = () => {
  return (
    <div>
      <IncreaseCountButton />
      <IncreaseOnValueButton value={5} />
      <CounterBody />
      <DecreaseCountButton />
      <SetRandomCountButton />
    </div>
  )
};
