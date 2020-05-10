import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import MealImage from "./MealImage";
import { observer } from "mobx-react";
import { useNavigation } from '@react-navigation/native';

var weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

var today = new Date().getDay();
var num = new Date().getDate();

const DayofWeek = observer(({ day }) => {
  const navigation = useNavigation();

  var res = 0;
  if (day.day == 0) {
    res = today - 7;
  } else {
    res = today - day.day;
  }
  var dia = num - res;

  const GoToDay = () => {
    // 
    // Exemple de com moure's entre diferents tabs. 
    // Actualitzant el model es pot comunicar quin dia és l'"actual"
    // perquè això afecti el tab "Day".
    //   -- Pau (10/05/2020 23:08)
    //
    navigation.navigate("Day");
  }

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={GoToDay}
    >
      <View style={styles.weekDay}>
        <View style={styles.dayInfo}>
          <Text style={styles.number}>{dia}</Text>
          <Text>{weekDays[day.day]}</Text>
        </View>
        <View style={styles.mealRow}>
          <MealImage meal={0} state={day.meals.desayuno} style={styles.img} />
          <MealImage meal={1} state={day.meals.comida} style={styles.img} />
          <MealImage meal={2} state={day.meals.merienda} style={styles.img} />
          <MealImage meal={3} state={day.meals.cena} style={styles.img} />
        </View>
      </View>
    </TouchableHighlight>
  );
});

export default DayofWeek;

const styles = StyleSheet.create({
  weekDay: {
    flexDirection: "row",
    height: Dimensions.get("screen").height / 10,
    alignItems: "center",
  },
  number: {
    fontSize: 32,
  },
  dayInfo: {
    height: 100,
    width: 70,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mealRow: {
    flexDirection: "row",
  },
  img: {
    width: Dimensions.get("screen").width / 6,
    height: Dimensions.get("screen").width / 6,
    margin: 5,
    borderRadius: 10,
  },
});
