function degToRad(d) {
    const pi = Math.PI

    if (d < 360 && d > 0) {
        let result = d * (pi / 180)

        return result
    }

    else {
        return "error"
    }
}


let first = 303
let second = 200
let third = 501

console.log(first + " : " + degToRad(first))
console.log(second + " : " + degToRad(second))
console.log(third + " : " + degToRad(third))