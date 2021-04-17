import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { handleInitialData } from "../slices/shared/shared";
import { selectDecks } from "../slices/decks/decksSlice";
import setInitialDecks from "../utils/_decks";

import { mapDecksToList } from "../utils/helpers";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    //setInitialDecks();
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
        keyExtractor={(item) => item.title}
        data={decksListInfo}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Deck", {
                  title: item.title,
                  numberOfCards: item.cards.length,
                });
              }}
            >
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.text}>{item.cards.length} Cards</Text>
              <MaterialCommunityIcons
                style={styles.icon}
                name="cards-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.btn}>
        <Button
          title="Add New Deck"
          color="#2d6187"
          onPress={() => navigation.navigate("AddDeck")}
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
    flex: 1,
    marginTop: 20,
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
  icon: {
    textAlign: "center",
  },
  btn: {
    paddingHorizontal: 40,
    margin: 5,
    paddingBottom: 10,
  },
});
