import { useState } from "react";
import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Keyboard } from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  // เก็บข้อมูลที่พิมพ์ลงใน TextInput [ก่อนกด Confirm]
  const [enteredValue, setEnteredValue] = useState('');
  //เก็บข้อมูลที่ผู้เล่นเดา [หลังกด Confirm]
  const [selectedNumber, setSelectedNumber] = useState(0);
  //เก็บค่าบูลีนว่าผู้เล่นได้ทำการกดปุ่ม CONFIRM แล้วหรือไม่
  const [confirmed, setConfirmed] = useState(false);
  //เก็บจำนวนครั้งที่ผู้เล่นเดาตัวเลข
  const [rounds, setRounds] = useState(0);


  let confirmedOutput;

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{selectedNumber}</Text>
        </View>
        {/* <View style={styles.numberContainer}>
          <Text style={styles.number}>{props.correctNumber}</Text>
        </View> */}
        <Text>{(props.correctNumber > selectedNumber) ? "The answer is greater. Round: "+rounds : "The answer is lower. Round: "+rounds}</Text>
      </View>
    );
  }

  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText)
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    setEnteredValue('')
  };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    setSelectedNumber(enteredValue) //
    console.log("enteredValue :",enteredValue)
    console.log("selectedNumber :",selectedNumber)
    setConfirmed(true)
    setEnteredValue('')
    setRounds(rounds+1)
    if(props.correctNumber == enteredValue){
      props.onGameOver(rounds+1)
    }
    // Keyboard.dismiss(); //ซ่อนแป้นพิมพ์หลังจากกดปุ่ม Confirm ได้
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue} 
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height:50,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;
