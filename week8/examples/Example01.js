import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example01 = () => {
  //สร้าง object โดยใช้ useRef เพื่อเก็บค่า Animated.ValueXY ซึ่งจะใช้ในการเก็บตำแหน่ง X และ Y ของอ็อบเจกต์ที่ถูกลากและวาง
  const pan = useRef(new Animated.ValueXY()).current;

  //กำหนดเหตุการณ์และการตอบสนองของการลากและวาง ซึ่งรวมถึงการติดตามการเคลื่อนไหวและการปล่อยอ็อบเจกต์ที่ถูกลากและวาง.
  const panResponder = PanResponder.create({

    //1)---------------------------กำหนดว่าการเริ่มใช้ PanResponder ควรเกิดขึ้นเมื่อผู้ใช้แตะ (touch) อ็อบเจกต์
    onStartShouldSetPanResponder: () => true,

    //2----------------------------เมื่อมีการเลื่อน
    onPanResponderMove: Animated.event(
      [
        null,
        {
          // "อัปเดต" ค่า dx และ dy  ของ `pan` ให้ตรงกับการเคลื่อนที่ของผู้ใช้
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),

    //3)-------------------------
    //3.1)มื่อปล่อยการลากและวาง ซึ่งจะทำให้กล่องสลับกลับไปยังตำแหน่งเริ่มต้น (0, 0)
    //3.2)มีการกระเด็น (bounciness) ในการเคลื่อนไหว 
    //3.3)แสดงว่าการแสดงผลการเคลื่อนไหวจะไม่ใช้ Native Driver
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        // [ย้อนกลับมาสู่ตำแหน่งเริ่มต้น (0, 0)] [ความยืดหยุ่น] [ไม่ใช้ Native Driver ในการแสดงผล]
        { toValue: { x: 0, y: 0 }, bounciness: 15, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
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

export default Example01;
