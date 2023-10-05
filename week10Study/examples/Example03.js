import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Example03 extends Component {
  constructor() {
    super();

    this.state = {
      key: "",
      code: "",
      name: "",
      credit: "",
    };
  }

  componentDidMount() {
    const subjDoc = firebase
      .firestore()
      .collection("subjects")
      .doc("aLbHjyKMCXLRXY94KTZf");
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        this.setState({
          key: res.id,
          code: subj.code,
          name: subj.name,
          credit: subj.credit,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateSubject() {
    const updateSubjDoc = firebase
      .firestore()
      .collection("subjects")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        code: this.state.code,
        name: this.state.name,
        credit: this.state.credit,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The subject was updated!! Pls check your DB!!"
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
        <Button
          title="Update Subject"
          onPress={() => {
            this.updateSubject();
          }}
        />
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

export default Example03;
