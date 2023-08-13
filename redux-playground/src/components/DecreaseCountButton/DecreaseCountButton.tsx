import { ConnectedProps, connect } from 'react-redux';

import { StoreDispatch } from '../../store/store';
import { decreaseCounterValue } from '../../store/actions';

type Props = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  decreaseCount: () => dispatch(decreaseCounterValue()),
});

const DecreaseCountButtonView = ({ decreaseCount } : Props) => {
  return (
    <button onClick={decreaseCount}>-</button>
  );
};

const connector = connect(null, mapDispatchToProps);
export const DecreaseCountButton = connector(DecreaseCountButtonView);
