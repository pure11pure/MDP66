import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example04 = () => {
  //สร้าง object โดยใช้ในการควบคุมขนาดของอ็อบเจกต์
  const scale = useRef(new Animated.Value(1)).current;


  //การตอบสนองการเคลื่อนที่
  const panResponder = PanResponder.create({

    //1)-----------------------เริ่มเมื่อผู้ใช้แตะ object
    onStartShouldSetPanResponder: () => true,

    //2)-----------------------เมื่อมีการเลื่อน
    onPanResponderMove: (evt, gestureState) => {
      // "gestureState" พารามิเตอร์นี้เป็นอ็อบเจกต์ที่บรรจุข้อมูลเกี่ยวกับสถานะของการสัมผัส เช่น ตำแหน่งปัจจุบัน, ความเร็ว, และอื่นๆ

      //2.1) evt.nativeEvent มีข้อมูลเกี่ยวกับอีเวนต์เช่น touches ที่ระบุจำนวนของการสัมผัสแต่ละจุด
      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3, //เพื่อเพิ่มขนาดของอ็อบเจกต์เป็น 3 เท่า
          friction: 3, //เพื่อกำหนดความต้านทานในการเคลื่อนที่
          useNativeDriver: false,
        }).start();
      }
    },

    //3)---------------------เมื่อปล่อยวัตถุ
    onPanResponderRelease: () => {
      Animated.spring(scale, {
        toValue: 1, //คืนขนาดของอ็อบเจกต์
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, { transform: [{ scale: scale }] }]}
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

export default Example04;
