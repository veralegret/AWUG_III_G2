import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Ingredient = ({ ingredient }) => {
  return (
    <View style={styles.ingr}>
      <View style={styles.iconPlace}>
        <MaterialCommunityIcons
          name="food-variant"
          size={20}
          color="#9ccc65"
          style={styles.icon}
        />
      </View>

      <View>
        <Text style={styles.name}>{ingredient}</Text>
      </View>
    </View>
  );
};

export default Ingredient;

const styles = StyleSheet.create({
  ingr: {
    flexDirection: "row",
    height: 70,
    paddingRight: 50,
    alignItems: "center",
    //borderBottomWidth: 1,
  },
  iconPlace: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderColor: "#9ccc65",
    borderWidth: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
