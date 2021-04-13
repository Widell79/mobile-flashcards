import { createSlice } from "@reduxjs/toolkit";

import { submitCard } from "../../utils/api";

export const decksSlice = createSlice({
  name: "decks",
  initialState: {},
  reducers: {
    receive_decks: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        ...action.payload,
      };
    },
    add_card: (state, action) => {
      const { card, title } = action.payload;
      console.log(card, title);

      return {
        ...state,

        ...state.decks,
        [title]: {
          title: title,
          cards: [...state[title].cards, card],
        },
      };
    },
  },
});

export const { receive_decks, add_card } = decksSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export function saveCard(card, title) {
  return async (dispatch) => {
    try {
      await submitCard(card, title);
      dispatch(add_card({ card, title }));
    } catch (err) {
      console.warn("Error in saveCard: ", err);
      alert("There was an error saving your card. Please try again.");
    }
  };
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDecks = (state) => state.decks;

export default decksSlice.reducer;
