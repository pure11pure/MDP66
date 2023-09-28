import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

import React from "react";

import Tab1 from "../screens/Tab1";
import Tab2 from "../screens/Tab2";
import Tab3 from "../screens/Tab3";

const Tab = createBottomTabNavigator();

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "darkblue",
          tabBarStyle: { backgroundColor: "lightblue" },
          tabBarLabelStyle: { fontSize: 15 },
          // headerShown: false,
        }}
      >
        <Tab.Screen
          name="Tab_1"
          component={Tab1}
          options={{
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Tab_1" iconName="ios-alarm" onPress={() => {}} />
              </HeaderButtons>
            ),
          }}
        />
        <Tab.Screen name="Tab_2" component={Tab2} />
        <Tab.Screen name="Tab_3" component={Tab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
