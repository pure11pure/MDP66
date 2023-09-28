import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MyNavigator from "./navigation/MyNavigator";
import testReducer from "./store/reducers/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
});

const store = createStore(rootReducer);

export default function App() {
  // return <MyNavigator />;
  return (
    <Provider store={store}>
      <MyNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
