import { connect } from 'react-redux';

import { CounterState } from '../../store/reducer';

const mapStateToProps = (state: CounterState) => ({
  count: state.count,
});

type Props = {
  count: number;
};

const CounterBodyView = ({count}: Props) => {
  return <div>{count}</div>;
}

export const CounterBody = connect(mapStateToProps, null)(CounterBodyView);