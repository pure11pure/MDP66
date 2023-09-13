import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example02 = () => {
  //สร้าง object โดยการเก็บตำแหน่งของ object ไว้ 
  const pan = useRef(new Animated.ValueXY()).current;

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
      //4.1)เพื่อลบค่า Offset และให้อ็อบเจกต์เคลื่อนที่ไปยังตำแหน่งที่ถูกลากวางเมื่อปล่อย
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      {/* ที่เป็นส่วนที่เคลื่อนที่ได้ตามการลากและวางของผู้ใช้ */}
      <Animated.View
      // ในการแบ่งคุณสมบัติของ panResponder.panHandlers
        {...panResponder.panHandlers}
        //เพื่อรวมสไตล์ของ pan.getLayout() และ styles.box 
        //1. 'pan.getLayout()' กำหนดตำแหน่งของอ็อบเจกต์ตามค่า pan ที่ถูกอัปเดตโดย PanResponder
        //2. 'styles.box' จะกำหนดสไตล์ที่เราต้องการให้กับกล่องที่เคลื่อนที่.
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

export default Example02;
