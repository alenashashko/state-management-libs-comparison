import { ConnectedProps, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Action } from '../../store/types';
import { StoreDispatch } from '../../store/store';
import { fetchRandomCounterValue } from '../../store/actions';

type Props = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreDispatch, void, Action>) => ({
  setRandomValue: () => dispatch(fetchRandomCounterValue()),
});

const SetRandomCountButtonView = ({ setRandomValue } : Props) => {
  return <button onClick={setRandomValue}>load random value</button>
};

const connector = connect(null, mapDispatchToProps);
export const SetRandomCountButton = connector(SetRandomCountButtonView);
