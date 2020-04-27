import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  CheckBox,
} from "react-native";
import { pageStyles } from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import Capcelera from "./components/Capcelera";

const ListScreen = () => {
  const [elements, setElements] = useState([
    { nom: "Farina", estat: false, id: "1" },
    { nom: "Tomàquet", estat: false, id: "2" },
    { nom: "Llevat", estat: false, id: "3" },
    { nom: "Formatge", estat: false, id: "4" },
    { nom: "Patates", estat: false, id: "5" },
    { nom: "Salsa brava", estat: false, id: "6" },
    { nom: "Crispetes", estat: false, id: "7" },
    { nom: "Maduixes", estat: false, id: "8" },
    { nom: "Formatge", estat: false, id: "9" },
    { nom: "Formatge", estat: false, id: "10" },
    { nom: "Farina", estat: false, id: "11" },
    { nom: "Tomàquet", estat: false, id: "12" },
    { nom: "Llevat", estat: false, id: "13" },
    { nom: "Formatge", estat: false, id: "14" },
    { nom: "Formatge", estat: false, id: "15" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const [empty, setEmpty] = useState(false);

  const continuar = () => {
    setModalOpen(false);
    setElements([]);
    setEmpty(true);
  };
  const EmptyData = () => {
    if (!empty) {
      return (
        <ScrollView
          style={pageStyles.llista}
          keyExtractor={(elements) => elements.id}
        >
          {elements.map((item) => (
            <View style={pageStyles.item} key={item.id}>
              <TouchableOpacity>
                <Text style={pageStyles.punt}>&#9679;</Text>
              </TouchableOpacity>
              <Text style={pageStyles.text}>{item.nom}</Text>
            </View>
          ))}
        </ScrollView>
      );
    }
    return (
      <View style={pageStyles.columna}>
        <Text style={pageStyles.empty}>No hay ingredientes en la lista</Text>
        <View></View>
      </View>
    );
  };

  return (
    <View style={pageStyles.screen}>
      <Capcelera title="Lista de la compra"></Capcelera>
      <View style={pageStyles.cos}>
        <EmptyData></EmptyData>

        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Text style={pageStyles.boto}>FINALIZAR COMPRA SEMANAL</Text>
        </TouchableOpacity>

        <Modal visible={modalOpen} animationType="slide">
          <View style={pageStyles.modal}>
            <Text style={pageStyles.h1}>CUIDADO!</Text>
            <Text style={pageStyles.textModal}>
              Al finalizar la compra perderá definitivamente la lista!
            </Text>
            <View style={pageStyles.fila}>
              <TouchableOpacity onPress={() => setModalOpen(false)}>
                <Text style={pageStyles.boto3}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={continuar}>
                <Text style={pageStyles.boto2}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

ListScreen.Icon = ({ color, size }) => (
  <MaterialIcons name="format-list-bulleted" size={size} color={color} />
);

export default ListScreen;
