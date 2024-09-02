function radToDeg(R) {
    const pi = Math.PI
    let result = R * (180 / pi)
    return result
}


let first = 303
let second = 200
let third = 501

console.log(first + " rad = " + radToDeg(first) + " deg")
console.log(second + " rad = " + radToDeg(second) + " deg")
console.log(third + " rad = " + radToDeg(third) + " deg")