function addLeftDigit(digit, num) {

    if (digit >= 1 && digit <= 9) {
        console.log(parseInt(digit + num.toString())) 
    }

    else {
        console.log(`chap tarafga faqat 1 dan 9 gacha bo'lgan raqam qo'yish mumkin`)
    }

}

addLeftDigit(11, 394)