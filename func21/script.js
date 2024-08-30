function sumRange(a, b) {

    if (a > b) {
        return "A katta B dan 0 qiymat qaytariladi"
    }

    let sum = 0
    for (let i = a; i <= b; i++) {
        sum += i
    }
    return sum
}

let a = 2
let b = 6
let c = 10

let sumAB = sumRange(a, b)
let sumBC = sumRange(b, c)

console.log(`a dan b gacha bo'lgan sonlar yig'indisi ${sumAB}`)
console.log(`b dan c gacha bo'lgan sonlar yig'indisi ${sumBC}`)


