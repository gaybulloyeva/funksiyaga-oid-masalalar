function isSquare(k) {

    if ((Math.sqrt(k) % 1) == 0) {
        return true
    }

    else {
        return false
    }

}

let firstNum = 4
let secondNum = 18
let thirdNum = 25

console.log(firstNum + " = " + isSquare(firstNum))
console.log(secondNum + " = " + isSquare(secondNum))
console.log(thirdNum + " = " + isSquare(thirdNum))
