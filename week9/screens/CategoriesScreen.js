import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          // เขียนโค้ดเพิ่ม 
          //("CategoryMeals", {...}) --> การเปลี่ยนหน้าจอ โดย ส่งค่าพารามิเตอร์
          navigation.navigate("CategoryMeals", { categoryId : itemData.item.id , categoryTitle: itemData.item.title,})
          console.log("----->SEND : CategoryMealsScreen.js --> "+"categoryId : " + itemData.item.id , "| categoryTitle : " + itemData.item.title)
        }}
      />

      // ส่วนนี้ <View>...</View>//ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <CategoryGridTile> ข้างต้นแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   {/* พารามิเตอร์ที่รับเข้ามา ซึ่งเป็นข้อมูลของแต่ละรายการในรายการของ CATEGORIES  */}
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  console.log("|PAGE : CategoriesScreen.js -----------------------------------------|")
  return (
    <FlatList 
    // คือข้อมูลที่เราจะแสดงผลในรายการ ในที่นี้คือ CATEGORIES ที่เรา import มาจาก dummy-data.js
      data={CATEGORIES} 
    // เมื่อ FlatList จะแสดงผลรายการแต่ละรายการ มันจะเรียกใช้ฟังก์ชัน renderGridItem ซึ่งคุณได้นิยามไว้ในโค้ด เพื่อสร้างโค้ดสำหรับแสดงผลรายการแต่ละรายการ
      renderItem={renderGridItem} 
    //คือจำนวนคอลัมน์ที่เราต้องการให้แสดงผลในรูปแบบ Grid ในที่นี้เป็น 2 คอลัมน์
      numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างต้นแทน
    // <View>
    //   <Text>Categories Screen555</Text>
    // </View>
  );


};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
