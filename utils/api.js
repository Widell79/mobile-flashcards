import AsyncStorage from "@react-native-async-storage/async-storage";
import { DECKS_STORAGE_KEY } from "./_decks";

export function fetchDecksData() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => ({
    decks,
  }));
}

export function submitCard({ id, question, answer }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({ id, question })
  );
}

// export function addCardToDeck({ title, card }) {
//   getDecks()
//     .then((decks) => {
//       return {
//         ...decks,
//         [title]: {
//           questions: [...decks.questions].concat(card)
//         }
//       }
//     }).then(res => {
//       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(res))
//     }).catch(err => {
//       console.log('error in addCardToDeck', err)
//     })
// }

// export function removeEntry(key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
//     const data = JSON.parse(results);
//     data[key] = undefined;
//     delete data[key];
//     AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
//   });
// }
