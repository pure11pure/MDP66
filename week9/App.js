import { StyleSheet, Text, View } from 'react-native';
// import คอมโพเนนต์ที่จำเป็น
import MealNavigator from './navigation/MealNavigator';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducer/mealsReducer";

const rootReducer = combineReducers({
  //id : อ้างอิง
  meals: mealsReducer
  })
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealNavigator/>
    </Provider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

