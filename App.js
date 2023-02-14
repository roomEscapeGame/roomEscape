import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as NavigationBar from 'expo-navigation-bar';
import { modelName } from 'expo-device';

export default function App() {
    const chartWidth = Dimensions.get('window').width;
    let zflipWidth = {};

    if (modelName.indexOf("SM-F7") === 0) {
        zflipWidth = {
            width: chartWidth - 25,
            marginLeft: 25
        }
    } else {
        zflipWidth = {
            width: "100%",
        }
    }

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    useEffect(() => {
        changeScreenOrientation();
        NavigationBar.setVisibilityAsync("hidden");
    }, [])

    return (
        <View style={{ backgroundColor: "#000" }}>
            <StatusBar hidden />
            <ImageBackground source={require("./assets/main/22.jpg")} style={[styles.bg, zflipWidth]}>
                <Text style={styles.startButton}>New</Text>
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
        height: "100%",
        backgroundColor: "#fff",
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