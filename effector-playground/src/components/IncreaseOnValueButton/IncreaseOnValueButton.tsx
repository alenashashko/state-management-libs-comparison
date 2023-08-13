import { increaseOnValue } from '../../store/store';

type Props = {
  value: number;
};

export const IncreaseOnValueButton = ({ value }: Props) => {
  return (
    <button onClick={() => increaseOnValue(value)}>{`+${value}`}</button>
  );
};
