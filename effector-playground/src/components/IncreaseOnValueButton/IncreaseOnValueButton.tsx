import { Button } from '@chakra-ui/react';

import { increaseOnValue } from '../../store/store';

type Props = {
  value: number;
};

export const IncreaseOnValueButton = ({ value }: Props) => {
  return (
    <Button width="100%" onClick={() => increaseOnValue(value)}>+{value}</Button>
  );
};
