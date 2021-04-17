import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

import { selectDecks } from "../slices/decks/decksSlice";

export default function QuizView({ route, navigation }) {
  const { title, numOfCards } = route.params;

  const [cardList, setCardsList] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);

  const decksInfo = useSelector(selectDecks);

  useEffect(() => {
    setCardsList(decksInfo[title].cards[currentCard]);
  });

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const checkAnswer = async (answer) => {
    if (currentCard === numOfCards - 1 && answer === "Correct") {
      sleep(1000).then(() => {
        navigation.navigate("Score", {
          title: title,
          numOfCards: numOfCards,
          score: score + 1,
        });
      });
    } else if (currentCard === numOfCards - 1 && answer === "Incorrect") {
      sleep(1000).then(() => {
        navigation.navigate("Score", {
          title: title,
          numOfCards: numOfCards,
          score: score,
        });
      });
    } else {
      if (answer === "Correct") {
        setScore((prevScore) => {
          return prevScore + 1;
        });
      }
      setCurrentCard((prevCard) => {
        return prevCard + 1;
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>{`Question ${
          currentCard + 1
        }/${numOfCards}`}</Text>
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
          color="#9ad3bc"
          onPress={() => checkAnswer("Correct")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Incorrect"
          color="#f05454"
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
    backgroundColor: "#f8f1f1",
  },
  item: {
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
    backgroundColor: "#ece0ca",
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
    marginBottom: 10,
  },

  icon: {
    textAlign: "center",
  },
  show: {
    fontSize: 24,
    textAlign: "center",
    color: "#f05454",
    paddingBottom: 20,
  },
});
