function IsPalindrom(n) {
    let numStr = n.toString()
    let reversed = numStr.split('').reverse().join('')

    if (numStr == reversed) {
        return "palindrom"
    }
    else {
        return "palindrom emas"
    }
}


let first = 303
let second = 200
let third = 111
let fourth = 78
let fifth = 444

console.log(first + " : " + IsPalindrom(first))
console.log(second + " : " + IsPalindrom(second))
console.log(third + " : " + IsPalindrom(third))
console.log(fourth + " : " + IsPalindrom(fourth))
console.log(fifth + " : " + IsPalindrom(fifth))