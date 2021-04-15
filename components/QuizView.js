import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { getDeck } from "../utils/api";
import { mapDecksToList } from "../utils/helpers";

export default function QuizView({ route, navigation }) {
  const { title, numOfCards } = route.params;

  const deckData = getDeck(title).then((data) => {
    console.log(data.cards);
  });

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.header}>{JSON.stringify(title)}</Text>
        <Text style={styles.text}>{JSON.stringify(numOfCards)} Cards</Text>
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
});
