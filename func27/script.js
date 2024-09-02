function isPowerN(k, n) {
    if (k == 1) {
        return true
    }
    while (k % n == 0) {
        k /= n
        if (k == 1) {
            return true
        }
    }

    return false
}

for (let i = 1; i <= 100; i++) {
    if (isPowerN(i, 3)) {
        console.log(i + " soni " + 3 + " ning darajasi")
    }
}
