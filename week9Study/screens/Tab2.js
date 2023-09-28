import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter } from "../store/actions/testAction";
import { View, Text, StyleSheet, Button } from "react-native";

const Tab2 = (props) => {
  const counter = useSelector((state) => state.test.counter);
  const name = useSelector((state) => state.test.name);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Tab-2 Screen !!</Text>
      <Text>Counter : {counter}</Text>
      <Text>Name : {name}</Text>
      <Button title=" + 1 " onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 20,
  },
});

export default Tab2;
