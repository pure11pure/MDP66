import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Example02 extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("subjects");

    this.state = {
      code: "",
      name: "",
      credit: "",
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeSubject() {
    this.subjCollection
      .add({
        code: this.state.code,
        name: this.state.name,
        credit: this.state.credit,
      })
      .then((res) => {
        this.setState({
          code: "",
          name: "",
          credit: "",
        });
        Alert.alert(
          "Adding Alert",
          "New subject was added!! Pls check your DB!!"
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Subject Code"}
          value={this.state.code}
          onChangeText={(val) => this.inputValueUpdate(val, "code")}
        />
        <Input
          placeholder={"Subject Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"Subject Credit"}
          value={this.state.credit}
          onChangeText={(val) => this.inputValueUpdate(val, "credit")}
        />
        <Button title="Add Subject" onPress={() => this.storeSubject()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Example02;
