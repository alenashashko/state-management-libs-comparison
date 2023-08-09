import { connect, ConnectedProps } from 'react-redux';

import { decreaseCounterValue, increaseCounterValue } from "../../store/actions";

import { ActionType } from "../../store/types";
import { StoreDispatch } from '../../store/store';

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  decreaseCount: () => dispatch(decreaseCounterValue()),
  increaseCount: () => dispatch(increaseCounterValue()),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  action: ActionType;
};

const ChangeCountButtonView = ({action, decreaseCount, increaseCount}: Props) => {
  const getContent = () => {
    return action === ActionType.IncreaseCounter ? "+" : "-";
  };

  return (
    <button onClick={action === ActionType.IncreaseCounter ? increaseCount : decreaseCount}>{getContent()}</button>
  );
}

export const ChangeCountButton = connector(ChangeCountButtonView);
