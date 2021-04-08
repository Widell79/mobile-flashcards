import { fetchDecksData } from "../../utils/api";
import { receive_decks } from "../decks/decksSlice";

export const handleInitialData = () => {
  return async (dispatch) => {
    return await fetchDecksData().then(({ decks }) => {
      dispatch(receive_decks(decks));
    });
  };
};
