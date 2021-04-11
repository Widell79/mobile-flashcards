import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import setDecksData from "../utils/_decks";
import { handleInitialData } from "../slices/shared/shared";
import { selectDecks } from "../slices/decks/decksSlice";

import { mapDecksToList } from "../utils/helpers";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setDecksData();
    dispatch(handleInitialData());
  }, []);

  const decksInfo = useSelector(selectDecks);

  const decksList = mapDecksToList(decksInfo);

  const decksListInfo = decksList.values.map((data) => {
    return data;
  });

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={decksListInfo}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.text}>{item.cards.length} Cards</Text>
          </View>
        )}
      />
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
    padding: 30,
    backgroundColor: "#1ea6f4",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});
