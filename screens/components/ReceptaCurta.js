import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ReceptaCurta = ({
  label,
  image,
  source,
  healthLabels,
  url,
  dietLabels,
  ingredientLines,
  day,
  meal
}) => {
  j
  const navigation = useNavigation();

  const GoToRecipe = ({ title, img, web, icons, font, dieta, ingr }) => {

    navigation.navigate("Recipe", {
      dia: day,
      meal: meal,
      recipe: {
        label: title,
        image: img,
        source: font,
        dietLabels: dieta,
        healthLabels: icons,
        url: web,
        ingredientLines: ingr,
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={() =>
        GoToRecipe({
          title: label,
          img: image,
          web: source,
          icons: healthLabels,
          font: url,
          dieta: dietLabels,
          ingr: ingredientLines,
        })
      }
    >
      <View style={styles.item}>
        <Image style={styles.picture} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{label}</Text>
          <Text style={styles.font}>{source}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReceptaCurta;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 70,
    padding: 10,
    margin: 2,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  picture: {
    height: 45,
    width: 45,
    borderRadius: 23,
    backgroundColor: "#ff6f43",
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 50,
  },
  font: {
    fontSize: 12,
    color: "#666",
  },
});
