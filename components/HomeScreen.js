import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { fetchDecksData } from "../utils/api";

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState("Default");

  async function loadDecksName() {
    try {
      const name = await fetchDecksData();
      console.log(name);

      if (name === null) return;

      setName(name);
    } catch (e) {
      console.error("Failed to load name.");
    }
  }

  useEffect(() => {
    loadDecksName();
  }, []);

  return (
    <View style={styles.item}>
      <Text>Deck List</Text>
      <Text>{name}</Text>
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
