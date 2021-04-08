import AsyncStorage from "@react-native-async-storage/async-storage";
import { DECKS_STORAGE_KEY } from "./_decks";

export function fetchDecksData() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

// export function submitEntry({ entry, key }) {
//   return AsyncStorage.mergeItem(
//     CALENDAR_STORAGE_KEY,
//     JSON.stringify({
//       [key]: entry,
//     })
//   );
// }

// export function removeEntry(key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
//     const data = JSON.parse(results);
//     data[key] = undefined;
//     delete data[key];
//     AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
//   });
// }
