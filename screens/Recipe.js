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
} from "react-native";
import { pageStyles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
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

//Replantejar per posar cuki la imatge
const LeftRoute = () => {
  let image = response.recipe.image;
  if (image == null) {
    return <ActivityIndicator size="large" color="#9ccc65" />;
  } else {
    return (
      <ScrollView style={pageStyles.cos}>
        <Image
          style={[pageStyles.recipeImg, { height: 300 }]}
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
        <View>
          <View style={pageStyles.fila}>
            <FlatList
              data={response.recipe.healthLabels}
              renderItem={({ item }) => <HealthView label={item} />}
              keyExtractor={(item) => item}
            />
          </View>

          <View style={pageStyles.fila}>
            <FlatList
              data={response.recipe.dietLabels}
              renderItem={({ item }) => <DietView label={item} />}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const HealthView = ({ label }) => {
  let salut = response.recipe.healthLabels;
  switch (label) {
    case "Peanut-Free":
      return (
        <Image
          style={pageStyles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/peanut-free.png")}
        />
      );

    case "Sugar-Conscious":
      return (
        <Image
          style={pageStyles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/sugar-conscious.png")}
        />
      );

    case "Tree-Nut-Free":
      return (
        <Image
          style={pageStyles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/tree-nut-free.png")}
        />
      );

    case "Gluten-Free":
      return (
        <Image
          style={pageStyles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/gluten-free.png")}
        />
      );

    case "Egg-Free":
      return (
        <Image
          style={pageStyles.imatge_etiqueta}
          source={require("../assets/img/etiquetes/egg-free.png")}
        />
      );

    default:
      return (
        <View>
          <View style={pageStyles.fila}>
            <Text style={pageStyles.boleta}>{"\u2B24"}</Text>
            <Text style={pageStyles.text_etiqueta}>{label}</Text>
          </View>
        </View>
      );
  }
};

const DietView = ({ label }) => {
  let dieta = response.recipe.dietLabels;
  if ((dieta = "Low-Carb")) {
    return (
      <Image
        style={pageStyles.imatge_etiqueta}
        source={require("../assets/img/etiquetes/low-carb.png")}
      />
    );
  } else {
    return (
      <View>
        <View style={pageStyles.fila}>
          <Text style={pageStyles.boleta}>{"\u2B24"}</Text>
          <Text style={pageStyles.text_etiqueta}>{label}</Text>
        </View>
      </View>
    );
  }
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
        <Text style={pageStyles.tabText}>{route.title}</Text>
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
              style={pageStyles.tab}
              renderLabel={renderLabel}
            />
          )}
        />
      </View>

      <TouchableHighlight style={pageStyles.botoView}>
        <Text style={pageStyles.boto_recepta}>SELECCIONAR RECETA</Text>
      </TouchableHighlight>
    </View>
  );
};

Recipe.Icon = ({ color, size }) => (
  <MaterialCommunityIcons name="food-variant" size={size} color={color} />
);

export default Recipe;
