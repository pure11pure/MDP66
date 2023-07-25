import { StatusBar } from 'expo-status-bar';
//เวลาจะใช้คำสั่งอะไร !!!!!!!อย่าลืม!!!!!! import เข้ามมาด้วย
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 5
            }}>
                <Image
                    style={styles.picture1}
                    source={require('../assets/img/IT_Logo.png')}
                />
                <Text style={{ fontSize: 25 }}>คณะเทคโนโลยีสารสนเทศ</Text>
                <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
            </View>

            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
                <Text style={styles.box1}>PROGRAMS</Text>
                <Text style={styles.box1}>ABOUT US</Text>
            </View>



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

    box1: {
        backgroundColor: '#3399FF',
        height: 30,
        width: 200,
        color: '#fff',
        marginBottom: 5,
        textAlign: 'center',
        padding: 5
    },

    picture1: {
        height: 108,
        width: 130,
    }
});
