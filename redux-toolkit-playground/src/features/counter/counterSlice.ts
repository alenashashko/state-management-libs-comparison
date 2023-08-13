import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fakeRequest } from '../../utils/fakeRequest';

export const fetchRandomCountValue = createAsyncThunk('counter/fetchRandomCountValue', async () => {
  const count = await fakeRequest();

  return count;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomCountValue.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
