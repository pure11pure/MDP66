import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
export default function Example01() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Example 01</Text>
      <TextInput
        placeholder="Write something here..."
        style={styles.input}
        value={text}
        onChangeText={(input) => {
            setText(input);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  outputtext: {
    fontSize: 20,
  },
  btncontainer: {
    backgroundColor: "#d0efff",
    width: "70%",
  },
  outputcontainer: {
    marginVertical: 10,
  },
});
