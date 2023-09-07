import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

export default function App() {

    const animVal = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const animVal1 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const opacity = animVal.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0, 1],
      });

    const rotateX = animVal1.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ["0deg", "360deg", "0deg"],
    });


      const animate = () => {
        console.log("animating");
        Animated.sequence([ 
          Animated.timing(animVal, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animVal1, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ]).start(() => {
          animVal.setValue(0);
          animVal1.setValue(0);
        });
       
      };

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Animated.Image
                    style={[ styles.image , {opacity : opacity }, { transform: [{ rotate: rotateX }]} ]}
                    source={require('../assets/img/IT_Logo.png')}
                />
            </View>
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
        margin:0, width: 180, height: 150,
    }
});
