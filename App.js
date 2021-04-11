import * as React from "react";
import { Provider } from "react-redux";

import store from "./store/store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import DeckView from "./components/DeckView";
import AddCard from "./components/AddCard";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#1ea6f4",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "All Decks" }}
          />
          <Stack.Screen name="Deck" component={DeckView} />
          <Stack.Screen name="AddCard" component={AddCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
