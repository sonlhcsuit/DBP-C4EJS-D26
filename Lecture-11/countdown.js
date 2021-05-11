// let mydate = new Date("04/30/1975")
// // mm/dd/yyyy
// // new là 1 cái toán tử -> giúp tạo 1 đối tượng dựa trên / constructor
// console.log(typeof mydate.toString())
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toTimeString())
// console.log(mydate.toUTCString())
// console.log(mydate.getTimezoneOffset())
// // hình như ở greenland
// console.log(mydate.valueOf())
// console.log(typeof mydate)


// let mydate = new Date("01/01/1970")

// console.log(mydate.valueOf() )
// console.log(mydate )

// 144000000
// 144000 / 60 (số phút đã trải qua)
// 144000 / 60 (số giờ đã trải qua)
// 144000 / 24 (số ngày đã trải qua)
// được tính từ mốc
// tại thời điểm 0 giờ của GMT + 8 thì chúng ta đã trải qua 40 
// nhưng mà lúc đó thì ở GMT + 0 thì đang là 16h (tức là thiếu 8h nữa)
// 
// ý tưởng cơ bản, là sẽ có 2 date object 
// 1 cái là hiện tại (tức là thời gian hiện tại) -> 1 con số bất kỳ
// 1 cái sẽ là thời gian cần đếm tới (ví dụ như là ngày 05/15/2021) -> 1 con số bất kỳ
// số lớn trừ số nhỏ sẽ được cái khoảng thời gian (là giây!)
// đem khoảng thời gian này -> tạo nên ngày tháng, là bạn sẽ có 
// thời gian đến cái ngày cần đếm tới

// Code trên là code bài giảng, ở dưới là code sửa bài 

let inp = document.querySelector("input[type=date]")
// let inp = document.querySelector("#inp")
let days = document.querySelector("#day")
let hours = document.querySelector("#hour")
let minutes = document.querySelector("#minute")
let seconds = document.querySelector("#second")

let timer = null

function demNgayXaEm(start, deadline) {
    // thời gian đến ngày deadline tính từ current 
    let day = 0
    let hour = 0
    let minute = 0
    let second = 0

    let start_seconds = new Date(start).valueOf()
    let deadline_seconds = new Date(deadline).valueOf()
    // thời gian tính từ ngày bắt đầu (mốc 1/1/1970)
    different_second = (deadline_seconds - start_seconds + ((new Date()).getTimezoneOffset())*60*1000) / 1000
    console.log((new Date()).getTimezoneOffset())
    // different_second = (deadline_seconds - start_seconds + (-7*60*1000)) / 1000

    day = parseInt(different_second / (24 * 60 * 60))
    // 
    different_second = different_second % (24 * 60 * 60)
    // sau khi chia hết cho ngày rồi, thì phần giây dư sẽ bù vào giờ

    hour = parseInt(different_second / (60 * 60))
    different_second = different_second % (60 * 60)

    minute = parseInt(different_second / 60)
    second = different_second % 60

    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}
function render(time){
    days.innerHTML = time.day
    hours.innerHTML= time.hour
    minutes.innerHTML = time.minute
    seconds.innerHTML = time.second
}

inp.addEventListener("change", function () {
    if (timer == null) {
        timer = setInterval(function () {
            let currentDate = new Date()
            let result = demNgayXaEm(currentDate.toString(), inp.value)
            render(result)
        }, 1000)
    }


})

