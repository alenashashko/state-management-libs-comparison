import { ConnectedProps, connect } from 'react-redux';
import { Button } from '@chakra-ui/react';

import { StoreDispatch } from '../../store/store';
import { decreaseCounterValue } from '../../store/actions';

type Props = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  decreaseCount: () => dispatch(decreaseCounterValue()),
});

const DecreaseCountButtonView = ({ decreaseCount } : Props) => {
  return (
    <Button width="100%" onClick={decreaseCount}>-</Button>
  );
};

const connector = connect(null, mapDispatchToProps);
export const DecreaseCountButton = connector(DecreaseCountButtonView);
