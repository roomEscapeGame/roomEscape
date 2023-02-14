import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

export default function App() {
    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    useEffect(() => {
        changeScreenOrientation();
        NavigationBar.setVisibilityAsync("hidden");
    }, [])
    return (
        <View>
            <StatusBar hidden />
            <ImageBackground source={require("./assets/main/22.jpg")} style={styles.bg}>
                <Text style={styles.startButton}>New</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
                <Text style={styles.startButton}>Continue</Text>
            </ImageBackground>
        </View >
    );


}

const styles = StyleSheet.create({
    bg: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
    startButton: {
        backgroundColor: '#00000077',
        width: '80%',
        textAlign: 'center',
        lineHeight: 70,
        marginTop: 5,
        marginBottom: 5,
        color: '#fff',
        fontSize: 24,
    }
})