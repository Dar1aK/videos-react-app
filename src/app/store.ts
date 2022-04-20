import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import addReducer from '../pages/add/addSlice'
import detailReducer from '../pages/detail/detailSlice'
import videosReducer from '../pages/main/mainSlice'

export const store = configureStore({
  reducer: {
    add: addReducer,
    detail: detailReducer,
    videos: videosReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
