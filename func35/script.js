function factN(n) {

    let factorial = 1

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i

    }
    return factorial * factorial
}


let first = 3
let second = 20
let third = 5

console.log(first + " = " + factN(first))
console.log(second + " = " + factN(second))
console.log(third + " = " + factN(third))