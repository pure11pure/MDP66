import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

class StudentList extends Component {
    constructor() {
        super();

        this.subjCollection = firebase.firestore().collection("students");

        this.state = {
            student_list: [],
        };
    }

    getCollection = (querySnapshot) => {
        const all_data = [];
        querySnapshot.forEach((res) => {
            console.log("res: ", res);
            console.log("res.data() : ", res.data());

            const { id, name, gpa } = res.data();
            all_data.push({
                key: res.id,
                id,
                name,
                gpa,
            });
        });
        console.log("all_data : ", all_data);
        this.setState({
            student_list: all_data,
        });
    };

    componentDidMount() {
        this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <ScrollView>
                {this.state.student_list.map((item, i) => {
                    return (
                        <ListItem key={i} bottomDivider 
                            onPress={() => {
                                console.log(item)
                                this.props.navigation.navigate("StudentInfo", {
                                    id : item.id, 
                                    name : item.name,
                                    gpa : item.gpa,
                                    key : item.key
                                })
                            }}
                        >
                            <ListItem.Content >
                                <ListItem.Title>{item.id}</ListItem.Title>
                                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                                <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    );
                })}
            </ScrollView>
        );
    }
}

export default StudentList;
