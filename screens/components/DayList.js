import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { PM_Context } from "../../model/PM_Model";
import { TouchableOpacity } from "react-native-gesture-handler";

var today = new Date().getDay();
var num = new Date().getDate();

const IngredientsApet = ({ labels }) => {
  const res = labels.map((label) => {
    return (
      <View key={label + Math.floor(Math.random() * 100) + 1}>
        <Text style={styles.text_verd}>{label}</Text>
      </View>
    );
  });
  return res;
};

const MealIngr = ({ meal }) => {
  //console.log(meal);
  if (meal != null) {
    return <IngredientsApet labels={meal.ingredientLines} />;
  } else {
    return <Text style={styles.disabled}> No recipe selected.</Text>;
  }
};

const Day = ({ day }) => {
  console.log(day);
  let response = null;
  const desayuno = day.meals.desayuno;
  const comida = day.meals.comida;
  const merienda = day.meals.merienda;
  const cena = day.meals.cena;

  return (
    <View style={styles.apets}>
      <View style={styles.titol2}>
        <Text>Breakfast</Text>
        <MealIngr meal={desayuno} />
      </View>
      <View style={styles.titol2}>
        <Text>Lunch</Text>
        <MealIngr meal={comida} />
      </View>
      <View style={styles.titol2}>
        <Text>Snack</Text>
        <MealIngr meal={merienda} />
      </View>
      <View style={styles.titol2}>
        <Text>Dinner</Text>
        <MealIngr meal={cena} />
      </View>
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
    marginLeft: 20,
  },

  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },

  text_vermell: {
    marginLeft: 10,
    backgroundColor: "#ff6f43",
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    color: "white",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  text_verd: {
    marginLeft: 10,
    backgroundColor: "#9ccc65",
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    color: "white",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  titol2: {
    fontSize: 15,
  },

  disabled: {
    color: "grey",
  },
});
