import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";
import Example05 from "./examples/Example05";
import Example06 from "./examples/Example06";
import Example07 from "./examples/Example07";

import Lab1 from "./examples/Lab7_1";
import Lab2 from "./examples/Lab7_2";
import Lab3 from "./examples/Lab7_3";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function App() {
  // return <Example07 />;
  // return <Lab2 />;
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="app" screenOptions={{ tabBarActiveTintColor: '#fbc23f' }}>
      <Tab.Screen name="Lab1" component={Lab1} options={
        {
          // headerShown: false,
          tabBarLabel: "Spring",
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="zoom-out-map" size={24} color={color} />;
          },
        }
      }/>
      <Tab.Screen name="Lab2" component={Lab2} options={
        {
          // headerShown: false,
          tabBarLabel: "Spring",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="md-reload-outline" size={24} color={color} />;
          },
        }
      } />
      <Tab.Screen name="Lab3" component={Lab3} options={
        {
          // headerShown: false,
          tabBarLabel: "Spring",
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="mixer" size={24} color={color} />;
          },
        }
      }/>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
