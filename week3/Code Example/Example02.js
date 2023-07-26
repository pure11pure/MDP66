import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet } from 'react-native';

export default function Example02(){
    const students = [
        {id: 1, name: 'Luffy'}, 
        {id: 2, name: 'Zoro'}, 
        {id: 3, name: 'Nami'}, 
        {id: 4, name: 'Usopp'}, 
        {id: 5, name: 'Sanji'}, 
        {id: 6, name: 'Chopper'}, 
        {id: 7, name: 'Nico Robin'}, 
        {id: 8, name: 'Franky'}, 
        {id: 9, name: 'Brook'}];
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                {/* นำข้อมูลจาก array มาแสดง */}
                {students.map((item) => {
                    return(
                        <View key={item.id} style={styles.child}>
                            <Text>{item.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "stretch"
  },
  scrollview: {
    padding : 4
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    margin: 5,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: 'lightgray'
  }
})
