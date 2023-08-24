import React from "react";
// import library ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screen ที่เกี่ยวข้อง
import Screen1 from '../screens/CategoriesScreen'
import Screen2 from '../screens/CategoryMealsScreen'
import Screen3 from '../screens/MealDetailScreen'
import FavScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

// สร้าง navigator ตามโจทย์กำหนด
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MealNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white"
      }}>
      <Stack.Screen name="Categories" component={Screen1}
        options={{ title: "Meal Categories" }} />
      <Stack.Screen name="CategoryMeals" component={Screen2}
        options={
          ({ route }) => ({
            title: route.params.categoryTitle,
          })
        }
      />
      <Stack.Screen name="MealDetail" component={Screen3}
        options={
          ({ route }) => ({
            title: route.params.categoryTitle,
          })
        }
      />
    </Stack.Navigator>
  );
}

function FavNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "white"
      }}>
      <Stack.Screen name="CategoryMeals" component={FavScreen}
        options={
          ({ route }) => ({
            title: route.params.categoryTitle,
          })
        }
      />
      <Stack.Screen name="MealDetail" component={Screen3}
        options={
          ({ route }) => ({
            title: route.params.categoryTitle,
          })
        }
      />
    </Stack.Navigator>
  );
}

function MealsFavTabNavigator() {
  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      <Tab.Navigator initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: "orange" },
          headerTintColor: "white"
        }}
      >

        <Tab.Screen name="Meals" component={MealNavigator}
        />
        <Tab.Screen name="Favorite" component={FavNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

function FiltersNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "purple" },
        headerTintColor: "white"
      }}>
      <Stack.Screen name="FiltersScreen" component={FiltersScreen}
      />

    </Stack.Navigator>
  )
}

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      <Drawer.Navigator>
        <Drawer.Screen name="meals" component={MealsFavTabNavigator} />
        <Drawer.Screen name="filter" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
