import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import setDecksData from "../utils/_decks";
import { handleInitialData } from "../slices/shared/shared";
import { selectDecks } from "../slices/decks/decksSlice";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setDecksData();
    dispatch(handleInitialData());
  }, []);

  const decksInfo = useSelector(selectDecks);

  const decksList = Object.entries(decksInfo);
  const decksListInfo = decksList.map((data) => {
    return data[1];
  });

  return (
    // <View style={styles.item}>
    //   {decksListInfo.map((deck) => {
    //     const title = deck.title;
    //     const id = deck.id;

    //     return <Text key={id}>{title}</Text>;
    //   })}

    //   <Button title="Open Deck" onPress={() => navigation.navigate("Deck")} />
    // </View>
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={decksListInfo}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
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
    fontSize: 24,
    textAlign: "center",
  },
});
