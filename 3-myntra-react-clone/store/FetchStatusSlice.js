import {createSlice, current} from "@reduxjs/toolkit"

const FetchStatusSlice =  createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentfetching: false,
  },
  reducers: {
    MarkFetchDone: (state) => {
     state.fetchDone = true;
    },
    MarkFetchingStarted: (state) => {
      state.currentfetching = true;
    },
    MarkFetchingFinished: (state) => {
     state.currentfetching = false;
    }
  }
});

export const FetchStatusSliceAction = FetchStatusSlice.actions;
export default FetchStatusSlice;

