import { ConnectedProps, connect } from 'react-redux';
import { Button } from '@chakra-ui/react';

import { StoreDispatch } from '../../store/store';
import { increaseCounterValue } from '../../store/actions';

type Props = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  increaseCount: () => dispatch(increaseCounterValue()),
});

const IncreaseCountButtonView = ({ increaseCount } : Props) => {
  return (
    <Button width="100%" onClick={increaseCount}>+</Button>
  );
};

const connector = connect(null, mapDispatchToProps);
export const IncreaseCountButton = connector(IncreaseCountButtonView);
