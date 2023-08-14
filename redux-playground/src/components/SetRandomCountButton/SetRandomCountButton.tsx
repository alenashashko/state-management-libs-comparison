import { ConnectedProps, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Button } from '@chakra-ui/react';

import { Action } from '../../store/types';
import { StoreDispatch } from '../../store/store';
import { fetchRandomCounterValue } from '../../store/actions';

type Props = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreDispatch, void, Action>) => ({
  setRandomValue: () => dispatch(fetchRandomCounterValue()),
});

const SetRandomCountButtonView = ({ setRandomValue } : Props) => {
  return <Button width="100%" onClick={setRandomValue}>Load random value</Button>
};

const connector = connect(null, mapDispatchToProps);
export const SetRandomCountButton = connector(SetRandomCountButtonView);
