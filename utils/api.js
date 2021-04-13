import AsyncStorage from "@react-native-async-storage/async-storage";
import setInitialDecks, { DECKS_STORAGE_KEY } from "./_decks";

export async function fetchDecksData() {
  try {
    if (AsyncStorage.getItem(DECKS_STORAGE_KEY) !== null) {
      return await AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => ({
        decks,
      }));
    } else {
      setInitialDecks();
    }
  } catch (err) {
    console.log("error while fetching data", err);
  }
}

export async function submitCard(title, card) {
  try {
    const decks = JSON.parse(await AsyncStorage.getItem(DECKS_STORAGE_KEY));
    const currDeck = decks[title];
    currDeck.cards.push(card);
    const updatedDeck = { [title]: currDeck };

    return await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(updatedDeck)
    );
  } catch (err) {
    console.warn("error while adding card", err);
  }
}

// export function removeEntry(key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
//     const data = JSON.parse(results);
//     data[key] = undefined;
//     delete data[key];
//     AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
//   });
// }
