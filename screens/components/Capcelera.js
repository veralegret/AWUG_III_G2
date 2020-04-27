import React from "react";
import { Text, View } from "react-native";
import { pageStyles } from "../../styles";

const Capcelera = ({ title }) => {
  return (
    <View style={pageStyles.header}>
      <Text style={pageStyles.titol}>{title}</Text>
    </View>
  );
};

export default Capcelera;
