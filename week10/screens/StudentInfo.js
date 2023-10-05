import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class StudentInfo extends Component {
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
        console.log(this.props.route.params)
        const key = this.props.route.params.key;
        const studentDB = firebase
            .firestore()
            .collection("students")
            .doc(key);
        studentDB.get().then((res) => {
            if (res.exists) {
                const student = res.data();
                this.setState({
                    key: res.id,
                    id: student.id,
                    name: student.name,
                    gpa: student.gpa,
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
        console.log(state)
    };

    updateStudent() {
        const updateStudentDB = firebase
            .firestore()
            .collection("students")
            .doc(this.state.key);
        updateStudentDB
            .set({
                id: this.state.id,
                name: this.state.name,
                gpa: this.state.gpa,
            })
            .then(() => {
                Alert.alert(
                    "Updating Alert",
                    "The student was updated!! Pls check your DB!! --> " + this.state.id + " name: " + this.state.name
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
                    <Button title="Update Student" onPress={() => this.updateStudent()} />
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
    button: {
        marginBottom: 15
    }
});

export default StudentInfo;
