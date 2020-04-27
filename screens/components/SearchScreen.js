import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TextInput,
  Dimensions,
} from "react-native";

const ReceptaCurta = ({ label, source, image }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.picture} source={{ uri: image }} />
      <View>
        <Text style={styles.name}>{label}</Text>
        <Text style={styles.font}>{source}</Text>
      </View>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

//CONSULTA API
//Es crida quan es vol pintar la llista
const Search = () => {
  const [recipelist, setRecipelist] = useState(null);
  const [text, setText] = useState(null);
  const updateSearch = (val) => {
    setText(val);
  };

  //Hook. Rep una funció (que s'executarà en certs moments) i un array (buit, i si no el poses, el useEfect s'executa cada cop que es refresca la llista)
  useEffect(
    () => {
      fetch(
        "https://api.edamam.com/search?q=" +
          text +
          "&app_id=b8f6fc18&app_key=3ba492833144f23779ec29839285f849&from=0&to=30"
      )
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error))
        .then((json) => {
          const fetchedRecipelist = json.hits.map((recepta) => ({
            label: recepta.recipe.label,
            source: recepta.recipe.source,
            image: recepta.recipe.image,
          }));
          setRecipelist(fetchedRecipelist);
        });
    },
    [
      text,
    ] /* només es crida la funció del useEffect el primer render si està buit - Si canvia algún valor del array "text" es crida el useEffect */
  );

  if (recipelist == null) {
    // Pintar un indicador de progrés
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#ff6f43" />
      </View>
    );
  }

  return (
    <View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Search.."
          onChangeText={(val) => updateSearch(val)}
        />
      </View>
      <FlatList
        data={recipelist}
        renderItem={({ item }) => <ReceptaCurta {...item} />}
        keyExtractor={(recepta) => recepta.label + recepta.image}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  separator: {
    height: 6,
    marginLeft: 65,
    marginRight: 25,
  },
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
  barrabuscador: {
    backgroundColor: "#eee",
    marginBottom: 10,
    marginTop: 10,
    padding: 0,
  },
  inputBuscador: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#9ccc65",
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
});
