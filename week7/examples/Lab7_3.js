import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

export default function App() {

    const animVal = useRef(new Animated.Value(0.4)).current; // Initial value for opacity: 0
    const animVal1 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const movingMargin = animVal1.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 50, -50, 50, 0],
      });

      const animate = () => {
        console.log("animating");

        Animated.parallel([
            Animated.spring(animVal, {
            toValue: 1,
            friction: 1, //การเด้ง
            tension: 10, //ตวบคุมความเร็ว
            useNativeDriver: true,
            }),
            Animated.timing(animVal1, {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start(() => {
           animVal.setValue(0.4);
           animVal1.setValue(0);
        });
      };

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Animated.Image
                    style={[ styles.image , { transform: [{ scale: animVal }]} ]}
                    source={require('../assets/img/IT_Logo.png')}
                />
            </View>
            <Animated.View style={[ styles.text , { translateX: movingMargin } ]}>
                <Text style={{ color: '#fbc23f', fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 40}}>Welcome to Faculty of IT!!</Text>
            </Animated.View>
            <View style={{top : 200}}>
                <Button title="Spring" onPress={animate}/>
            </View>
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        margin:0, width: 85, height: 70,
    },
    text:{
        fontSize: 28,
        textAlign: "center",
        margin: 10,
    }
});
