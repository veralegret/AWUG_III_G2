import React from "react";
import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
import { pageStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Dimensions.get("screen").width;
const screenHeigth = Dimensions.get("screen").height;

const EntryPage = () => {
  const navigation = useNavigation();
  return (
    <View style={pageStyles.screen}>
      <View style={styles.background}>
        <Image
          style={styles.img}
          source={require("../assets/img/background.jpeg")}
        />
      </View>
      <TouchableOpacity
        style={styles.botoView}
        onPress={() => {
          return navigation.navigate("MainPage");
        }}
      >
        <Text style={styles.boto}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EntryPage;

const styles = StyleSheet.create({
  background: {
    width: screenWidth,
    flex: 1,
  },
  img: {
    width: screenWidth,
  },
  botoView: {
    backgroundColor: "#fff",
  },
  boto: {
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    color: "#9ccc65",
    borderColor: "#9ccc65",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
