import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      // console.log('Previous Filter State:', state.filters);
      state.filters = action.payload;
      // console.log('Updated Filter State:', state.filters);
    },
  },
});

export const selectNameFilter = state => state.filter.filters;

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;
