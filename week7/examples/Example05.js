import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example05 = (props) => {
  const animV1 = useRef(new Animated.Value(0.2)).current; // Initial value for opacity: 0
  const animV2 = useRef(new Animated.Value(0)).current;

  const spin = animV2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animate = () => {
    console.log("animate...");
    Animated.parallel([
      Animated.spring(animV1, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animV2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animV1.setValue(0.2);
      animV2.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: animV1 }] }}
        source={require("../assets/luffy.png")}
      />
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ rotate: spin }] }}
        source={require("../assets/luffy.png")}
      />
      <Button title="Start" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  fadingContainer: {
    width: 250,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
});

export default Example05;
