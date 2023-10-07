import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "@/hooks/fetchData";

type StateType = {
  loading: boolean;
  books: [];
  error: string | boolean;
};
const initialState: StateType = {
  loading: false,
  books: [],
  error: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;
