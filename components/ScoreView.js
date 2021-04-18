import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { clearLocalNotification, setLocalNotification } from "../utils/api";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function ScoreView({ route, navigation }) {
  const { title, score, numOfCards } = route.params;

  useEffect(() => {
    clearLocalNotification().then(setLocalNotification);
  }, []);

  const generateIcon = () => {
    if (score === numOfCards) {
      return (
        <FontAwesome
          style={styles.icon}
          name="star"
          size={26}
          color="#ffb037"
        />
      );
    } else if (score === 0) {
      return (
        <FontAwesome5
          style={styles.icon}
          name="sad-cry"
          size={26}
          color="black"
        />
      );
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          style={styles.text}
        >{`You scored ${score} of ${numOfCards}!`}</Text>
        {generateIcon()}
      </View>
      <View></View>
      <View style={styles.btn}>
        <Button
          title="Restart Quiz"
          color="#28abb9"
          onPress={() =>
            navigation.push("Quiz", {
              title: title,
              numOfCards: numOfCards,
            })
          }
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Back to Deck"
          color="#2d6187"
          onPress={() => navigation.navigate("Deck")}
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
    marginBottom: 20,
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
    marginBottom: 10,
  },

  icon: {
    textAlign: "center",
  },
  show: {
    fontSize: 24,
    textAlign: "center",
    color: "red",
    paddingBottom: 20,
  },
});
