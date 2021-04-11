import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const submitHandler = () => {
    console.log("submitted");
  };

  return (
    <View style={styles.container}>
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
