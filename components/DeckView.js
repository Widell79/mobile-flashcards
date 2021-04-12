import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DeckView({ route, navigation }) {
  const { id, title, numOfCards } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.header}>{JSON.stringify(title)}</Text>
        <Text style={styles.text}>{JSON.stringify(numOfCards)} Cards</Text>
      </View>
      <View style={styles.btn}>
        <Button
          title="Add Card"
          onPress={() =>
            navigation.navigate("AddCard", {
              title: title,
            })
          }
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Start Quiz"
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
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
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
  },
  btn: {
    paddingHorizontal: 40,
    margin: 5,
  },
});
