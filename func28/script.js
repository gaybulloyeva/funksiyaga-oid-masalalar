function isPrimeN(n) {
    if (n <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

let k = 5
let count = 0

for (let i = 2; i <= k; i++) {
    if (isPrimeN(i)) {
        count++
    }
}


console.log(k + " ta sondan " + count + " tasi tub")