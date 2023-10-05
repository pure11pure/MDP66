import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

//import screen
import AddStudent from '../screens/AddStudent';
import StudentList from "../screens/StudentList";
import StudentInfo from "../screens/StudentInfo";


// สร้าง Navigator หลัก
export default function MyNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0085e6',
                    },
                    headerTintColor: '#00058e',
                    headerTitleStyle: {
                        fontWeight: "900",
                        fontSize: 22
                    },
                }}
            >
                <Stack.Screen name="AddStudents"
                    component={AddStudent}
                    options={{
                        title: 'Add Student',
                    }}
                />
                <Stack.Screen name="StudentList"
                    component={StudentList}
                    options={{
                        title: 'Student List',
                    }}
                />
                <Stack.Screen name="StudentInfo"
                    component={StudentInfo}
                    // options={{
                    //     title: 'Student Info',
                        
                    // }}
                    options={({ route }) => ({
                        title: route.params.id,
                    })}
                />
            </Stack.Navigator>

        </NavigationContainer>
    );
}