import React, { useState, useContext } from "react";
import { FlatList, View } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import DayList from "./components/DayList";

import { observer } from "mobx-react";
import { PM_Context } from "../model/PM_Model";

const ListScreen = () => {
  const pm = useContext(PM_Context);

  //pm.week.map((dia)=>{})

  const DataList = () => {
    return (
      <FlatList
        data={pm.week}
        renderItem={({ item }) => <DayList day={item} />}
        keyExtractor={(item) =>
          "key" + item.day + Math.floor(Math.random() * 100) + 1
        }
      />
    );
  };

  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Lista de la compra"></Capcelera>
      <View style={pageStyles.cos}>
        <DataList></DataList>
      </View>
    </View>
  );
};

ListScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="format-list-bulleted" size={size} color={color} />
);

export default observer(ListScreen);
