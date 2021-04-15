import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

import { selectDecks } from "../slices/decks/decksSlice";

import { mapDecksToList } from "../utils/helpers";

export default function QuizView({ route, navigation }) {
  const { title, numOfCards } = route.params;

  const [cardList, setCardsList] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);

  const decksInfo = useSelector(selectDecks);
  const numCards = decksInfo[title].cards.length;

  useEffect(() => {
    setCardsList(decksInfo[title].cards[currentCard]);
  });

  const checkAnswer = (answer) => {
    console.log(answer);
    console.log(cardList.answer);

    if (answer === "Correct") {
      const answers = ["correct", "yes", "true"];
      if (answers.includes(cardList.answer.toLowerCase())) {
        setScore((prevScore) => {
          return (prevScore += 1);
        });
      }
    } else if (answer === "Incorrect") {
      const answers = ["incorrect", "no", "false"];
      if (answers.includes(cardList.answer.toLowerCase())) {
        setScore((prevScore) => {
          return (prevScore += 1);
        });
      }
    }
    if (currentCard <= numCards) {
      setCurrentCard((prevCard) => {
        return (prevCard += 1);
      });
    } else {
      //Todo: Add new comp that shows score etc
    }
  };

  console.log(score);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>{`Question ${
          currentCard + 1
        }/${numCards}`}</Text>
        {showAnswer ? (
          <Text style={styles.header}>{cardList.answer}</Text>
        ) : (
          <Text style={styles.header}>{cardList.question}</Text>
        )}
      </View>
      <View>
        {showAnswer ? (
          <Text style={styles.show} onPress={() => setShowAnswer(!showAnswer)}>
            Show Question
          </Text>
        ) : (
          <Text style={styles.show} onPress={() => setShowAnswer(!showAnswer)}>
            Show Answer
          </Text>
        )}
      </View>
      <View style={styles.btn}>
        <Button
          title="Correct"
          color="#60b381"
          onPress={() => checkAnswer("Correct")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Incorrect"
          color="#e84545"
          onPress={() => checkAnswer("Incorrect")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  item: {
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
    backgroundColor: "#1ea6f4",
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 5,
  },
  btn: {
    paddingHorizontal: 40,
    margin: 5,
  },

  icon: {
    textAlign: "center",
  },
  show: {
    fontSize: 24,
    textAlign: "center",
    color: "red",
    paddingBottom: 20,
  },
});
