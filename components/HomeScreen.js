import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { fetchDecksData } from "../utils/api";
import { handleInitialData } from "../slices/shared/shared";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <View style={styles.item}>
      <Text>Deck List</Text>
      <Text>"dummy"</Text>
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
