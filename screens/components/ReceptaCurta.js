import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ReceptaCurta = ({
  label,
  image,
  source,
  healthLabels,
  url,
  yield,
  ingredientLines,
}) => {

  const navigation = useNavigation();

  const GoToRecipe = ({ title, img, web, icons, font, puntuacio, ingr }) => {

    navigation.navigate("Recipe", {
      dia: day,
      meal: meal,
      recipe: {
        label: title,
        image: img,
        source: font,
        healthLabels: icons,
        url: web,
        yield: puntuacio,
        ingredientLines: [ingr],
      },
    });
  };

  /* const GoToRecipe = ({ recipe }) => {
 
     let day = route.params != undefined ? route.params.dia : null;
     let meal = route.params != undefined ? route.params.meal : null;
 
     navigation.navigate("Recipe", { dia: day.day, meal: meal, recipe: {} });
     //navigation.navigate("Search", { dia: day.day, meal: meal });
   };*/

  //onPress={() => GoToRecipe({ recipe: {...item}})}

  return (
    <TouchableOpacity
      onPress={() =>
        GoToRecipe({
          title: label,
          img: image,
          web: source,
          icons: healthLabels,
          font: url,
          puntuacio: yield,
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
