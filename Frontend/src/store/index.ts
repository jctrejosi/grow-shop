import { configureStore } from '@reduxjs/toolkit';

// ---- Reducers

import { exampleReducerSlice } from './slices/example';

// ------------------------------------------------------------

export const store = configureStore({
  reducer: {
    example: exampleReducerSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
