import { create } from 'zustand';

interface CounterState {
  count: number;
  increaseCounterValue: () => void;
  decreaseCounterValue: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increaseCounterValue: () => set(state => ({
    count: state.count + 1,
  })),
  decreaseCounterValue: () => set(state => ({
    count: state.count - 1,
  }))
}));
