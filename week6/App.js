import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from './screens/CategoriesScreen'
import Screen2 from './screens/CategoryMealsScreen'
import Screen3 from './screens/MealDetailScreen'
import MyNavigator from './navigation/MyNavigator'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Screen1/>

    //--------------------------------------------------------------------
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="S1"
    //     screenOptions={{ 
    //       headerStyle: {backgroundColor: "#4a148c"},
    //       headerTintColor: "white"}}>
    //     <Stack.Screen name="Categories" component={Screen1}
    //       options={{ title: "Meal Categories" }} />
    //     <Stack.Screen name="CategoryMeals" component={Screen2}
    //       options={
    //         ({route}) => ({
    //           title: route.params.categoryTitle,
    //         })
    //       }
    //     />
    //     <Stack.Screen name="MealDetail" component={Screen3}
    //       options={
    //         ({route}) => ({
    //           title: route.params.categoryTitle,
    //         })
    //       }
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //---------------------------------------------------------------------
    <MyNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
