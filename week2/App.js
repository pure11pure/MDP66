import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab1 from './Lab/Lab1';
import Lab2 from './Lab/Lab2';

export default function App() {
  return (
    // <Lab1/>
    <Lab2/>
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
