import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeekScreen from "./screens/WeekScreen.js";
import DayScreen from "./screens/DayScreen.js";
import ListScreen from "./screens/ListScreen.js";

import EntryPage from "./screens/EntryPage.js";

import Recipe from "./screens/Recipe.js";
import Search from "./screens/Search.js";

//Mobx imports
import "mobx-react/batchingForReactNative";
//Provider dels models, perque es pugui accedir al observable "week" des de totes les pagines
import { PM_Provider } from "./model/PM_Model.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Week"
      screenOptions={{}}
      tabBarOptions={{
        activeTintColor: "#9ccc65",
      }}
    >
      <Tab.Screen
        name="Week"
        component={WeekScreen}
        options={{ tabBarIcon: WeekScreen.Icon }}
      ></Tab.Screen>

      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{ tabBarIcon: ListScreen.Icon }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <PM_Provider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="EntryPage" component={EntryPage} />
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="Recipe" component={Recipe} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Day" component={DayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PM_Provider>
  );
}
