import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import { FlatList } from "react-native-gesture-handler";
import DayofWeek from "./components/DayofWeek";

const Separator = () => <View style={pageStyles.separator} />;

const week = [
  { day: 1, meals: [false, true, true, true] },
  { day: 2, meals: [true, false, true, true] },
  { day: 3, meals: [true, false, true, true] },
  { day: 4, meals: [true, false, true, true] },
  { day: 5, meals: [true, true, false, true] },
  { day: 6, meals: [true, true, true, false] },
  { day: 0, meals: [false, true, true, true] },
];
const WeekScreen = () => {
  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Semana"></Capcelera>
      <View style={pageStyles.cos}>
        <FlatList
          data={week}
          renderItem={({ item }) => (
            <DayofWeek day={item} /* navigation={navigation} */ />
          )}
          keyExtractor={(item) => "key" + item.day}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
};
WeekScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="view-week" size={size} color={color} />
);

export default WeekScreen;
