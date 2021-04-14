import AsyncStorage from "@react-native-async-storage/async-storage";
import setInitialDecks, { DECKS_STORAGE_KEY } from "./_decks";

// Async Storage can only store string data, so in order to store object data you need to serialize it first.
// For data that can be serialized to JSON you can use JSON.stringify() when saving the data and JSON.parse() when loading the data.

export async function fetchDecksData() {
  try {
    const jsonValue = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (jsonValue !== null) {
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
    const value = JSON.parse(await AsyncStorage.getItem(DECKS_STORAGE_KEY));
    const currentDeck = value[title];
    currentDeck.cards.push(card);
    const updatedDeck = { [title]: currentDeck };

    return await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(updatedDeck)
    );
  } catch (err) {
    console.warn("error while adding card", err);
  }
}

export async function submitDeck(title) {
  try {
    const value = JSON.parse(await AsyncStorage.getItem(DECKS_STORAGE_KEY));
    const currentDecks = value.decks;
    currentDecks.push(title);
    const updatedDecks = { decks: currentDecks };

    return await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(updatedDecks)
    );
  } catch (err) {
    console.warn("error while adding new deck", err);
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
