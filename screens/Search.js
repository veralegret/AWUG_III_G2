import React from "react";
import { Text, View } from "react-native";
import { pageStyles } from "../styles";
import { FontAwesome } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import SearchScreen from "./components/SearchScreen";

const Search = ({ route }) => {

  let day = route.params != undefined ? route.params.dia : null;
  let meal = route.params != undefined ? route.params.meal : null;

  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Search" back={true}></Capcelera>
      <View style={pageStyles.cos}>
        {/*Anna*/}
        <SearchScreen day={day} meal={meal} />
      </View>
    </View>
  );
};
Search.Icon = ({ color, size }) => (
  <FontAwesome name="search" size={size} color={color} />
);

export default Search;
