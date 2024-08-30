function calc(a, b, op) {


    switch (op) {
        case 1:
            result = a - b
            break

        case 2:
            result = a * b
            break

        case 3:
            result = a / b
            break

        default:
            result = a + b
            break
    }
    return result
}

let a = 10
let b = 5


let N1 = calc(a, b, 1)
let N2 = calc(a, b, 2)
let N3 = calc(a, b, 3)
let N4 = calc(a, b, 4)


console.log(`N1: ${N1}`)
console.log(`N2: ${N2}`)
console.log(`N3: ${N3}`)
console.log(`N4: ${N4}`)