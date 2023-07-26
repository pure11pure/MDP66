import { StatusBar } from 'expo-status-bar';
//เวลาจะใช้คำสั่งอะไร !!!!!!!อย่าลืม!!!!!! import เข้ามมาด้วย
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';


export default function App() {

    const programs = [
        { id: 1, image: '../assets/img/course-bach-it.jpg', name: 'Information Technology' },
        { id: 2, image: '../assets/img/course-bach-dsba.jpg', name: 'Data Science and Business Analytics' },
        { id: 3, image: '../assets/img/course-bach-bit.jpg', name: 'Business Information Technology' },
        { id: 4, image: '../assets/img/course-bach-ait.jpg', name: 'Artificial Intelligence Technology' },
    ]

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.top_bar}>
                <Image style={styles.logo} source={require('../assets/img/IT_Logo.png')} />
                <Text style={styles.top_text}>Programs</Text>
            </View>
            <FlatList
                data={programs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            {/* <Image style={styles.image} source={require(item.image)} /> */}
                            <TouchableOpacity>
                                <Text style={styles.main_text}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}

            />



            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: "stretch"
    },

    image: {
        width: 400
    },

    main_text: {
        backgroundColor: '#999',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    },

    logo: {
        height: 50,
        width: 61,
        // marginVertical: 40,
    },

    top_text: {
        fontSize: 40,
        fontWeight: 'bold',
        // marginVertical: 40,
        color: '#000099',
    },

    top_bar: {
        height: 130,
        backgroundColor: '#99CCFF',
        width: 400,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40
    }
});
