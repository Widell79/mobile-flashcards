import { configureStore } from "@reduxjs/toolkit";
import decksReducer from "../slices/decks/decksSlice";

export default configureStore({
  reducer: {
    decks: decksReducer,
  },
});
