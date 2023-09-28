import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealsAction"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();




function MealNavigator() {

  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  const navStyle = {
    headerStyle: { backgroundColor: "#4a148c" },
    headerTintColor: "white",
  };

  return (<Stack.Navigator>
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "Meal Categories",
        ...navStyle,
      }}
    />
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => ({
        title: route.params.categoryTitle,
        ...navStyle,
      })}
    />
    <Stack.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={({ route }) => ({
        title: route.params.mealTitle,
        ...navStyle,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Tab_1" iconName="ios-star" onPress={() => { toggleFavoriteHandler(route.params.mealId) }} />
          </HeaderButtons>
        ),
      })}
    />
  </Stack.Navigator>
  )
}


function FavNavigator() {
  const navStyle = {
    headerStyle: { backgroundColor: "#4a148c" },
    headerTintColor: "white",
    headerShown: false,

  };
  return (<Stack.Navigator>
    <Stack.Screen
      name="Categories"
      component={FavoritesScreen}
      options={({ route }) => ({
        ...navStyle,
      })}
    />
    <Stack.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={({ route }) => ({
        title: route.params.mealTitle,
        ...navStyle,
      })}
    />
  </Stack.Navigator>
  )
}


function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'orange' }}>
      <Tab.Screen name="MealsTab" component={MealNavigator} options={
        {
          headerShown: false,
          tabBarLabel: "Meals",
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="silverware" size={size} color={color} />;
          },
        }
      } />
      <Tab.Screen name="Favorites" component={FavNavigator} options={
        {
          // headerShown: false,
          headerStyle: { backgroundColor: "#4a148c" },
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-star" size={size} color={color} />;
          },
        }
      } />
    </Tab.Navigator>
  )
}

// สร้าง Navigator หลัก
export default function MyNavigator() {

  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "orange" }} >
        <Drawer.Screen name="Meals"
          component={TabNavigator}
          options={{ headerShown: false }} />
        <Drawer.Screen name="Filters"
          component={FiltersScreen}
          options={{ headerShown: false }} />
      </Drawer.Navigator>

    </NavigationContainer>

  );
}