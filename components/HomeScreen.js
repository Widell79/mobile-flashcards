import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { fetchDecksData } from "../utils/api";

export default function HomeScreen({ navigation }) {
  const [deckList, setDeckList] = useState([]);

  async function loadDecksData() {
    try {
      const decksData = await fetchDecksData();

      if (decksData === null) return;

      setDeckList(decksData);
    } catch (e) {
      console.error("Failed to load decks!");
    }
  }

  useEffect(() => {
    loadDecksData();
  }, []);

  return (
    <View style={styles.item}>
      <Text>Deck List</Text>
      <Text>{deckList}</Text>
      <Button title="Open Deck" onPress={() => navigation.navigate("Deck")} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
