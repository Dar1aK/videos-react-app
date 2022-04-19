import { createAsyncThunk, createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getVideos, editVideo } from '../../actions/getVideos';
import { ItemsType } from './types'

export interface VideoState {
  items: ItemsType[];
  active: number | null;
  status: 'success' | 'loading' | 'failed';
}

const initialState: VideoState = {
  items: [],
  active: null,
  status: 'success',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'videos/getVideos',
  async () => {
    const response = await getVideos();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUrl = createAsyncThunk(
    'videos/editVideo',
    async ({id, url}: any) => {
      const response = await editVideo(id, url);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setActive: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.value += 1;
      state.active = action.payload
      console.log('active', state, action)
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // setUser: (state, action) => {
    //     console.log(action);
    //     console.log(current(state));
    //     state.items = action.payload;
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
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
        console.log('updateUrl', current(state.items), action.payload)
        state.items[index] = {...state.items[index], attributes: { ...state.items[index].attributes, slug: action.payload.attributes.slug, url: action.payload.attributes.url }}
        console.log(1, state.items[index])
      });
  },
});

export const { setActive } = videoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectVideos = (state: RootState) => state.videos;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default videoSlice.reducer;