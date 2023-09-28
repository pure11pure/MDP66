import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  console.log("|PAGE : MealsDetailScreen.js-----------------------------------------|")
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  const menu = route.params.mealTitle;
  console.log("MealDEtail: 'menu' -->  " + menu + " | mealId : " + route.params.mealId);
  const steps = route.params.mealSteps;
  // console.log("MealDEtail: 'step' -->  "+step);
  const ingredients = route.params.mealIngredients;
  // console.log("MealDEtail: 'step' -->  "+step);
  const image = route.params.categoryImage;
  // console.log("MealDEtail: 'img' -->  "+image);



  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: route.params.categoryImage }} style={styles.image} />
      <View style={styles.shortDetail}>
        <Text>{route.params.shortDuration}m</Text>
        <Text>{route.params.shortComplexity}</Text>
        <Text>{route.params.shortAffordability}</Text>
      </View>
      <Text style={styles.headerText}>Ingredients</Text>
      {ingredients.map((step, index) => (
        <Text key={index} style={styles.detailText}>
          {index + 1}. {step}
        </Text>
      ))}

      <Text style={styles.headerText}>Steps</Text>
      {steps.map((step, index) => (
        <Text key={index} style={styles.detailText}>
          {index + 1}. {step}
        </Text>
      ))}
      <TouchableOpacity
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          //("MealDetail", {...}) --> การเปลี่ยนหน้าจอ โดย ส่งค่าพารามิเตอร์
          navigation.navigate("Categories")
        }}
        style={styles.btnBack}
      >
        <Text style={styles.btnText}>Go Back to Categories</Text>
      </TouchableOpacity>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 0
  },
  shortDetail: {
    flexDirection: "row",
    paddingHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 1
  },
  btnBack: {
    backgroundColor: "#2296f3",
    paddingVertical: 10,
    alignItems: "center",
    width: 250,
    alignSelf: "center", // จัดให้ปุมอยู่กลางแนวนอน
    marginBottom: 80,
    marginTop: 20
  },
  btnText: {
    color: "#fff",
    fontSize: 14
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10
  },
  detailText: {
    marginVertical: 10,
    paddingHorizontal: 20
  },


});

export default MealDetailScreen;
