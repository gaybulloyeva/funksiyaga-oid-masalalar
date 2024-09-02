function isPower5(k) {
    if (k == 1) {
        return true
    }
    while (k % 5 == 0) {
        k /= 5
        if (k == 1) {
            return true
        }
    }

    return false
}

for (let i = 1; i <= 100; i++) {
    if (isPower5(i)) {
        console.log(i + " soni 5ning darajasi")
    }
}
