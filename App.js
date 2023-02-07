import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

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
            <ImageBackground source={require("./assets/splash.png")} style={styles.bg}>
                <Text style={styles.startButton}>새게임</Text>
                <Text style={styles.startButton}>저장된 게임</Text>
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