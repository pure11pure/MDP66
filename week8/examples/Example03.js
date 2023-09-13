import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example03 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
      Animated.spring(scale, {
        toValue: 1.5,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box, { transform: [{ scale: scale }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default Example03;
