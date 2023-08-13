import { CounterBody } from "./components/CounterBody/CounterBody";
import { DecreaseCountButton } from "./components/DecreaseCountButton/DecreaseCountButton";
import { IncreaseCountButton } from "./components/IncreaseCountButton/IncreaseCountButton";
import { IncreaseOnValueButton } from "./components/IncreaseOnValueButton/IncreaseOnValueButton";

export const App = () => {
  return (
    <div>
      <IncreaseCountButton />
      <IncreaseOnValueButton value={5} />
      <CounterBody />
      <DecreaseCountButton />
    </div>
  )
};
