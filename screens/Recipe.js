import React, { useContext, useState, useEffect, createContext } from "react";
import {
  Text,
  View,
  Dimensions,
  Button,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { pageStyles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Capcelera from "./components/Capcelera";
import Ingredient from "./components/Ingredient";
import { observer } from "mobx-react";
import { PM_Context } from "../model/PM_Model";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const RecipeContext = createContext({});

const Separator = () => <View style={pageStyles.separator} />;

const RightRoute = () => {
  const recipe = useContext(RecipeContext);
  let ingr = recipe.ingredientLines;

  if (ingr == null) {
    return <ActivityIndicator size="large" color="#9ccc65" />;
  } else {
    return (
      <FlatList
        data={ingr}
        renderItem={({ item }) => <Ingredient ingredient={item} />}
        keyExtractor={(item) => item + Math.floor(Math.random() * 100) + 1}
        ItemSeparatorComponent={Separator}
      />
    );
  }
};

const LeftRoute = () => {
  const recipe = useContext(RecipeContext);
  let image = recipe.image;
  if (image == null) {
    return <ActivityIndicator size="large" color="#9ccc65" />;
  } else {
    return (
      <ScrollView style={pageStyles.cos}>
        <Text title={recipe.label} style={styles.text_titol}>
          {recipe.label}
        </Text>

        <Image
          style={[styles.recipeImg, { height: 300 }]}
          source={{ uri: image }}
        />

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(recipe.url);
          }}
        >
          <Text style={styles.stepsBtn}>
            Pasos de la receta en "{recipe.source}"
          </Text>
        </TouchableOpacity>

        <Health healthItem={recipe.healthLabels} />
        <Diet dietItem={recipe.dietLabels} />
      </ScrollView>
    );
  }
};

