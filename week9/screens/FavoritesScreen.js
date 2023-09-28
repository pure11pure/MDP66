import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";


const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <MealList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;