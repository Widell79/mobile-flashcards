import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import { useDispatch } from "react-redux";

import { saveDeck } from "../slices/decks/decksSlice";

export default function AddDeck({ navigation }) {
  const [deckName, setDeckName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = () => {
    if (deckName.length < 3) {
      Alert.alert("OOPS!", "Your deck title must have at least 3 chars!", [
        { text: "Ok" },
      ]);
    } else {
      dispatch(saveDeck(deckName));

      setDeckName("");

      navigation.navigate("Deck", {
        title: deckName,
        numOfCards: 0,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter the title of new deck:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setDeckName(value)}
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
