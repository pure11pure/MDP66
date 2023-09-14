import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example02 = () => {
    //สร้าง object โดยการเก็บตำแหน่งของ object ไว้ 
    const pan = useRef(new Animated.ValueXY()).current;
    //สร้าง object โดยใช้ในการควบคุมขนาดของอ็อบเจกต์
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
            console.log("|----------start-----------|")
            console.log("|onPanResponderGrant|")
            // console.log("onPanResponderGrant 1",pan)
            //2.2)และกำหนดค่า Offset ใหม่เป็น (0, 0)
            pan.setValue({ x: 0, y: 0 });
            console.log("onPanResponderGrant 2",pan)
            // //2.3)สลับขนาด (scaling) เมื่อผู้ใช้เริ่มการเคลื่อนที่
            // Animated.spring(scale, {
            //     //2.3.1) กำหนดให้ค่าของ scale เปลี่ยนไปเป็น 1.5 เมื่อกล่องถูกลาก
            //     toValue: 1.5,
            //     friction: 3, //ค่าน้อย-แรงต้านน้อย-เด้งเยอะ
            //     useNativeDriver: false,
            // }).start();
        },


        //3)-----------------------เมื่อมีการเลื่อน
        onPanResponderMove: (evt, gestureState) => {
            // "gestureState" พารามิเตอร์นี้เป็นอ็อบเจกต์ที่บรรจุข้อมูลเกี่ยวกับสถานะของการสัมผัส เช่น ตำแหน่งปัจจุบัน, ความเร็ว, และอื่นๆ

            //3.1) evt.nativeEvent มีข้อมูลเกี่ยวกับอีเวนต์เช่น touches ที่ระบุจำนวนของการสัมผัสแต่ละจุด
            const touches = evt.nativeEvent.touches;
            if (touches.length >= 2) {
                const touchesX_0 = evt.nativeEvent.touches[0].locationX;
                const touchesX_1 = evt.nativeEvent.touches[1].locationX;

                const distance = Math.abs(touchesX_0 - touchesX_1);
                console.log(distance*0.01)
                Animated.spring(scale, {
                    toValue: distance*0.01, //เพื่อเพิ่มขนาดของอ็อบเจกต์เป็น 3 เท่า
                    friction: 3, //เพื่อกำหนดความต้านทานในการเคลื่อนที่
                    useNativeDriver: false,
                }).start();
            }
            //3.2)อัปเดตค่า dx และ dy ของ pan เพื่อควบคุมการเคลื่อนที่ของอ็อบเจกต์
            else {
                pan.x.setValue(gestureState.dx);
                pan.y.setValue(gestureState.dy);
                // console.log('onPanResponderMove-->',gestureState.dx, " : ", gestureState.dy)
            }
        },

        //4)---------------------เมื่อปล่อยวัตถุ
        onPanResponderRelease: () => {
            //4.1)เพื่อลบค่า Offset และให้อ็อบเจกต์เคลื่อนที่ไปยังตำแหน่งที่ถูกลากวางเมื่อปล่อย
            pan.flattenOffset();

            Animated.spring(scale, {
                toValue: 1,
                friction: 3,//ค่ามาก-แรงต้านมาก-เด้งน้อย
                useNativeDriver: false,
            }).start();

            console.log("|onPanResponderRelease|")
            console.log("onPanResponderRelease", pan)
            console.log("|----------end-----------|")

        },
    });

    return (
        <View style={styles.container}>
            {/* ที่เป็นส่วนที่เคลื่อนที่ได้ตามการลากและวางของผู้ใช้ */}
            <Animated.Image
                source={require('../assets/img/IT_Logo.png')}
                // ในการแบ่งคุณสมบัติของ panResponder.panHandlers
                {...panResponder.panHandlers}
                //เพื่อรวมสไตล์ของ pan.getLayout() และ styles.image
                //1. 'pan.getLayout()' กำหนดตำแหน่งของอ็อบเจกต์ตามค่า pan ที่ถูกอัปเดตโดย PanResponder
                //2. 'styles.image' จะกำหนดสไตล์ที่เราต้องการให้กับกล่องที่เคลื่อนที่.
                style={[pan.getLayout(), styles.image, { transform: [{ scale: scale }] }]}
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
    image: {
        width: 125, height: 104
    },
    box: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4,
    },

});

export default Example02;
