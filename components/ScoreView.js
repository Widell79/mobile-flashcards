import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default function ScoreView({ route, navigation }) {
  const { score, numOfCards } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          style={styles.text}
        >{`You scored ${score} of ${numOfCards}!`}</Text>
      </View>
      <View></View>
      <View style={styles.btn}>
        <Button
          title="Restart Quiz"
          color="#3ccfc3"
          onPress={() => navigation.navigate("Quiz")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Back to Deck"
          color="#3f8bc9"
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
    backgroundColor: "#fff",
  },
  item: {
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
    backgroundColor: "#1ea6f4",
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
