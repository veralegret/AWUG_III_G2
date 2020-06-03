import React, { useContext } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MealImageWeek from "./MealImageWeek";
import { observer } from "mobx-react";
import { PM_Context } from "../../model/PM_Model";
import { useNavigation } from "@react-navigation/native";

var today = new Date().getDay();
var num = new Date().getDate();

const DayofWeek = ({ day }) => {
  const navigation = useNavigation();
  const pm = useContext(PM_Context);

  var res = 0;
  if (day.day == 0) {
    res = today - 7;
  } else {
    res = today - day.day;
  }
  var dia = num - res;
  var diaSemana = pm.dayOfWeek[day.day];

  const GoToDay = () => {
    navigation.navigate("Day", { num: dia, dia: day });
  };
  if (day.day == today) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={GoToDay}
        style={styles.today}
      >
        <View style={styles.weekDay}>
          <View style={styles.dayInfo}>
            <Text style={styles.number}>{dia}</Text>
            <Text>Today</Text>
          </View>
          <View style={styles.mealRow}>
            <MealImageWeek meal={0} state={day.meals.desayuno} style={styles.img} />
            <MealImageWeek meal={1} state={day.meals.comida} style={styles.img} />
            <MealImageWeek meal={2} state={day.meals.merienda} style={styles.img} />
            <MealImageWeek meal={3} state={day.meals.cena} style={styles.img} />
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={GoToDay}
      >
        <View style={styles.weekDay}>
          <View style={styles.dayInfo}>
            <Text style={styles.number}>{dia}</Text>
            <Text>{diaSemana}</Text>
          </View>
          <View style={styles.mealRow}>
            <MealImageWeek meal={0} state={day.meals.desayuno} style={styles.img} />
            <MealImageWeek meal={1} state={day.meals.comida} style={styles.img} />
            <MealImageWeek meal={2} state={day.meals.merienda} style={styles.img} />
            <MealImageWeek meal={3} state={day.meals.cena} style={styles.img} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export default observer(DayofWeek);

const styles = StyleSheet.create({
  today: {
    borderColor: "#9ccc65",
    borderWidth: 1,
    borderRadius: 10,
  },
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
    marginHorizontal: 4,
    borderRadius: 10,
    opacity: 0.6,
  },
});
