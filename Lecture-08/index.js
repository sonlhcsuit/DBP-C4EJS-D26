let myArray = []
for (let i =0;i<10;i++){
    myArray.push(Math.ceil(Math.random()*50))
}

let newArray = []

const f = (x)=>{
    return x*2
}

newArray = myArray.filter( (element,indx,array)=>{
    return element%3 == 0
})

console.log(myArray)
console.log(newArray)


// for (let i = 0; i< myArray.length;i++){
//     newArray.push(f(myArray[i]))
// }

// console.log(myArray)
// console.log(newArray)

function A(name){
    console.log('From A '+ name +' w/ love')
}
function B(callback,callback_param){
    console.log('From B w/ love')
    callback(...callback_param)
}
B(A,['Son'])
