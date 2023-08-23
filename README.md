# MDP66
MOBILE DEVICE PROGRAMMING (SE) 2566

<b>การสร้างแอปพลิเคชันอย่างง่าย</b>
npx create-expo-app <project-name>

<b>run การทำงาน</b>
npx expo start

<b>app</b>
Emulator (Android Studio), web และ Expo Go (Client)

<b>การติดตั้ง library และ dependencies เพื่อใช้ในการทำ Navigation ให้ครบถ้วน</b>
expo install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install @react-navigation/native-stack


<b>ติดตั้ง react-navigation-tabs</b>
• สำหรับ react-navigation เวอร์ชัน 6 ขึ้นไป ต้องมีการติดตั้งไลบรารีเพิ่มเติ่ม เพื่อ
ท าการสร้าง Navigator ในรูปแบบต่างๆ (ในที่นี้ จะสร้าง Tab Navigator)
• npm install --save @react-navigation/bottom-tabs หรือ
• expo install @react-navigation/bottom-tabs
• ศึกษา React navigation เพิ่มเติมได้ที่ :
https://reactnavigation.org/docs/getting-started


<b>Drawer Navigation</b>
• เป็นการท า navigation อีกรูปแบบหนึ่ง ที่มีลักษณะเป็น Slide bar จากด้านซ้ายของจอ
• expo install @react-navigation/drawer (npx install @react-navigation/drawer)
• ติดตั้ง dependencies เพิ่มเติม
• expo install react-native-gesture-handler react-native-reanimated (npx install react-native-gesture-handler react-native-reanimated)
• import { createDrawerNavigator } from "@react-navigation/drawer";
• ใช้ createDrawerNavigator() ในการสร้าง Drawer Navigator และสามารถปรับแต่ง
ค่าการแสดงผลได้ ผ่านการก าหนด options prop หรือ screenOptions (คล้ายกับ
Stack และ Bottom tab navigator)


<b>npm install @react-navigation/native-stack</b>