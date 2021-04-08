import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DeckView({ navigation }) {
  return (
    <View style={styles.item}>
      <Text>Deck</Text>
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
