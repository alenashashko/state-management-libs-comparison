import { connect } from 'react-redux';
import { Input } from '@chakra-ui/react';

import { CounterState } from '../../store/reducer';

const mapStateToProps = (state: CounterState) => ({
  count: state.count,
});

type Props = {
  count: number;
};

const CounterBodyView = ({count}: Props) => {
  return <Input value={count} readOnly={true} />;
}

export const CounterBody = connect(mapStateToProps, null)(CounterBodyView);
