import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getVideos, editVideo } from '../../actions/getVideos';
import { ItemsType } from '../../components/Video/types'

export interface VideoState {
  items: ItemsType[];
  active: number;
  status: 'success' | 'loading' | 'failed';
}

const initialState: VideoState = {
  items: [],
  active: 0,
  status: 'success',
};

export const getVideosList = createAsyncThunk(
  'videos/getVideos',
  async () => {
    const response = await getVideos();
    return response.data;
  }
);

export const updateUrl = createAsyncThunk(
    'videos/editVideo',
    async ({ id, url }: { id: number; url: string; }) => {
      const response = await editVideo(id, url);
      return response.data;
    }
  );

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideosList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getVideosList.fulfilled, (state, action) => {
        state.status = 'success';
        console.log('get', state.items, action.payload)
        state.items = action.payload;
      })
      .addCase(updateUrl.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUrl.fulfilled, (state, action) => {
        state.status = 'success';
        const index = state.items.findIndex(({id}) => id === action.payload.id)
        state.items[index] = {...state.items[index], attributes: { ...state.items[index].attributes, slug: action.payload.attributes.slug, url: action.payload.attributes.url }}
      });
  },
});

export const { setActive } = videoSlice.actions;

export const selectVideos = (state: RootState) => state.videos;

export default videoSlice.reducer;
