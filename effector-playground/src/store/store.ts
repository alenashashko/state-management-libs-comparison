import { createEvent, createStore } from 'effector';

export const increaseCounter = createEvent();
export const decreaseCounter = createEvent();
export const increaseOnValue = createEvent<number>();

export const $counterStore = createStore(0)
  .on(increaseCounter, (state) => state + 1)
  .on(decreaseCounter, (state) => state - 1)
  .on(increaseOnValue, (state, payload) => state + payload);
