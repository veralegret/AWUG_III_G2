import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeekScreen from "./screens/WeekScreen.js";
import DayScreen from "./screens/DayScreen.js";
import ListScreen from "./screens/ListScreen.js";

import Recipe from "./screens/Recipe.js";
import Search from "./screens/Search.js";

//Mobx imports
import "mobx-react/batchingForReactNative";
//Provider dels models, perque es pugui accedir al observable "week" des de totes les pagines
import { PM_Provider } from "./model/PM_Model.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PM_Provider>
      <NavigationContainer>
        {/*Per poder accedir a les pantalles*/}
        <Tab.Navigator
          initialRouteName="Week"
          screenOptions={{}}
          tabBarOptions={{
            activeTintColor: "#9ccc65",
          }}
        >
          <Tab.Screen
            name="Recipe"
            component={Recipe}
            options={{ tabBarIcon: Recipe.Icon }}
          ></Tab.Screen>

          <Tab.Screen
            name="Day"
            component={DayScreen}
            options={{ tabBarIcon: DayScreen.Icon }}
          ></Tab.Screen>

          <Tab.Screen
            name="Week"
            component={WeekScreen}
            options={{ tabBarIcon: WeekScreen.Icon }}
          ></Tab.Screen>

          <Tab.Screen
            name="Search"
            component={Search}
            options={{ tabBarIcon: Search.Icon }}
          ></Tab.Screen>
          <Tab.Screen
            name="List"
            component={ListScreen}
            options={{ tabBarIcon: ListScreen.Icon }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PM_Provider>
  );
}
