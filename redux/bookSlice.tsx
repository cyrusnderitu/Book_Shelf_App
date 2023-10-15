import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks, fetchBookById } from "@/hooks/fetchData";

type StateType = {
  loading: boolean;
  books: [];
  error: string | boolean;
};

type BookType = {
  book_id: number;
  name: string;
  cover: string;
  url: string;
  author: string[];
  rating: number;
  pages: number;
  synopsis: string;
  published_date: string;
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
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

type BookState = {
  loading: boolean;
  book: BookType | {};
  error: boolean;
};
const bookInitState: BookState = {
  loading: false,
  book: {},
  error: false,
};
export const bookByIdSlice = createSlice({
  name: "bookById",
  initialState: {
    loading: false,
    book: {},
    error: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(fetchBookById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;
