//? Web storage Api
//? Local storage มันจะเก็บไว้ในระบบของ browser ของคุณ เป็น key and value มันจะเก็บค่าเป็น string เท่านั้น
//? วิธีแปลงมันต้องใช้ JSON.parse() คือการเปลี่ยน Str ให้เป็น Obj และ JSON.stringify() คือเปลี่ยนให้เป็น string เท่านั้น
//? localStorage.getItem('key', 'value');คือการดึงข้อมูลมา and localStorage.setItem('key', 'value'); บันทึกข้อมูลเข้าไป
//? localStorage.removeItem('key'); คือการลบข้อมูลออกจาก localStorage

//? Session storage มันจะเก็บไว้ในระบบของ browser ของคุณ เป็น key and value แต่จะหมดอายุเมื่อคุณออกจากเบราว์เซอร์
