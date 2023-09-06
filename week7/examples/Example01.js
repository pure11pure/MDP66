import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const Example01 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const fadeIn = () => {
    console.log("fade-in");
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export default Example01;
