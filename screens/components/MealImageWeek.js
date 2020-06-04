import React from "react";
import { StyleSheet, Image } from "react-native";
import { observer } from "mobx-react";

const MealImageWeek = observer(({ meal, state, style }) => {

  switch (meal) {
    case 0:
      if (state != null) {
        return (
          <Image
            style={style}
            //source={require("../../assets/img/true/desayuno.png")}
            source={{ uri: state.image }}
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
      if (state != null) {
        return (
          <Image
            style={style}
            //source={require("../../assets/img/true/comida.png")}
            source={{ uri: state.image }}
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
      if (state != null) {
        return (
          <Image
            style={style}
            //source={require("../../assets/img/true/merienda.png")}
            source={{ uri: state.image }}
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
      if (state != null) {
        return (
          <Image
            style={style}
            //source={require("../../assets/img/true/cena.png")}
            source={{ uri: state.image }}
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
});

export default MealImageWeek;

const styles = StyleSheet.create({});
