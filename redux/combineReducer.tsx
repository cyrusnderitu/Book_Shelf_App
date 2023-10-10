import { combineReducers } from "redux";
import bookReducer, { bookByIdSlice } from "./bookSlice";

const bookByIdReducer = bookByIdSlice.reducer;

const rootReducer = combineReducers({
  book: bookReducer,
  bookById: bookByIdReducer,
});

export default rootReducer;
