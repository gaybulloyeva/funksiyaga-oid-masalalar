function addRightDigit(num, digit) {

    if (digit >= 1 || digit <= 9) {
        return parseInt(num.toString() + digit)
    }


}

addRightDigit(23, 5)