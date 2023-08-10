import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const Cat = (props) => {
  //   const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text style={styles.content}>Hello, I am {props.name}!</Text>
      <Text style={styles.content}>My owner is {props.owner}</Text>
      {/* <Text style={styles.content}>I am {isHungry ? "hungry" : "full"}!</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
          props.onIncFull();
        }}
        disabled={!isHungry}
        title={isHungry ? "Feed me, pls!" : "Thanks!"}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
  },
});

export default Cat;
