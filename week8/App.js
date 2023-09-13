import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";
import Lab from "./examples/Lab";


// Gesture : การควบคุมแอปพลิเคชันด้วยการเคลื่อนไหวของมือ

export default function App() {
  // return <Example02 />;
  return <Lab />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
