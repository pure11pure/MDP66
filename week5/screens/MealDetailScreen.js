import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const menu = route.params.categoryTitle;
  console.log("MealDEtail: menu -->  "+menu);
  const step = route.params.categorySteps;
  console.log("MealDEtail: step -->  "+step);
  const image = route.params.categoryImage;
  console.log("MealDEtail: img -->  "+image);
  
  return (
    <View style={styles.screen}>
      <Text>{menu}</Text>
      <Image source={{ uri: route.params.categoryImage }} style={styles.image}/>
      {step.map((step, index) => (
        <Text key={index} style={styles.step}>
          {index + 1}. {step}
        </Text>
      ))}
      <Button
        // style={styles.btn_back}
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginVertical:20
  },
  step:{
    marginVertical:10
  },
  // btn_back:{
  //   margin:50
  // },

});

export default MealDetailScreen;
