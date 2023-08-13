import { createEffect, createEvent, createStore } from 'effector';

import { fakeRequest } from '../utils/fakeRequest';

export const increaseCounter = createEvent();
export const decreaseCounter = createEvent();
export const increaseOnValue = createEvent<number>();
export const fetchRandomCountFx = createEffect(async () => {
  const count = await fakeRequest();

  return count;
});

// state - number
export const $counterStore = createStore(0)
  .on(increaseCounter, (state) => state + 1)
  .on(decreaseCounter, (state) => state - 1)
  .on(increaseOnValue, (state, payload) => state + payload)
  .on(fetchRandomCountFx.doneData, (_, count) => count);
