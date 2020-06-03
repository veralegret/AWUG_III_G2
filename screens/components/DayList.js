import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { observer } from "mobx-react";
import { PM_Context } from "../../model/PM_Model";

var today = new Date().getDay();
var num = new Date().getDate();

const Day = () => {
    return (
        <View style={styles.cont}>
            <Text>Desayuno: []</Text>
            <Text>Comida: []</Text>
            <Text>Merienda: []</Text>
            <Text>Cena: []</Text>
        </View>
    );
}

const DayList = ({ day }) => {
    const pm = useContext(PM_Context);

    var res = 0;
    if (day.day == 0) {
        res = today - 7;
    } else {
        res = today - day.day;
    }
    var dia = num - res;
    var diaSemana = pm.dayOfWeek[day.day];
    if (day.day == today) {
        return (
            <View>
                <Text style={styles.dia}>Today</Text>
                <Day />
            </View>
        );
    }
    else {
        return (
            <View>
                <Text style={styles.dia}>{diaSemana} {dia}</Text>
                <Day />
            </View>
        );
    }


};

export default observer(DayList);

const styles = StyleSheet.create({
    dia: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
    },

    cont: {
        marginLeft: 30,
    }

});