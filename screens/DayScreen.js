import React, { useContext } from "react";
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

let weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const DayScreen = ({ route }) => {
  const navigation = useNavigation();

  //Rebuda de parametres dels models
  const pm = useContext(PM_Context);

  //Rebuda dels parametres per navegació

  let dia = route.params != undefined ? route.params.dia : null;
  let semana = route.params != undefined ? route.params.semana : null;

  let title = null;
  let day = null;

  //Si venim per navegació o per tab inferior
  if (dia != null && semana != null) {
    title = weekDays[semana] + ", día " + dia;
    let weekDay = semana;
    if (weekDay == 0) {
      day = pm.week[weekDay + 6];
    } else {
      day = pm.week[weekDay - 1];
    }
  } else {
    title = "Hoy";
    let weekDay = new Date().getDay();
    if (weekDay == 0) {
      day = pm.week[weekDay + 6];
    } else {
      day = pm.week[weekDay - 1];
    }
  }

  const GoToMeal = ({ meal, state }) => {
    //console.log(meal);
    //console.log(state);

    if (state != null) {
      //console.log("recepta");
      navigation.navigate("Recipe", { dia: day.day, meal: meal });
    } else {
      //console.log("search");
      navigation.navigate("Search", { dia: day.day, meal: meal });
    }
  };

  return (
    <View style={pageStyles.screen}>
      <Capcelera title={title}></Capcelera>
      <View style={pageStyles.cos}>
        <View style={styles.fila}>
          <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => GoToMeal({ meal: 0, state: day.meals.desayuno })}
          >
            <MealImage meal={0} state={day.meals.desayuno} style={styles.img} />
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
            <MealImage meal={2} state={day.meals.merienda} style={styles.img} />
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
