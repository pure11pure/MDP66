import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class AddStudent extends Component {
    constructor() {
        super();

        this.subjCollection = firebase.firestore().collection("students");

        this.state = {
            id: "",
            name: "",
            gpa: "",
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
        console.log(state)
    };

    storeSubject() {
        this.subjCollection
            .add({
                id: this.state.id,
                name: this.state.name,
                gpa: this.state.gpa,
            })
            .then((res) => {
                this.setState({
                    id: "",
                    name: "",
                    gpa: "",
                });
                Alert.alert(
                    "Adding Alert",
                    "New student was added!! Pls check your DB!!"
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
                    placeholder={"Student ID"}
                    value={this.state.id}
                    onChangeText={(val) => this.inputValueUpdate(val, "id")}
                />
                <Input
                    placeholder={"Student Name"}
                    value={this.state.name}
                    onChangeText={(val) => this.inputValueUpdate(val, "name")}
                />
                <Input
                    placeholder={"GPA"}
                    value={this.state.gpa}
                    onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
                />
                <View style={styles.button}>
                    <Button title="Add Student" onPress={() => this.storeSubject()} />
                </View>
                <Button title="View Student" onPress={() => this.props.navigation.navigate("StudentList")} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    button:{
        marginBottom: 15
    }
}); 

export default AddStudent;
