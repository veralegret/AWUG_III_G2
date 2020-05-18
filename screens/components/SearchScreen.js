import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";

import ReceptaCurta from "./ReceptaCurta";

const Separator = () => <View style={styles.separator} />;

//CONSULTA API
//Es crida quan es vol pintar la llista
const Search = () => {
  const [recipelist, setRecipelist] = useState(null);
  const [text, setText] = useState(null);
  const [textintroduit, setTextIntroduit] = useState(null);
  const updateSearch = () => {
    setText(textintroduit);
  };

  let espera = false;

  //Hook. Rep una funció (que s'executarà en certs moments) i un array (buit, i si no el poses, el useEfect s'executa cada cop que es refresca la llista)
  useEffect(
    () => {
      if (espera == false) {
        espera = true;
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
            espera = false;
          });
      }
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
          placeholder="Search a recipe..."
          onChangeText={(textintroduit) => setTextIntroduit(textintroduit)}
        />
        <TouchableOpacity onPress={() => updateSearch()}>
          <Text style={styles.boto}>SEARCH</Text>
        </TouchableOpacity>
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
  boto: {
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    //marginVertical: 10,
    color: "#9ccc65",
    borderColor: "#9ccc65",
    backgroundColor: "#fff",
  },
});
