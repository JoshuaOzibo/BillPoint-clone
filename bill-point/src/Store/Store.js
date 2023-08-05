import { createSlice,  configureStore} from '@reduxjs/toolkit';

const initialState = {
  showSideBar: false,
};

const StoreItems = createSlice({
  name: 'storeItem',
  initialState : initialState,

  reducers: {
    clickShowSlider (state) {
      state.showSideBar = !state.showSideBar;
    },

  }
});

export const store = configureStore({
  reducer: StoreItems.reducer,
})

export const SliderAction = StoreItems.actions;