const Health = ({ healthItem }) => {
  if (healthItem.length > 0) {
    return (
      <View>
        <Text style={styles.highlightText}>Health Labels</Text>
        <View style={styles.highlight}></View>
        <View style={styles.filaIcones}>
          <HealthView labels={healthItem} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const Diet = ({ dietItem }) => {
  if (dietItem.length > 0) {
    return (
      <View>
        <Text style={styles.highlightText}>Diet Labels</Text>
        <View style={styles.highlight}></View>
        <View style={styles.fila}>
          <DietView labels={dietItem} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const HealthView = ({ labels }) => {
  const res = labels.map((label) => {
    switch (label) {
      case "Peanut-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/peanut-free.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Sugar-Conscious":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/sugar-conscious.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Tree-Nut-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/tree-nut-free.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Gluten-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/gluten-free.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Egg-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/egg-free.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Vegan":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/vegan.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Vegetarian":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/vegetarian.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Shellfish-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/shellfish.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "No-oil-added":
        return (
          <View style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/no-oil-added.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Fish-free":
        return (
          <View style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/fish-free.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Read-Meat-Free":
        return (
          <View style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/read-meat-free.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Alcohol-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/no-alcohol.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      default:
        return (
          <View key={label} style={styles.iconsView}>
            <View style={pageStyles.fila}>
              <Text style={styles.boleta}>{"\u2B24"}</Text>
              <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
            </View>
          </View>
        );
    }
  });

  return res;
};

const DietView = ({ labels }) => {
  const res = labels.map((label) => {
    switch (label) {
      case "Alcohol-Free":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/no-alcohol.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Low-Carb":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/low-carb.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "High-Protein":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/high-protein.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "High-Fiber":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/high-fiber.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      case "Low-Fat":
        return (
          <View key={label} style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/low-fat.png")}
            />
            <Text style={styles.text_etiqueta}>{label.toUpperCase()}</Text>
          </View>
        );

      default:
        return (
          <View key={label}>
            <View style={pageStyles.fila}>
              <Text style={styles.text_etiqueta}>
                No diet labels for this recipe
              </Text>
            </View>
          </View>
        );
    }
  });
  return res;
};

const initialLayout = { width: Dimensions.get("window").width };
let choose = false;
let day;
let meal;
let mealDay;
const Recipe = ({ route }) => {
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState({});

  //OPCIÓ 1 : ve desde DayScreen, per tant la recepta està al model
  const pm = useContext(PM_Context);

  useEffect(() => {
    day = route.params != undefined ? route.params.dia : null;
    meal = route.params != undefined ? route.params.meal : null;

    mealDay;
    if (day == 0) {
      mealDay = day + 6;
    } else {
      mealDay = day - 1;
    }
    let response;
    switch (meal) {
      case 0:
        response = pm.week[mealDay].meals.desayuno;
        break;
      case 1:
        response = pm.week[mealDay].meals.comida;
        break;
      case 2:
        response = pm.week[mealDay].meals.merienda;
        break;
      case 3:
        response = pm.week[mealDay].meals.cena;
        break;
    }
    //Si la resposta es null, vens del Search
    if (response == null) {
      //console.log("from search " + response);
      choose = true;
      let recipeSearch = route.params != undefined ? route.params.recipe : null;
      setRecipe(recipeSearch);
    } else {
      //console.log("from model " + response.label);
      choose = false;
      setRecipe(response);
    }
  }, [route.params.dia, route.params.meal]);

  //FINAL OPCIÓ 1

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "left", title: "Information" },
    { key: "right", title: "Ingredients" },
  ]);

  const renderScene = SceneMap({
    left: LeftRoute,
    right: RightRoute,
  });

  const renderLabel = ({ route }) => {
    return (
      <View>
        <Text style={styles.tabText}>{route.title}</Text>
      </View>
    );
  };

  const SelectRecipe = () => {
    const Select = () => {
      pm.updateMeal({ day: mealDay, meal: meal, recipe: recipe });
      navigation.navigate("Week");
    };
    const Delete = () => {
      pm.deleteMeal({ day: mealDay, meal: meal });
      navigation.navigate("Week");
    };

    if (choose) {
      return (
        <TouchableOpacity style={styles.botoView} onPress={Select}>
          <Text style={styles.boto_recepta}>SELECT RECIPE</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.botoView} onPress={Delete}>
          <Text style={styles.boto_recepta}>DELETE RECIPE</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <RecipeContext.Provider value={recipe}>
      <View style={pageStyles.screen}>
        <Capcelera title="Recipe" back={true}></Capcelera>
        <View style={pageStyles.cos}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                getLabelText={({ route: { title } }) => title}
                indicatorStyle={pageStyles.indicator}
                style={styles.tab}
                renderLabel={renderLabel}
              />
            )}
          />
        </View>
        <SelectRecipe />
      </View>
    </RecipeContext.Provider>
  );
};

Recipe.Icon = ({ color, size }) => (
  <MaterialCommunityIcons name="food-variant" size={size} color={color} />
);

export default observer(Recipe);

const styles = StyleSheet.create({
  stepsBtn: {
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 5,
    color: "grey",
    borderColor: "grey",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  fila: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  filaIcones: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width:
      Dimensions.get("window").width > Dimensions.get("window").width
        ? Dimensions.get("window").width
        : Dimensions.get("window").width,
  },
  recipeImg: {
    width: Dimensions.get("window").width,
    marginVertical: 20,
  },
  highlightText: {
    textAlign: "center",
    color: "grey",

    marginTop: 30,
  },
  highlight: {
    height: 2,
    marginHorizontal: 100,
    marginVertical: 10,
    backgroundColor: "#ddd",
  },
  imatge_etiqueta: {
    justifyContent: "center",
    alignItems: "center",
  },
  text_etiqueta: {
    textAlign: "center",
    color: "grey",
    fontSize: 9,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  boleta: {
    textAlign: "left",
    textAlignVertical: "center",
    margin: 5,
    color: "grey",
    fontSize: 8,
    width: "auto",
    paddingHorizontal: 3,
    paddingVertical: 10,
  },
  tab: {
    backgroundColor: "#fafafa",
  },
  tabText: {
    color: "grey",
  },
  botoView: {
    backgroundColor: "#fff",
  },

  boto_recepta: {
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
  iconsView: {
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text_titol: {
    fontSize: 20,
    textAlign: "left",
    marginTop: 10,
    textAlignVertical: "center",
    color: "#9ccc65",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
});
