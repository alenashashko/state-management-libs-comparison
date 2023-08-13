import { makeAutoObservable, runInAction } from 'mobx';
import { fakeRequest } from '../units/fakeRequest';

export const state = makeAutoObservable({
  count: 0,
  increaseCount() {
    this.count++;
  },
  decreaseCount() {
    this.count--;
  },
  async fetchRandomCount() {
    const count = await fakeRequest();

    runInAction(() => {
      this.count = count;
    });
  },
}, {}, {
  autoBind: true,
});
