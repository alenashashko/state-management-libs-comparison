import { useDispatch } from 'react-redux';
import { decrement, increment } from '../counterSlice';

import { ActionType } from "../../../types";

type Props = {
  action: ActionType;
};

export const ChangeCountButton = ({action}: Props) => {
  const dispatch = useDispatch();

  const getContent = () => {
    return action === ActionType.IncreaseCounter ? "+" : "-";
  };

  const onButtonClick = () => {
    if (action === ActionType.IncreaseCounter) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };

  return (
    <button onClick={onButtonClick}>{getContent()}</button>
  );
}
