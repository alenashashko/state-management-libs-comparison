import { ActionType } from './types';

export const decreaseCounterValue = () => {
  return {
    type: ActionType.DecreaseCounter,
  };
};

export const increaseCounterValue = () => {
  return {
    type: ActionType.IncreaseCounter,
  };
};
