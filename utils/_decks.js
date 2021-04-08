import AsyncStorage from "@react-native-async-storage/async-storage";

export const DECKS_STORAGE_KEY = "MobileFlashCards:decks";

function setDecksData() {
  let decks = {
    React: {
      id: "8xf0y6ziyjabvozdd253nd",
      title: "React",
      questions: [
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
      id: "6ni6ok3ym7mf1p33lnez",
      title: "JavaScript",
      questions: [
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

export default setDecksData;
