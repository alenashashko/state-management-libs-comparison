import { StoreDispatch } from './store';
import { fakeRequest } from '../utils/fakeRequest';
import { ActionType } from './types';

export const decreaseCounterValue = () => ({
  type: ActionType.DecreaseCounter,
});

export const increaseCounterValue = () => ({
  type: ActionType.IncreaseCounter,
});

export const setRandomCounterValue = (count: number) => ({
  type: ActionType.SetRandomValue,
  payload: count,
});

// async
export const fetchRandomCounterValue = () => async (dispatch: StoreDispatch) => {
  const count = await fakeRequest();

  dispatch(setRandomCounterValue(count));
};
