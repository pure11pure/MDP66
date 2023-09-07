import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
//เวลาจะใช้คำสั่งอะไร !!!!!!!อย่าลืม!!!!!! import เข้ามมาด้วย
import { Animated, Text, View, StyleSheet, Button, Easing, Image } from "react-native";
// import { StyleSheet, Text, View, Image,  } from 'react-native';


export default function App() {

    const springVal = useRef(new Animated.Value(0.4)).current; // Initial value for opacity: 0

    const spring = () => {
        console.log("spring..");
        Animated.spring(springVal, {
        toValue: 1,
        friction: 1, //การเด้ง
        tension: 10, //ตวบคุมความเร็ว
        // bounciness: 30, //ตวบคุมความเร็ว
        // speed: 20, //ควบคุมการกระเด้ง
        useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.4);
    });
  };
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Animated.Image
                    style={{ margin:0, width: 180, height: 150, transform: [{ scale: springVal }] }}
                    source={require('../assets/img/IT_Logo.png')}
                />
            </View>
            <View style={{top : 200}}>
                <Button title="Spring" onPress={spring}/>
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
});
