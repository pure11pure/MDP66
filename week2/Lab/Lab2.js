import { StatusBar } from 'expo-status-bar';
//เวลาจะใช้คำสั่งอะไร !!!!!!!อย่าลืม!!!!!! import เข้ามมาด้วย
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native';


export default function App() {
    return (
       
        <View style={styles.container}>
            <View style={styles.top_bar}>
                <Image style={styles.logo} source={require('../assets/img/IT_Logo.png')} />
                <Text style={styles.top_text}>Programs</Text>
            </View>
            <ScrollView>
                <Image style={styles.image} source={require('../assets/img/course-bach-it.jpg')} />
                <TouchableOpacity>
                    <Text style={styles.main_text}>Information Technology</Text>
                </TouchableOpacity>

                <Image style={styles.image} source={require('../assets/img/course-bach-dsba.jpg')} />
                <TouchableOpacity>
                    <Text style={styles.main_text}>Data Science and Business Analytics</Text>
                </TouchableOpacity>

                <Image style={styles.image} source={require('../assets/img/course-bach-bit.jpg')} />
                <TouchableOpacity>
                    <Text style={styles.main_text}>Business Information Technology</Text>
                </TouchableOpacity>

                <Image style={styles.image} source={require('../assets/img/course-bach-ait.jpg')} />
                <TouchableOpacity>
                    <Text style={styles.main_text}>Artificial Intelligence Technology</Text>
                </TouchableOpacity>

            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
