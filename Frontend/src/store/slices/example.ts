import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export const exampleReducerSlice = createSlice({
  name: 'example',

  initialState: {
    exampleInitState: 'example',
  },

  reducers: {
    SetExample: (state, newValue: PayloadAction<string>) => ({
      ...state,
      exampleInitState: newValue.payload,
    }),
  },
});

export const ActionsExampleReducer = exampleReducerSlice.actions;

export const GetStateExample = (state: RootState) => state.example;
