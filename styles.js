import { StyleSheet, Dimensions } from "react-native";

const VERMELL = "#ff6f43";
const VERD = "#9ccc65";
const GRIS_FLUIX = "#ddd";
const GRIS_FORT = "grey";

export const pageStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },

  //Pagina dia i setmana (Judit)
  titol: {
    fontSize: 30,
    textAlign: "left",
    marginTop: 10,
    textAlignVertical: "center",
    color: VERMELL,
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  apats: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 26,
  },
  apats2: {
    flex: 1,
    flexDirection: "row",
    marginTop: 120,
    marginBottom: 20,
    marginLeft: 26,
  },

  apat: {
    width: 150,
    height: 254,
    borderRadius: 8,
    marginRight: 20,
  },

  apat_setmana: {
    width: 63,
    height: 58,
    marginRight: 5,
    borderRadius: 8,
  },

  text_dia: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 16,
    marginTop: 40,
    color: "#3D3D3D",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },

  text_miercoles: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 8,
    marginTop: 40,
    color: "#3D3D3D",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },

  text_domingo: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 40,
    color: "#3D3D3D",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },

  text_dia_num: {
    fontSize: 36,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 0.1,
    color: "#3D3D3D",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },

  setmanal: {
    flex: 1,
    flexDirection: "column",
  },

  container_dia: {
    flex: 1,
    flexDirection: "row",
  },

  container_apat: {
    marginTop: 30,
    marginLeft: 30,
    flex: 1,
    flexDirection: "row",
  },

  container_apat_miercoles: {
    marginTop: 30,
    marginLeft: 22,
    flex: 1,
    flexDirection: "row",
  },

  container_apat_domingo: {
    marginTop: 30,
    marginLeft: 26,
    flex: 1,
    flexDirection: "row",
  },

  button: {
    marginTop: 15,
  },

  //Pagina llista (Enric)
  page: {
    flex: 1,
    width: "100%",
  },
  header: {
    flex: 1 / 9,
    textAlignVertical: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    textAlign: "left",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  backBtn: {
    marginTop: 14,
    marginRight: 15,
    alignItems: "center",
  },
  cos: {
    flex: 8 / 9,
    backgroundColor: "#fafafa",
    paddingHorizontal: 10,
  },
  llista: {
    paddingTop: 15,
  },
  item: {
    flexDirection: "row",
  },
  punt: {
    fontSize: 35,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 30,
    color: GRIS_FLUIX,
  },
  text: {
    fontSize: 18,
    textAlignVertical: "center",
  },
  boto: {
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    color: VERD,
    borderColor: VERD,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  boto2: {
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    color: VERMELL,
    borderColor: VERMELL,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  boto3: {
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    color: GRIS_FORT,
    borderColor: GRIS_FORT,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  modal: {
    marginVertical: 250,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: VERD,
  },

  fila: {
    flexGrow: 1,
    flexDirection: "row",
  },

  columna: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },

  h1: {
    fontSize: 20,
  },

  textModal: {
    marginTop: 20,
    textAlign: "center",
  },

  empty: {
    flexGrow: 1,
    textAlignVertical: "center",
    color: GRIS_FORT,
  },

  barra: {
    height: 1,
    marginLeft: 65,
    marginRight: 25,
    backgroundColor: VERMELL,
  },

  separator: {
    height: 3,
  },

  indicator: {
    backgroundColor: VERMELL,
  },

  text_titol_etiqueta: {
    textAlign: "left",
    textAlignVertical: "center",
    marginLeft: 18,
    margin: 6,
    color: GRIS_FORT,
    fontSize: 18,
  },

  linea_horitzontal: {
    borderBottomColor: GRIS_FLUIX,
    borderBottomWidth: 1.8,
    marginLeft: 5,
    marginRight: 250,
  },
});
