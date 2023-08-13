export type Action = {
  type: ActionType;
};

export enum ActionType {
  IncreaseCounter = 'INCREASE_COUNTER',
  DecreaseCounter = 'DECREASE_COUNTER'
}
