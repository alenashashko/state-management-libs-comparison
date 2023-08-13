import { ConnectedProps, connect } from 'react-redux';

import { StoreDispatch } from '../../store/store';
import { increaseCounterValue } from '../../store/actions';

type Props = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  increaseCount: () => dispatch(increaseCounterValue()),
});

const IncreaseCountButtonView = ({ increaseCount } : Props) => {
  return (
    <button onClick={increaseCount}>+</button>
  );
};

const connector = connect(null, mapDispatchToProps);
export const IncreaseCountButton = connector(IncreaseCountButtonView);
