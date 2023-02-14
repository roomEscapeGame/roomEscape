import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import Prologue from './pages/prologue'

const Stack = createStackNavigator();

export default function App() {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="New">
            <Stack.Screen name="New" component={Prologue} />
            {/* <Stack.Screen name="Continue" component={DetailsScreen} /> */}
        </Stack.Navigator>
    </NavigationContainer>

    return (
        <View>
            <Text>Start!</Text>
        </View>
    );
}

