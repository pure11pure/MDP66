import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';

export default function Example03(){
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
            <FlatList 
                data={students} 
                keyExtractor={(item)=> item.id} 
                renderItem={({item}) => {
                    return (
                        <View style={styles.child}>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
                // ItemSeparatorComponent={() => {
                //     return(
                //         <View style={{
                //             borderBottomColor: 'red',
                //             borderBottomWidth: 10,
                //            // marginHorizontal: 10
                //         }}
                //         />)
                // }}
            />
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
    backgroundColor: 'orange'
  }
})
