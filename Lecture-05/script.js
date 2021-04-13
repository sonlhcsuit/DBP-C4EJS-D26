// đây là một comment
/*
đây cũng là comment luôn,
nhiều 
dòng
*/
// toggle comment => Cmd  + / 
// toggle comment => Ctrl + /

// ==========================================
// giúp các in một giá trị bất kỳ ra màn hình console
// console.log() => function (hàm)
// console.log(1234)
// statements = câu lệnh , biểu thức 

// dữ liệu, giá trị trong JS
// primitive: number(số - integer, float), string (chuỗi), logic
// (boolean - true & false) 
// non-primitive or reference: Array,Object,Function,....

// 123     // số nguyên
// 123.123 // số thực
// 2e3     // số nguyên nhưng mà ở sciencitific mode

// true    
// false 

// "tất cả mọi thứ ở đây là chuỗi"
// 'Đây cũng là chuỗi'
// `dấu này gọi backstick`

// variable 
// từ một từ => giá trị/ dữ liệu cụ thể thông qua biến

// từ khoá var,let,const 

// var variable_name;
// let variable_name;
// const variable_name;

// truy xuất dữ liệu mà biến lưu trữ

// let PI = 3.14159;
// // gán - assignment 
// console.log(PI)
// // dấu "=" là biểu thị của phép gán
// // phép gán cập nhật giá trị mà biến lưu trữ
// PI = 2.71
// console.log(PI)
// // operands(toán hạng) và operator(toán tử)
// // + - * / ** %  



// let minutes = 5.2;
// let seconds = minutes*60
// console.log(minutes)
// console.log(seconds)

let PI = 3.14
PI = 2.7
// Đặt tên biến: 
// 1. Tên biến phải là độc nhất khi ở trong một scope/lexical (phạm vị nhất định)
// 2. Không được bắt đầu bằng số
// 3. Tên biến không được phép trùng với reserved word
// 4. Ký tự a - z A - Z 0 - 9 $ _ . 

// 5*n + 1

// let a = 13
// let b = 4
// let c = 12

// let max_num = (a + b + Math.abs(a - b)) / 2
// max_num = (max_num + c + Math.abs(max_num - c)) / 2
// console.log(max_num)
// let min_num = (a + b - Math.abs(a - b)) / 2
// min_num = (min_num + c - Math.abs(min_num - c)) / 2
// console.log(min_num)
// let mid_num = a + b + c - max_num - min_num
// let result = max_num**2 == min_num**2 + mid_num**2
// console.log(result)

// logic operator
// true && !false

// toán tử so sánh 
// >, <, >=, <=, ==, !=, ===
// == equality
// === identity - thường để làm việc với references

// cấu trúc điều khiển
// vòng lặp - rẽ nhánh 
// while - do while - for
// let i = 10
// while (i < 100){
//     i = i + 1
//     console.log(i)
// }

// do {
//     console.log(i)
// } while (i > 100);

// for  (let i = 0; i< 100 ; i = i + 1 )  {
//     console.log(i)
// }

// rẽ nhánh 
// if (condition){
//     // if - body
// }

// if (condition){
//     // if - body
// }else{
//     // else - body
// }

// if (condition1){
//     // if 1 -body
// }else if (condition2 ){
//     // if 2 - body
// }else if (condition3){
//     // if 3 - body
// }

// switch (value) {
//     case case_value1:
//     // case1 body
//     case case_value2:
//     // case2 body

//     case case_value3:
//     // case3 body
//     break;
//     case case_value4:
//     // case4 body

//     case case_value5:
//     // case5 body
//     case case_value6:
//     // case6 body
//     case case_value7:
//     // case7 body
//     case case_value8:
//     // case8 body
//     case case_value9:
//     // case9 body
//     case case_value10:
//     // case10 body

//     default:

// }


// for (let i =0;i<10;i++){
//     if( i  == 4){
//         break
//     }
//     if( i== 5){
//         continue
//     }else{
//         console.log(i)
//     }
// }

// coercion
console.log(10 + 10)
// + add
console.log(10 - '5')
// + concatenate

// biết cách ép kiểu
// let i = true
// console.log(typeof i)
// let a = 10
// let b = '12.3123'
// b = parseInt(b)
// let c = a + b
// console.log(c)


// function => 

// khai báo hàm
function fname(
    // thực hiện việc khai báo các biến input
    a,
    b,
    c,
    d,
) {
    // function body
    return
    // trả về giá trị output
}
// call, invoke, gọi 

// let a = 100
// let b = 200
// let c = '?'
// let d = '!'
// fname(a, b, c, d)

function isTriplet(canh1, canh2, canh3) {
    // xử lý gì đó
    let max_num = (canh1 + canh2 + Math.abs(canh1 - canh2)) / 2
    max_num = (max_num + canh3 + Math.abs(max_num - canh3)) / 2
    console.log(max_num)
    let min_num = (canh1 + canh2 - Math.abs(canh1 - canh2)) / 2
    min_num = (min_num + canh3 - Math.abs(min_num - canh3)) / 2
    console.log(min_num)
    let mid_num = canh1 + canh2 + canh3 - max_num - min_num
    let result = max_num ** 2 == min_num ** 2 + mid_num ** 2
    // console.log(result)
    return result
}
let a = 13
let b = 12
let c = 5
let result  = isTriplet(a,b,c)
console.log(result)