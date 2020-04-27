import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import MealImage from "./components/MealImage";

const numCol = 2;
const screenWidth = Dimensions.get("screen").width;
const width = Math.floor(screenWidth / numCol);

const day = { day: 1, meals: [false, true, true, true] };

const DayScreen = () => {
  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Hoy"></Capcelera>
      <View style={pageStyles.cos}>
        <View style={styles.fila}>
          <MealImage meal={0} state={day.meals[0]} style={styles.img} />
          <MealImage meal={1} state={day.meals[1]} style={styles.img} />
        </View>
        <View style={styles.fila}>
          <MealImage meal={2} state={day.meals[2]} style={styles.img} />
          <MealImage meal={3} state={day.meals[3]} style={styles.img} />
        </View>
      </View>
    </View>
  );
};
DayScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="view-day" size={size} color={color} />
);

export default DayScreen;

const styles = StyleSheet.create({
  img: {
    width: width - 30,
    height: width - 30,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  fila: {
    flexDirection: "row",
    marginVertical: 50,
  },
});
