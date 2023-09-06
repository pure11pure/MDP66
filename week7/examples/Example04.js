import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example04 = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0

  const spring = () => {
    console.log("spring..");
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      tension: 10,
      // bounciness: 30,
      // speed: 20,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/luffy.png")}
      />
      <Button title="Spring" onPress={spring} />
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

export default Example04;
