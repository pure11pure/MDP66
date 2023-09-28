import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";


// console.log("mealsReducer.js : FAV")

//กำหนด state เริ่มต้นที่จะเก็บใน store
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const findIndexFavorite = state.favoriteMeals.findIndex(
                (meal) => meal.id === action.mealId
            )
            console.log(">>>>> 'CLICK' : mealsReducer.js")
            console.log("test ID: ", action.mealId)
            console.log("findIndexFavorite : " ,findIndexFavorite)
            console.log("have ก่อน: " ,state.favoriteMeals)

            if (findIndexFavorite >= 0) {
                //ถ้า mealId มีอยู่ในรายการรายการโปรด แสดงว่ารายการที่เรากดปุ่มดาว เป็นเมนูที่ชื่นชอบอยู่แล้ว
                const updatedFavoriteMeals = [...state.favoriteMeals];
                updatedFavoriteMeals.splice(findIndexFavorite, 1);
                console.log("UpdateFav : ", updatedFavoriteMeals);
                console.log("\nhave หลัง: " ,state.favoriteMeals)
                return { ...state, favoriteMeals: updatedFavoriteMeals };
            } else {
                // ถ้า mealId ไม่มีอยู่ในรายการรายการโปรด
                const mealToAdd = state.meals.find((meal) => meal.id === action.mealId);
                console.log("AddFav : ", mealToAdd);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(mealToAdd),
                }
            }
                //'...state' : สำเนาของอ็อบเจกต์หรืออาร์เรย์ , คัดลอกค่าจากอ็อบเจกต์หรืออาร์เรย์ต้นฉบับแล้วนำค่าไปวางในอ็อบเจกต์หรืออาร์เรย์ใหม่ที่สร้างขึ้น
                //เราสร้าง state ใหม่ในทุกครั้งที่เปลี่ยนแปลง state เพื่อให้ Redux ตรวจสอบการเปลี่ยนแปลงและจัดการสถานะใหม่
                //การใช้ { ...state } เป็นวิธีการที่คุณสามารถประกอบค่าในอ็อบเจกต์หรืออาร์เรย์ของ state ต้นฉบับอย่างปลอดภัยโดยไม่ส่งผลต่อ state ต้นฉบับ
                //'favoriteMeals' : ใน state ใหม่ให้เป็นผลลัพธ์ของการใช้ concat() เพื่อรวม mealToAdd เข้ากับ favoriteMeals
        default:
            return state;
    }
};

export default mealsReducer;
