import React from "react";
//import สิ่งที่จำเป็นสำหรับการเรียกใช้ข้อมูลใน Store
//useSelector -- ดึงข้อมูล state จาก store 
//useDispatch -- จัดการอื่นๆ กับข้อมูลใน store, คอมโพเนนต์จะส่ง Action ที่ต้องการ
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter } from "../store/actions/testAction";
import { View, Text, StyleSheet, Button } from "react-native";

const Tab1 = (props) => {
  const counter = useSelector((state) => state.test.counter);
  const name = useSelector((state) => state.test.name);

  const dispatch = useDispatch();

  const increaseCounterHandler = () => {
    dispatch(increaseCounter("IT-KMITL"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Tab-1 Screen !!</Text>
      <Text>Counter : {counter}</Text>
      <Text>Name : {name}</Text>
      <Button title=" + 1 " onPress={increaseCounterHandler} />
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

export default Tab1;
