export type Action = {
  type: ActionType.DecreaseCounter | ActionType.IncreaseCounter;
} | {
  type: ActionType.SetRandomValue;
  payload: number;
};

export enum ActionType {
  IncreaseCounter = 'INCREASE_COUNTER',
  DecreaseCounter = 'DECREASE_COUNTER',
  SetRandomValue = 'SET_RANDOM_VALUE',
}
