import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { selectDecks } from "../slices/decks/decksSlice";
import { deleteDeck } from "../slices/decks/decksSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DeckView({ route, navigation }) {
  const { title, numberOfCards } = route.params;
  const decksInfo = useSelector(selectDecks);

  useEffect(() => {
    loadCards();
  });

  const loadCards = () => {
    try {
      const num = decksInfo[title].cards.length;
      return num;
    } catch {
      console.log("No cards from state");
    }
  };

  const numOfCards = loadCards();

  const dispatch = useDispatch();

  const deleteDeckHandler = () => {
    dispatch(deleteDeck(title));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.header}>{title}</Text>
        {numOfCards ? (
          <Text style={styles.text}>{numOfCards} Cards</Text>
        ) : (
          <Text style={styles.text}>{numberOfCards} Cards</Text>
        )}

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
          color="#2d6187"
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
          color="#28abb9"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: title,
              numOfCards: numOfCards,
            })
          }
        />
      </View>
      <View style={styles.delbtn}>
        <Button
          title="Delete Deck!"
          color="#f05454"
          onPress={deleteDeckHandler}
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
    backgroundColor: "#f8f1f1",
  },
  item: {
    marginTop: 20,
    marginBottom: 50,
    padding: 30,
    backgroundColor: "#ece0ca",
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
  delbtn: {
    paddingHorizontal: 40,
    margin: 5,
    marginTop: 50,
  },
  icon: {
    textAlign: "center",
  },
});
