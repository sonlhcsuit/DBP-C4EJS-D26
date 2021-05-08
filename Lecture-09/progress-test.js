let my_str = "Mindx"
// let my_str_arr = my_str.split("")
// console.log(my_str_arr.reverse().join(""))

function reverse(str_inp) {
    let result = ""
    // Cho chuỗi kết quả bằng 0
    // Vòng lặp, lặp từ n ngược về 0 đối với chuỗi
    for (let i = str_inp.length - 1; i > -1; i--) {
        result = result + str_inp[i]
        // phần tử thứ i nhưng với thứ tự ngược lại
    }
    return result

}
// let result= reverse(my_str)
// console.log(result)


// UPPPER
// lower
// Capitalize String

let sentence = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
function capitalize(str_inp) {
    // cắt câu ra thành từng từ bằng split 
    let words = str_inp.split(" ")
    // lặp qua các từ và capitalize chữ cái đầu
    let capitalized_words = []
    for (let word of words) {
        let char = word.charCodeAt(0)
        // lấy ra mã ascii của ký tự đầu
        // Kiểm tra xem đã viết hoa chưa 
        if (char >= 97 && char <= 122) {
            // chưa viết hoa (nằm trong khoảng a - z)
            char = char - 32
        }
        // cắt các ký tự của chuỗi ra 
        let chars = word.split("")
        // bỏ ký tự đầu
        chars.shift()
        // thêm ký tự đã viết hoa vào
        chars.unshift(String.fromCharCode(char))
        // thêm vào mảng kết quả
        capitalized_words.push(chars.join(""))
    }

    return capitalized_words.join(" ")
}

// let result = capitalize(sentence)
// console.log(result)


// function unique_set(arr){
//     // iterator, generator
//     let set = new Set(arr)
//     return new Array(...set)
// }
function unique(arr) {
    let result = []
    // Lặp qua các phần tử của mảng arr, kiểm tra xem phần tử đó có ở trong mảng result hay không?
    // nếu đã có rồi thì bỏ qua, chưa có thì thêm vào
    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra xem phần tử thứ i có tồn tại trong mảng result hay không?
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

// let result = unique_set([1,2,3,3,4,5,4,4,4,5,5])
// console.log(result)

// let result = unique([1,2,3,3,4,5,4,4,4,5,5])
// console.log(result)


// function isEvenDigits(number){
//     // không thay đổi parameter
//     let nu = number

//     while(nu > 0){
//         let remainder = nu % 10
//         nu = parseInt(nu/10)
//         if (remainder % 2 == 1){
//             return false
//         }

//     }
//     return true
// }

function isEvenDigits(number) {
    // chuyển số thành chuỗi => sau đó chuyển chuổi thành mảng các chữ số (các chữ số ở dạng string)
    let digits = number.toString().split("")
    result = digits.some((element) => {
        // hàm callback kiểm tra xem chữ số có phải là số lẻ hay không
        return parseInt(element) % 2 == 1
    })
    return !result
}

function allEven(arr) {
    return arr.filter(isEvenDigits)
}
// console.log(isEvenDigits(123545))
// console.log(isEvenDigits(22222))
// console.log(isEvenDigits(1111))
// console.log(allEven([2, 4 , 6, 642, 13, 6, 863, 92]) )


function isValidDate(date_str) {
    // tách từng phần tử của date thành mảng
    let date_information = date_str.split("/")
    // phần tử đầu tiên là day, kế là month, kế là năm
    let day = date_information[0]
    let month = date_information[1]
    let year = date_information[2]
    // tạo object để dễ dàng code
    let date_of_month = {
        "01": 31,
        "03": 31,
        "04": 30,
        "05": 31,
        "06": 30,
        "07": 31,
        "08": 31,
        "09": 30,
        "10": 31,
        "11": 30,
        "12": 31,
    }
    if (month == "02") {
        let feb_date = 28
        if (parseInt(year) % 400 == 0 || (parseInt(year) % 4 == 0 && parseInt(year) % 100 != 0)) {
            feb_date = 29
        }
        return parseInt(day) <= feb_date
    }
    return parseInt(day) <= date_of_month[month]

}


function getNextDate(date_str) {
    // tái sử dụng
    let date_of_month = {
        1: 31,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    }
    // Nếu ngày không hợp lệ thì trả về kết quả
    if (!isValidDate(date_str)) {
        return "00/00/0000"
    }
    // Nếu hợp lệ thì làm tiếp
    let date_information = date_str.split("/")
    let day = parseInt(date_information[0])
    let month = parseInt(date_information[1])
    let year = parseInt(date_information[2])

    let isLeap = (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))

    day = day + 1
    if (month == 2) {
        let feb_day = 28
        if (isLeap) {
            feb_day = 29
        }
        if (day > feb_day) {
            // tràn ra tháng mới => chuyển date thành 1 và tăng tháng lên
            day = 1
            month = month + 1
        }
    } else if (day > date_of_month[month]) {
        day = 1
        month = month + 1
    }
    if (month > 12) {
        year = year + 1
        month = 1
    }
    return `${day.toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${year.toString().padStart(4,'0')}`

}

