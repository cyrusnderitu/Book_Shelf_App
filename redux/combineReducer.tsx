import { combineReducers } from "redux";
import bookReducer, { bookByIdSlice } from "./bookSlice";

const bookByIdReducer = bookByIdSlice.reducer;

const rootReducer = combineReducers({
  books: bookReducer,
  bookById: bookByIdReducer,
});

export default rootReducer;
