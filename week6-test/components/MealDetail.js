//ไม่ได้ใช้

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealDetail = (props) => {
  return (
    <View style={styles.MealDetail}>
        <Text>{props.title}</Text>
        <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          //("MealDetail", {...}) --> การเปลี่ยนหน้าจอ โดย ส่งค่าพารามิเตอร์
          navigation.navigate("Categories")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
//   MealDetail: {
//     height: 200,
//     width: "100%",
//     backgroundColor: "#f5f5f5",
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   mealRow: {
//     flexDirection: "row",
//   },
//   mealHeader: {
//     height: "85%",
//   },

//   mealDetail: {
//     paddingHorizontal: 10,
//     justifyContent: "space-between",
//     alignItems: "center",
//     height: "15%",
//   },
//   bgImage: {
//     width: "100%",
//     height: "100%",
//     justifyContent: "flex-end",
//   },
//   titleContainer: {
//     backgroundColor: "rgba(0,0,0,0.5)",
//     paddingVertical: 5,
//     paddingHorizontal: 12,
//   },
//   title: {
//     // fontFamily: "open-sans-bold",
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//   },
});

export default MealDetail;
