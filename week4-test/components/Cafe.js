import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Cat from "./Cat";

const Cafe = () => {
  //   const [hungryNum, setHungryNum] = useState(3);
  //   const [fullNum, setFullNum] = useState(0);

  //   const incFullHandler = () => {
  //     setFullNum(fullNum + 1);
  //     setHungryNum(hungryNum - 1);
  //   };

  return (
    <View>
      <Text style={styles.content}>Welcome!</Text>
      <Cat name="Maru" owner="John" />
      <Cat name="Foo" owner="Jane" />
      <Cat name="Jelly" owner="Joe" />

      {/* <Cat name="Maru" owner="John" onIncFull={incFullHandler} />
      <Cat name="Foo" owner="Jane" onIncFull={incFullHandler} />
      <Cat name="Jelly" owner="Joe" onIncFull={incFullHandler} /> */}
      {/* <Text style={styles.content}>
        Hungry: {hungryNum} Full: {fullNum}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
  },
});

export default Cafe;
