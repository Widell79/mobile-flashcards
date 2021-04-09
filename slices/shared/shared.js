import { fetchDecksData } from "../../utils/api";
import { receive_decks } from "../decks/decksSlice";

export const handleInitialData = () => {
  return async (dispatch) => {
    try {
      const decksData = await fetchDecksData().then(({ decks }) => {
        dispatch(receive_decks(JSON.parse(decks)));
      });

      if (decksData === null) return;
    } catch (e) {
      console.error("Failed to load decks!");
    }
  };
};
