import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/main";
import Prologue from "./pages/prologue";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Prologue" component={Prologue} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}