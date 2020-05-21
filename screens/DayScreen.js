import React, { useContext, useState, useEffect, createContext } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import MealImage from "./components/MealImage";

import { observer } from "mobx-react";

import { PM_Context } from "../model/PM_Model";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const numCol = 2;
const screenWidth = Dimensions.get("screen").width;
const screenHeigth = Dimensions.get("screen").height;
const width = Math.floor(screenWidth / numCol);

const DayScreen = ({ route }) => {
  const navigation = useNavigation();
  const pm = useContext(PM_Context);

  const [day, setDay] = useState(null);
  const [title, setTitle] = useState({});

  useEffect(() => {
    let dia = route.params != undefined ? route.params.dia : false;

    if (dia.day == new Date().getDay()) {
      setTitle("Hoy");
      let weekDay = new Date().getDay();
      if (weekDay == 0) {
        setDay(pm.week[weekDay + 6]);
      } else {
        setDay(pm.week[weekDay - 1]);
      }
    } else {
      setTitle(pm.dayOfWeek[dia.day] + ", día " + route.params.num);
      let weekDay = dia.day;
      if (weekDay == 0) {
        setDay(pm.week[weekDay + 6]);
      } else {
        setDay(pm.week[weekDay - 1]);
      }
    }
  }, [route.params.dia]);

  const GoToMeal = ({ meal, state }) => {
    if (state != null) {
      navigation.navigate("Recipe", { dia: day.day, meal: meal });
      //navigation.navigate("Recipe", { dia: day.day, meal: meal , recipe: {}});
    } else {
      navigation.navigate("Search", { dia: day.day, meal: meal });
    }
  };

  return (
    day && (
      <View style={pageStyles.screen}>
        <Capcelera title={title} back={true}></Capcelera>
        <View style={pageStyles.cos}>
          <View style={styles.fila}>
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => GoToMeal({ meal: 0, state: day.meals.desayuno })}
            >
              <MealImage
                meal={0}
                state={day.meals.desayuno}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => GoToMeal({ meal: 1, state: day.meals.comida })}
            >
              <MealImage meal={1} state={day.meals.comida} style={styles.img} />
            </TouchableOpacity>
          </View>
          <View style={styles.fila}>
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => GoToMeal({ meal: 2, state: day.meals.merienda })}
            >
              <MealImage
                meal={2}
                state={day.meals.merienda}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => GoToMeal({ meal: 3, state: day.meals.cena })}
            >
              <MealImage meal={3} state={day.meals.cena} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

DayScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="view-day" size={size} color={color} />
);

export default observer(DayScreen);

const styles = StyleSheet.create({
  img: {
    width: width - 60,
    height: screenHeigth / 3,
    borderWidth: 1,
    marginHorizontal: 25,
    borderRadius: 15,
    resizeMode: "contain",
  },
  fila: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
