import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DeckView({ route, navigation }) {
  const { title, numOfCards } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>{numOfCards} Cards</Text>
        <MaterialCommunityIcons
          style={styles.icon}
          name="cards-outline"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Add Card"
          color="#3f8bc9"
          onPress={() =>
            navigation.navigate("AddCard", {
              title: title,
            })
          }
        />
      </View>
      <View style={styles.btn}>
        <Button
          disabled={numOfCards < 1}
          title="Start Quiz"
          color="#3ccfc3"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: title,
            })
          }
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
