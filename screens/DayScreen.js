import React, { useContext } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import MealImage from "./components/MealImage";

import { observer } from "mobx-react";

import { PM_Context } from "../model/PM_Model";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

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
  const dia = route.params ? route.params.dia : null;
  const semana = route.params ? route.params.semana : null;
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

  const GoToMeal = ({ state, meal }) => {
    if (state) {
      navigation.navigate("Recipe", { dia: day.day, meal: meal });
    } else {
      navigation.navigate("Search", { dia: day.day, meal: meal });
    }
  };

  return (
    <View style={pageStyles.screen}>
      <Capcelera title={title}></Capcelera>
      <View style={pageStyles.cos}>
        <View style={styles.fila}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => GoToMeal(day.meals.desayuno ? true : false, 0)}
          >
            <MealImage meal={0} state={day.meals.desayuno} style={styles.img} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            //onPress={GoToMeal(day.meals.comida, 1)}
          >
            <MealImage meal={1} state={day.meals.comida} style={styles.img} />
          </TouchableHighlight>
        </View>
        <View style={styles.fila}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            //onPress={GoToMeal(day.meals.merienda, 2)}
          >
            <MealImage meal={2} state={day.meals.merienda} style={styles.img} />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            //onPress={GoToMeal(day.meals.cena, 3)}
          >
            <MealImage meal={3} state={day.meals.cena} style={styles.img} />
          </TouchableHighlight>
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
    width: width - 30,
    height: screenHeigth / 3,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  fila: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
