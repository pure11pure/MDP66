import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
// import { CATEGORIES, MEALS } from "../data/dummy-data"; //จพะเปลี่ยนเป็นการเรียนจาก store
import { useSelector } from "react-redux"; 
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({route, navigation}) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม
          //("MealDetail", {...}) --> การเปลี่ยนหน้าจอ โดย ส่งค่าพารามิเตอร์
          navigation.navigate("MealDetail", { 
            categoryImage : itemData.item.imageUrl , 
            mealTitle: itemData.item.title , 
            mealSteps: itemData.item.steps,
            mealIngredients : itemData.item.ingredients,
            mealId : itemData.item.id,
            shortDuration : itemData.item.duration,
            shortComplexity : itemData.item.complexity,
            shortAffordability : itemData.item.affordability})
          console.log("----->SEND: MealDetailScreen.js --> "+
          "categoryId : " + itemData.item.id , 
          "categoryTitle : " + itemData.item.title)
        }}
      />

      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };


  console.log("|PAGE : CategoryMealsScreen.js---------------------------------------|")
  // ...รับข้อมูล id ของประเภทอาหาราจากหน้า CategoriesScreen...
  const catId = route.params.categoryId;
  console.log("categoryID : ", catId);

  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  console.log("displayedMeals : ", displayedMeals.length);
  // console.log(displayedMeals[0].imageUrl);


  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    // <View>
    //   <Text>Category Meals Screen!!</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
