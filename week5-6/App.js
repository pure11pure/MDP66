import { StyleSheet, Text, View } from 'react-native';
// import คอมโพเนนต์ที่จำเป็น
import MyNavigator from './navigation/MyNavigator';

export default function App() {
  return (
    <MyNavigator/>
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

