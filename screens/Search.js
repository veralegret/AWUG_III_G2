import React from "react";
import { Text, View } from "react-native";
import { pageStyles } from "../styles";
import { FontAwesome } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";
import SearchScreen from "./components/SearchScreen";

const Search = () => {
  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Search"></Capcelera>
      <View style={pageStyles.cos}>
        {/*Anna*/}
        <SearchScreen />
      </View>
    </View>
  );
};
Search.Icon = ({ color, size }) => (
  <FontAwesome name="search" size={size} color={color} />
);

export default Search;
