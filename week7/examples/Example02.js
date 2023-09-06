import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example02 = (props) => {
  const spinAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const spinning = () => {
    console.log("spinning");
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 5000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {
      spinAnim.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ rotate: spin }] }}
        source={require("../assets/luffy.png")}
      />
      <Button title="Spin" onPress={spinning} />
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

export default Example02;
