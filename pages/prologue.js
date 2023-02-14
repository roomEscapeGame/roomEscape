import React from "react";
import { View, Text, Button } from "react-native";

function Prologue({ navigation }) {
    return (
        <View>
            <Button
                title="Go to Main"
                onPress={() => navigation.navigate("Main")}
            />
        </View>
    );
}

export default Prologue;