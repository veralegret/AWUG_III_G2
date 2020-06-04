import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { observer } from "mobx-react";
import { PM_Context } from "../../model/PM_Model";
import { TouchableOpacity } from "react-native-gesture-handler";

var today = new Date().getDay();
var num = new Date().getDate();

const IngredientsApet = ({ labels }) => {
  const res = labels.map((label) => {
    return <Text>{label}</Text>;
  });
  return res;
};

const MealIngr = ({ meal }) => {
  if (meal != null) {
    return <IngredientsApet labels={meal.ingredientLines} />;
  } else {
    return <Text style={styles.text}>No recipe selected.</Text>;
  }
};

const Day = ({ day }) => {
  //console.log(day);
  let response = null;
  const desayuno = day.meals.desayuno;
  const comida = day.meals.comida;
  const merienda = day.meals.merienda;
  const cena = day.meals.cena;

  return (
    <View style={styles.apets}>
      <TouchableOpacity>
        <Text style={styles.text}>
          Breakfast:
          <MealIngr meal={desayuno} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>
          Lunch:
          <MealIngr meal={comida} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>
          Snack:
          <MealIngr meal={merienda} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>
          Dinner:
          <MealIngr meal={cena} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const DayList = ({ day }) => {
  const pm = useContext(PM_Context);
  //console.log(day.day);
  var res = 0;
  if (day.day == 0) {
    res = today - 7;
  } else {
    res = today - day.day;
  }
  var dia = num - res;
  var diaSemana = pm.dayOfWeek[day.day];
  if (day.day == today) {
    return (
      <View style={styles.container}>
        <Text style={styles.dia}>Today</Text>
        <Day day={day} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.dia}>
          {diaSemana}, {dia}
        </Text>

        <Day day={day} />
      </View>
    );
  }
};

export default observer(DayList);

const styles = StyleSheet.create({
  dia: {
    fontSize: 20,
    marginLeft: 10,
  },

  apets: {
    marginLeft: 30,
  },

  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },

  text: {
    fontSize: 15,
  },
});
