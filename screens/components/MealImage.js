import React from "react";
import { StyleSheet, Image } from "react-native";

const MealImage = ({ meal, state, style }) => {
  switch (meal) {
    case 0:
      if (state) {
        return (
          <Image
            style={style}
            source={require("../../assets/img/true/desayuno.png")}
          />
        );
      } else {
        return (
          <Image
            style={style}
            source={require("../../assets/img/false/desayuno.png")}
          />
        );
      }
      break;
    case 1:
      if (state) {
        return (
          <Image
            style={style}
            source={require("../../assets/img/true/comida.png")}
          />
        );
      } else {
        return (
          <Image
            style={style}
            source={require("../../assets/img/false/comida.png")}
          />
        );
      }
      break;
    case 2:
      if (state) {
        return (
          <Image
            style={style}
            source={require("../../assets/img/true/merienda.png")}
          />
        );
      } else {
        return (
          <Image
            style={style}
            source={require("../../assets/img/false/merienda.png")}
          />
        );
      }
      break;
    case 3:
      if (state) {
        return (
          <Image
            style={style}
            source={require("../../assets/img/true/cena.png")}
          />
        );
      } else {
        return (
          <Image
            style={style}
            source={require("../../assets/img/false/cena.png")}
          />
        );
      }
      break;
  }
};

export default MealImage;

const styles = StyleSheet.create({});
