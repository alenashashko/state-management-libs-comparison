import { Action, ActionType } from './types';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DecreaseCounter:
      return { count: state.count - 1 };
    case ActionType.IncreaseCounter:
      return { count: state.count + 1 };
    case ActionType.SetRandomValue:
      return { count: action.payload };
    default:
      return state;
  }
};
