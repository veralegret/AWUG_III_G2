import React, { useState, useContext, useEffect } from "react";
import { FlatList, View } from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import DayList from "./components/DayList";

import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react";
import { PM_Context } from "../model/PM_Model";

const ListScreen = () => {
  const pm = useContext(PM_Context);
  const [model, setModel] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    setModel(pm.week);
  }, [isFocused]);

  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Shopping list"></Capcelera>
      <View style={pageStyles.cos}>
        <FlatList
          data={model}
          renderItem={({ item }) => <DayList day={item} />}
          keyExtractor={(item) =>
            "key" + item.day + Math.floor(Math.random() * 100) + 1
          }
        />
      </View>
    </View>
  );
};

ListScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="format-list-bulleted" size={size} color={color} />
);

export default observer(ListScreen);
