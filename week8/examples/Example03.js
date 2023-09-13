import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example03 = () => {
  //สร้าง object โดยการเก็บตำแหน่งของ object ไว้
  const pan = useRef(new Animated.ValueXY()).current;
  //สร้าง object โดยใช้ในการควบคุมขนาดของอ็อบเจกต์.
  const scale = useRef(new Animated.Value(1)).current;

  //การตอบสนองการเคลื่อนที่
  const panResponder = PanResponder.create({
    //1)-----------------------เริ่มเมื่อผู้ใช้แตะ object
    onStartShouldSetPanResponder: () => true,

    //2)------------------------เมื่อมีการลาก object
    onPanResponderGrant: () => {
      //2.1)ปัจจุบันของการเคลื่อนที่ (ตำแหน่ง X และ Y) 
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      
      //2.2)และกำหนดค่า Offset ใหม่เป็น (0, 0)
      pan.setValue({ x: 0, y: 0 });

      //2.3)สลับขนาด (scaling) เมื่อผู้ใช้เริ่มการเคลื่อนที่
      Animated.spring(scale, {
        //2.3.1) กำหนดให้ค่าของ scale เปลี่ยนไปเป็น 1.5 เมื่อกล่องถูกลาก
        toValue: 1.5,
        friction: 3, //ค่าน้อย-แรงต้านน้อย-เด้งเยอะ
        useNativeDriver: false,
      }).start();
    },

    //3)-----------------------เมื่อมีการเลื่อน
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

    
    //4)---------------------เมื่อปล่อยวัตถุ
    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 10,//ค่ามาก-แรงต้านมาก-เด้งน้อย
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
