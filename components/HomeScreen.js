import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import setDecksData from "../utils/_decks";
import { handleInitialData } from "../slices/shared/shared";
import { selectDecks } from "../slices/decks/decksSlice";
import { log } from "react-native-reanimated";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setDecksData();
    dispatch(handleInitialData());
  }, []);

  const decksInfo = useSelector(selectDecks);

  const decksList = Object.entries(decksInfo);

  return (
    <View style={styles.item}>
      {decksList.map((deck) => {
        const title = deck[1].title;
        const id = deck[1].id;

        return <Text key={id}>{title}</Text>;
      })}

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
