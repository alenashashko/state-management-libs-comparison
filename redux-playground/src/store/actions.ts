import { StoreDispatch } from './store';
import { fakeRequest } from '../utils/fakeRequest';
import { Action, ActionType } from './types';

export const decreaseCounterValue = () => ({
  type: ActionType.DecreaseCounter,
} as Action);

export const increaseCounterValue = () => ({
  type: ActionType.IncreaseCounter,
} as Action);

export const setRandomCounterValue = (count: number) => ({
  type: ActionType.SetRandomValue,
  payload: count,
} as Action);

// async
export const fetchRandomCounterValue = () => async (dispatch: StoreDispatch) => {
  const count = await fakeRequest();

  dispatch(setRandomCounterValue(count));
};
