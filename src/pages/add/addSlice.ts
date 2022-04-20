import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { addVideo } from '../../actions/videos'

type ErrorType = {
  message: string
  name: string
  path: string[]
}[]

export interface VideoState {
  active: number
  status: '' | 'success' | 'loading' | 'failed'
  error: ErrorType
}

const initialState: VideoState = {
  active: 0,
  status: '',
  error: [],
}

export const addNewVideo = createAsyncThunk('videos/addVideo', async (body: object, { rejectWithValue }) => {
  try {
    const response = await addVideo(body)
    return response?.data
  } catch (err: any) {
    return rejectWithValue(err?.error?.details?.errors)
  }
})

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setInit: (state) => {
      state.status = ''
      state.error = []
    },
    clearError: (state) => {
      state.error = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewVideo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addNewVideo.fulfilled, (state) => {
        state.status = 'success'
        state.error = []
      })
      .addCase(addNewVideo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as ErrorType
      })
  },
})

export const { setInit, clearError } = videoSlice.actions

export const selectAdd = (state: RootState) => state.add

export default videoSlice.reducer
