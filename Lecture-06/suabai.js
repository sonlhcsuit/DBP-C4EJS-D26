function special2digits(
    // Khai báo input
    number
) {
    let unit = number % 10;
    let ten = Math.trunc(number / 10);
    // Có thể dùng cách này
    // if (unit+ten+unit*ten == number){
    //     return true
    // }else{
    //     return false
    // }
    return (unit + ten + unit * ten == number)
}

// console.log(special2digits(99))

function isNarcissistic(
    // Khai báo input
    number
) {
    let hundred = Math.trunc(number / 100);
    let ten = Math.trunc((number - hundred * 100) / 10);
    let unit = number % 10;

    return unit ** 3 + ten ** 3 + hundred ** 3 == number;
}
// console.log(isNarcissistic(153))

function areaPerimetter(
    // Khai báo input
    width,
    height,
    choice
) {
    if (choice == 'area') {
        return width * height
    } else if (choice == 'perimeter') {
        return (width + height) * 2;
    } else {
        return -1
    }
}
function areaShape(
    // input
    width,
    base,
    choice
) {
    if (choice == 'triangle') {
        return width * base / 2
    } else if (choice == 'pararellogram') {
        return width + base
    } else {
        return -1
    }
}

function pHName(pH) {
    if (pH >= 0 && ph < 7) {
        return "acidic"
    } else if (pH == 7) {
        return "neutral"
    } else if (pH > 7 && pH <= 14) {
        return "alkaline"
    } else {
        return -1
    }
}

function rightAngledTriangle(
    // input 
    number
) {
    let output = ''
    for (let i = 0; i < number; i++) {
        output = output + '#'
        console.log(output)
    }
}

// rightAngledTriangle(4)
function leftAngledTriangle(number) {
    let output = ''
    for (let i = 0; i < number; i++) {
        output = output + '#'
        let spaces = ''
        for (let j = 0; j < number - 1 - i; j++) {
            spaces = spaces + ' '
        }
        console.log(spaces + output)
    }
}

// leftAngledTriangle(6)

function fizzBuzz(number) {
    for (let i = 1; i < number + 1; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)

        }
    }
}
// fizzBuzz(20)

function isPerfectNum(number) {
    let sum = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            sum = sum + i
        }
    }
    sum = sum + 1
    return sum == number
}
console.log(isPerfectNum(496))




