export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

//เพื่อที่จะใช้แจ้งให้ Reducer รู้ว่า มีการทำ action กดปุ่มดาว (เพิ่ม/ลบเมนูให้อยู่ในรายการที่ชื่นชอบ) 
//เพื่อให้ Reducer จัดการกับ state ที่เกี่ยวกับรายการเมนูที่เป็นที่ชื่นชอบ อย่างไร


export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};
