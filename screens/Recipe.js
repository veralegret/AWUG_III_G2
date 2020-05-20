import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  ScrollViewComponent,
} from "react-native";
import { pageStyles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { SvgUri } from "react-native-svg";
import Capcelera from "./components/Capcelera";
import Ingredient from "./components/Ingredient";

const response = {
  recipe: {
    label: "Chicken Paprikash",
    image:
      "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
    source: "No Recipes",
    url: "http://norecipes.com/recipe/chicken-paprikash/",
    yield: 4.0,
    dietLabels: ["Low-Carb"],
    healthLabels: ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"],
    ingredientLines: [
      "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon butter – cultured unsalted (or olive oil)",
      "240 grams onion sliced thin (1 large onion)",
      "70 grams Anaheim pepper chopped (1 large pepper)",
      "25 grams paprika (about 1/4 cup)",
      "1 cup chicken stock",
      "1/2 cup sour cream",
      "1 tablespoon flour – all-purpose",
    ],
  },
};

const Separator = () => <View style={pageStyles.separator} />;

const RightRoute = () => {
  let ingr = response.recipe.ingredientLines;
  if (ingr == null) {
    return <ActivityIndicator size="large" color="#9ccc65" />;
  } else {
    return (
      <FlatList
        data={ingr}
        renderItem={({ item }) => <Ingredient ingredient={item} />}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={Separator}
      />
    );
  }
};

const LeftRoute = () => {
  let image = response.recipe.image;
  if (image == null) {
    return <ActivityIndicator size="large" color="#9ccc65" />;
  } else {
    return (
      <ScrollView style={pageStyles.cos}>
        <Image
          style={[styles.recipeImg, { height: 300 }]}
          source={{ uri: image }}
        />

        <TouchableHighlight
          onPress={() => {
            Linking.openURL(response.recipe.url);
          }}
        >
          <Text style={pageStyles.boto3}>
            Pasos de la receta en "{response.recipe.source}"
          </Text>
        </TouchableHighlight>

        <View style={pageStyles.fila}>
          <HealthView labels={response.recipe.healthLabels} />
          {/* <FlatList
            data={response.recipe.healthLabels}
            renderItem={({ item }) => <HealthView label={item} />}
            keyExtractor={(item) => item}
          /> */}
        </View>

        <View style={pageStyles.fila}>
          {/* <FlatList
            data={response.recipe.dietLabels}
            renderItem={({ item }) => <DietView label={item} />}
            keyExtractor={(item) => item}
          /> */}
        </View>
      </ScrollView>
    );
  }
};

const HealthView = ({ labels }) => {
  console.log("health");
  const res = labels.map((label) => {
    switch (label) {
      case "Peanut-Free":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/peanut-free.svg")}
            />
          </View>
        );

      case "Sugar-Conscious":
        return (
          <View style={styles.iconsView}>
            <Image
              style={(styles.imatge_etiqueta, { height: 50, width: 50 })}
              source={require("../assets/img/etiquetes/sugar-conscious.png")}
            />
            <Text>{label}</Text>
          </View>
        );

      case "Tree-Nut-Free":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/tree-nut-free.svg")}
            />
          </View>
        );

      case "Gluten-Free":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/gluten-free.svg")}
            />
          </View>
        );

      case "Egg-Free":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/egg-free.svg")}
            />
          </View>
        );

      case "Vegan":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/vegan.svg")}
            />
          </View>
        );

      case "Vegetarian":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/vegetarian.svg")}
            />
          </View>
        );

      case "Vegetarian":
        return (
          <View>
            <Text>{label}</Text>
            <SvgUri
              height="50%"
              width="50%"
              style={styles.imatge_etiqueta}
              uri={require("../assets/img/etiquetes/vegetarian.svg")}
            />
          </View>
        );

      default:
        return (
          <View>
            <View style={pageStyles.fila}>
              <Text style={styles.boleta}>{"\u2B24"}</Text>
              <Text style={styles.text_etiqueta}>{label}</Text>
            </View>
          </View>
        );
    }
  });

  return res;
};

const DietView = ({ label }) => {
  console.log("in");
  return (
    <Image
      style={styles.imatge_etiqueta}
      source={require("../assets/img/etiquetes/no-alcohol.svg")}
    />
  ); /* 
  switch (label) {
    case "Alcohol-Free":
      return (
        <Image
          style={styles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/no-alcohol.svg")}
        />
      );

    case "Low-Carb":
      return (
        <Image
          style={styles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/low-carb.svg")}
        />
      );

    case "High-Protein":
      return (
        <Image
          style={styles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/high-protein.svg")}
        />
      );

    case "High-Fiber":
      return (
        <Image
          style={styles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/high-fiber.svg")}
        />
      );

    default:
      return (
        <View>
          <View style={pageStyles.fila}>
            <Text style={styles.boleta}>{"\u2B24"}</Text>
            <Text style={styles.text_etiqueta}>{label}</Text>
          </View>
        </View>
      );
  } */
};

const initialLayout = { width: Dimensions.get("window").width };

const Recipe = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "left", title: "Receta" },
    { key: "right", title: "Ingredientes" },
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

  return (
    <View style={pageStyles.screen}>
      <Capcelera title={response.recipe.label}></Capcelera>
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

      <TouchableHighlight style={styles.botoView}>
        <Text style={styles.boto_recepta}>SELECCIONAR RECETA</Text>
      </TouchableHighlight>
    </View>
  );
};

Recipe.Icon = ({ color, size }) => (
  <MaterialCommunityIcons name="food-variant" size={size} color={color} />
);

export default Recipe;

const styles = StyleSheet.create({
  recipeImg: {
    width: Dimensions.get("window").width,
  },
  imatge_etiqueta: {
    borderRadius: 30,
    borderColor: "#9ccc65",
    borderWidth: 1,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
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
  text_etiqueta: {
    textAlign: "left",
    textAlignVertical: "center",
    margin: 5,
    color: "grey",
    fontSize: 14,
    width: "auto",
    padding: 5,
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
});
