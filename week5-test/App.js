import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/CategoriesScreen";
import CategoryMeals from "./screens/CategoryMealsScreen";
import MealDetail from "./screens/MealDetail";


const Stack = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S1"
        screenOptions={{ 
          headerStyle: {backgroundColor: "#4a148c"},
          headerTintColor: "white"}}
      >
        <Stack.Screen name="S1" component={Categories}
          options={{ title: "Meal Categories" }} />
        <Stack.Screen name="S2" component={CategoryMeals}/>
        <Stack.Screen name="S3" component={MealDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Categories/>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
