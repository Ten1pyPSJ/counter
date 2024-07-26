import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
  },
});

export const { inc, dec } = counterSlice.actions;

export default counterSlice.reducer;
