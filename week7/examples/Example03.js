import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Example03 = (props) => {
  const animVal = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const mLeft = animVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const opacity = animVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  const movingMargin = animVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0],
  });

  const textSize = animVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 2, 1],
  });

  const rotateX = animVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "180deg", "0deg"],
  });

  const animate = () => {
    console.log("animating");
    Animated.timing(animVal, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      animVal.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.marginContainer, { translateX: mLeft }]} />
      <Animated.View style={[styles.opContainer, { opacity: opacity }]} />
      <Animated.View
        style={[styles.moveContainer, { translateX: movingMargin }]}
      />
      <Animated.View
        style={[styles.textContainer, { transform: [{ scale: textSize }] }]}
      >
        <Text style={{ color: "red" }}>Animated Text!</Text>
      </Animated.View>
      <Animated.View
        style={[styles.rotateContainer, { transform: [{ rotate: rotateX }] }]}
      >
        <Text style={{ color: "white" }}>Hello from Transform X</Text>
      </Animated.View>
      <Button style={{ marginTop: 200 }} title="Click me!" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-around",
  },
  marginContainer: {
    height: 30,
    width: 40,
    backgroundColor: "red",
  },
  opContainer: {
    marginTop: 10,
    height: 30,
    width: 40,
    backgroundColor: "blue",
  },
  moveContainer: {
    marginTop: 10,
    height: 30,
    width: 40,
    backgroundColor: "orange",
  },
  textContainer: {
    marginTop: 10,
    backgroundColor: "green",
    width: 50,
    height: 40,
  },
  rotateContainer: {
    marginTop: 50,
    height: 30,
    width: 40,
    backgroundColor: "black",
  },
});

export default Example03;
