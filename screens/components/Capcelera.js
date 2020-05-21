import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { pageStyles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Capcelera = ({ title, back }) => {
  const navigation = useNavigation();
  if (back) {
    return (
      <View style={pageStyles.header}>
        <TouchableOpacity
          style={pageStyles.backBtn}
          onPress={navigation.goBack}
        >
          <AntDesign name="back" size={30} color="#9ccc65" />
        </TouchableOpacity>
        <Text style={pageStyles.titol}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={pageStyles.header}>
        <Text style={pageStyles.titol}>{title}</Text>
      </View>
    );
  }
};

export default Capcelera;
