import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import setInitialDecks, {
  DECKS_STORAGE_KEY,
  DECKS_NOTIFICATION_KEY,
} from "./_decks";

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

export async function getDeck(title) {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    return JSON.parse(data)[title];
  } catch (err) {
    console.log("error while fetching deck", err);
  }
}

export async function submitCard(title, card) {
  try {
    const deck = await getDeck(title);

    return await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          cards: [...deck.cards].concat(card),
        },
      })
    );
  } catch (err) {
    console.warn("error while adding card", err);
  }
}

export async function submitDeck(title) {
  try {
    const updatedDecks = { [title]: { title: title, cards: [] } };

    return await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(updatedDecks)
    );
  } catch (err) {
    console.warn("error while adding new deck", err);
  }
}

export async function removeDeck(title) {
  try {
    const jsonValue = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const decksList = JSON.parse(jsonValue);

    decksList[title] = undefined;
    delete decksList[title];
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decksList));
    return await AsyncStorage.getItem(DECKS_STORAGE_KEY).then((decks) => ({
      decks,
    }));
  } catch (err) {
    console.warn("error while deleting specified deck", err);
  }
}

function createNotification() {
  return {
    title: "Time to study!",
    body: "Don't forget to study your flashcards today!",

    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export async function clearLocalNotification() {
  return AsyncStorage.removeItem(DECKS_NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export async function setLocalNotification() {
  return AsyncStorage.getItem(DECKS_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync().then(() => {
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(13);
              tomorrow.setMinutes(0);

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: tomorrow,
              }).then(() => {
                AsyncStorage.setItem(
                  DECKS_NOTIFICATION_KEY,
                  JSON.stringify(true)
                );
                console.log("reminder set!");
              });
            });
          }
        });
      }
    });
}
