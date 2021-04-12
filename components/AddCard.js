import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { useDispatch } from "react-redux";

import { saveCard } from "../slices/decks/decksSlice";

export default function AddCard({ route, navigation }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { id } = route.params;
  const dispatch = useDispatch();

  const submitHandler = () => {
    let card = {
      question: question,
      answer: answer,
    };

    dispatch(saveCard(id, card));

    // setQuestion(() => "");
    // setAnswer(() => "");
  };

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>Enter a question:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setQuestion(value)}
      />

      <Text>Enter answer:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setAnswer(value)}
      />
      <Button title="Submit" onPress={submitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
