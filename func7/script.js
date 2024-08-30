function invertDigit() {
    let num = +prompt()
    let newNumber = 0;
    while (num > 1) {
        num = parseInt(num)
        digit = num % 10
        newNumber = newNumber * 10 + digit
        num /= 10
    }
    console.log(newNumber)
}

invertDigit()