import { create } from 'zustand';
import { fakeRequest } from '../utils/fakeRequest';

interface CounterState {
  count: number;
  increaseCounterValue: () => void;
  decreaseCounterValue: () => void;
  fetchRandomCounterValue: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increaseCounterValue: () => set(state => ({
    count: state.count + 1,
  })),
  decreaseCounterValue: () => set(state => ({
    count: state.count - 1,
  })),
  fetchRandomCounterValue: async () => {
    const count = await fakeRequest();

    set({
      count,
    });
  },
}));
