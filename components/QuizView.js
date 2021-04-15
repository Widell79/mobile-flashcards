import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

import { selectDecks } from "../slices/decks/decksSlice";

import { mapDecksToList } from "../utils/helpers";

export default function QuizView({ route, navigation }) {
  const { title, numOfCards } = route.params;

  const [cardList, setCardsList] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const decksInfo = useSelector(selectDecks);

  useEffect(() => {
    setCardsList(decksInfo[title].cards[0]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
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
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Incorrect"
          color="#e84545"
          onPress={() => navigation.navigate("Home")}
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