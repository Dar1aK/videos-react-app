import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { getDetail } from '../../actions/videos'
import { ItemsType } from '../../components/Video/types'

export interface VideoState {
  items: ItemsType[]
  active: ItemsType | null
  status: 'success' | 'loading' | 'failed'
}

const initialState: VideoState = {
  items: [],
  active: null,
  status: 'success',
}

export const getDetailVideo = createAsyncThunk('videos/editVideo', async (id: string) => {
  const response = await getDetail(id)
  return response?.data
})

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailVideo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getDetailVideo.fulfilled, (state, action) => {
        state.status = 'success'
        state.active = action.payload
      })
  },
})

export const selectDetail = (state: RootState) => state.detail

export default videoSlice.reducer
