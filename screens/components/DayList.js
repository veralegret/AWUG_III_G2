import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { observer } from "mobx-react";
import { PM_Context } from "../../model/PM_Model";
import { useNavigation } from "@react-navigation/native";

var today = new Date().getDay();
var num = new Date().getDate();

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
            <Text>Today</Text>

        );
    }
    else {
        return (
            <Text>{diaSemana} {dia}</Text>
        );
    }


};

export default observer(DayList);

const styles = StyleSheet.create({

});
