import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeworkSlice from './slices/homeworkSlice'

export const store = configureStore({
  reducer: {
    homework: homeworkSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;