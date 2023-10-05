import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

class Example01 extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("subjects");

    this.state = {
      subject_list: [],
    };
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
        console.log("res: ", res);
        console.log("res.data() : ", res.data());

      const { code, name, credit } = res.data();
      all_data.push({
        key: res.id,
        code,
        name,
        credit,
      });
    });
    console.log("all_data : ", all_data);
    this.setState({
      subject_list: all_data,
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
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100, marginTop: 50 }}
        />
        {this.state.subject_list.map((item, i) => {
          return (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.code}</ListItem.Title>
                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.credit}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

export default Example01;
