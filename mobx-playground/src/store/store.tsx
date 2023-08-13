import { makeAutoObservable } from 'mobx';

export const state = makeAutoObservable({
  count: 0,
  increaseCount() {
    this.count++;
  },
  decreaseCount() {
    this.count--;
  }
}, {}, {
  autoBind: true,
});
