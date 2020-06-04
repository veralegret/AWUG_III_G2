import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import { FlatList } from "react-native-gesture-handler";
import DayofWeek from "./components/DayofWeek";

//model imports
import { observer } from "mobx-react";
import { PM_Context } from "../model/PM_Model";

const Separator = () => <View style={pageStyles.separator} />;

const WeekScreen = observer(() => {
  const pm = useContext(PM_Context);

  if (pm.week == null) {
    return (
      <View style={pageStyles.screen}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Semana"></Capcelera>
      <View style={pageStyles.cos}>
        <View style={pageStyles.nom_apats_setmana_row}>
          <Text style={pageStyles.nom_apats_setmana}></Text>
          <Text style={pageStyles.nom_apats_setmana_1}>Breakfast</Text>
          <Text style={pageStyles.nom_apats_setmana_2}>Luch</Text>
          <Text style={pageStyles.nom_apats_setmana_3}>Snack</Text>
          <Text style={pageStyles.nom_apats_setmana_4}>Dinner</Text>
        </View>
        <FlatList
          data={pm.week}
          renderItem={({ item }) => <DayofWeek day={item} />}
          keyExtractor={(item) => "key" + item.day + Math.floor(Math.random() * 100) + 1}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
});
WeekScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="view-week" size={size} color={color} />
);

export default WeekScreen;
