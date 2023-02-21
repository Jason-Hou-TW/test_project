//變數 
var variable = 1;

//變數二代 
let name2 = 2;

//常數 不可assighment
// const count = 3;

// //sp 
// let text = `這是單引號
// 可以有多行`

// //there is also a lambda string
// let a = 'Hello';
// let b = 'User';
// console.log("${a} ${b}")

//notice that copy object and copy string are diffirent 
//copy object 後面另外賦值時 不會切換指標 所以會連動 
//copy string 後面另外賦值時 會切換指標 另闢空間儲存 所以不會連動 相互獨立

//if today need to copy the object or array 
// you can use variable = {obj1} or array = [oldarray] 
//re-wrap to build new object or array , not direct.


//in javascript foreach - > 
//for( let i in array) 這是index 
//for (let i of array ) 這是裡面的value

//array可以過濾 看要弄迴圈塞if 或者是array.filter
//array.filter(m=> m>=5) 回傳>=5的array

//array的每個值要拿出來運算 也可以使用map
//
const hello = (name)=>"Hello ${name}"
const hello2 = (name)=>"Hello2 ${name}"
//export default hello()
export {
    hello,
    hello2
}