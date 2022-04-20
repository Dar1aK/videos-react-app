import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import detailReducer from '../pages/detail/detailSlice';
import videosReducer from '../pages/main/mainSlice';

export const store = configureStore({
  reducer: {
    detail: detailReducer,
    videos: videosReducer,
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
