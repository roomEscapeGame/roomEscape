import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View>
            <ImageBackground source={require("./assets/main/22.jpg")} style={styles.bg}>
                <Text style={styles.startButton}>새게임</Text>
                <Text style={styles.startButton}>저장된 게임s</Text>
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
        height: '100%',
        width: '100%',
        height: '100%',
    },
    startButton: {
        backgroundColor: '#aaa',
        width: '80%',
        textAlign: 'center',
        lineHeight: 70,
        marginTop: 5,
        marginBottom: 5,
        color: '#fff',
        fontSize: 24,
    }
})