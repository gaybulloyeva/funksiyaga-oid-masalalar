function power2(a, n) {
    if (n == 0) {
        return 1
    }

    else if (n > 0) {
        let result = 1

        for (let i = 0; i < Math.abs(n); i++) {
            result = result * a
        }

        return result
    }

    else if (n < 0) {
        let result = 1
        for (let i = 0; i < Math.abs(n); i++) {
            result = result * a
        }

        return 1 / result
    }
}


let n = 3
let m = 0
let k = -2
let a = 3

console.log(a + " ning " + n + "-darajasi " + power2(a, n))
console.log(a + " ning " + m + "-darajasi " + power2(a, m))
console.log(a + " ning " + k + "-darajasi " + power2(a, k))