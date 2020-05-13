import React, { useContext } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import MealImage from "./components/MealImage";

import { observer } from "mobx-react";

import { PM_Context } from "../model/PM_Model";
import { useNavigation, useNavigationParam } from "@react-navigation/native";

const numCol = 2;
const screenWidth = Dimensions.get("screen").width;
const screenHeigth = Dimensions.get("screen").height;
const width = Math.floor(screenWidth / numCol);

const title = "Hoy";
var weekDay = new Date().getDay();

//const day = { day: 1, meals: [false, true, true, true] };

const DayScreen = observer(() => {
  //Parametres que s'han d'enviar des de l'screen week
  const funciona = false;
  const dia = funciona ? useNavigationParam("dia") : null;
  const semana = funciona ? useNavigationParam("semana") : null;
  if (dia != null && semana != null) {
    title = semana + ", día " + dia;
  }

  //Rebuda de parametres dels models
  const pm = useContext(PM_Context);

  var weekDay = new Date().getDay();
  if (weekDay == 0) {
    var today = pm.week[weekDay + 6];
  } else {
    var today = pm.week[weekDay - 1];
  }

  return (
    <View style={pageStyles.screen}>
      <Capcelera title={title}></Capcelera>
      <View style={pageStyles.cos}>
        <View style={styles.fila}>
          <MealImage meal={0} state={today.meals.desayuno} style={styles.img} />
          <MealImage meal={1} state={today.meals.comida} style={styles.img} />
        </View>
        <View style={styles.fila}>
          <MealImage meal={2} state={today.meals.merienda} style={styles.img} />
          <MealImage meal={3} state={today.meals.cena} style={styles.img} />
        </View>
      </View>
    </View>
  );
});

DayScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="view-day" size={size} color={color} />
);

export default DayScreen;

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
