let revenue = [1,5,7,8,10,8 ,6];
console.log(revenue)

// revenue = 'sadjkhaskj'
// console.log(revenue)
// access tới từng phần tử trong mảng 
// console.log(revenue[2]*10)

// revenue[2]='hello my friend'
// console.log(revenue[2]*10)
// console.log(revenue)

// thêm đầu mảng
revenue.unshift('i am head')
console.log(revenue)
// thêm cuối mảng
revenue.push('I am tail')
console.log(revenue)
// xoá đầu mảng
revenue.shift()
console.log(revenue)
// xoá cuối mảng
revenue.pop()
console.log(revenue)

// delete revenue[2]
console.log(revenue)

console.log(revenue.length)

function insertAt(array,value,index){
    let head = array.slice(0,index)
    let tail = array.slice(index,array.length)
    let full = head.concat([value]).concat(tail)
    return full

}
function deleteAt(array,index){
    let head = array.slice(0,index)
    let tail = array.slice(index+1,array.length)
    let full = head.concat(tail)
    return full
}
console.log(revenue)
revenue = insertAt(revenue,2,3)
console.log(revenue)
revenue = deleteAt(revenue,3)
console.log(revenue)
console.log(revenue.sort((a,b)=>a-b))
