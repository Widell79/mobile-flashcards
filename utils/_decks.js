import AsyncStorage from "@react-native-async-storage/async-storage";

export const DECKS_STORAGE_KEY = "MobileFlashCards:decks";

function setInitialDecks() {
  let decks = {
    React: {
      title: "React",
      cards: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    JavaScript: {
      title: "JavaScript",
      cards: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared.",
        },
      ],
    },
  };

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));

  return decks;
}

export default setInitialDecks;
