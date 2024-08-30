function triangle() {
    let A = +prompt("1-teng tomonli uchburchakning tomonini kiriting")
    let B = +prompt("2-teng tomonli uchburchakning tomonini kiriting")
    let C = +prompt("3-teng tomonli uchburchakning tomonini kiriting")

    if (A > 0 && B > 0 && C > 0) {
        console.log(`kiritilgan teng tomonli uchburchakning primetri: ${A * 3}, yuzasi esa ${Math.sqrt(3) / 4 * (A ** 2)}`)
        console.log(`kiritilgan teng tomonli uchburchakning primetri: ${B * 3}, yuzasi esa ${Math.sqrt(3) / 4 * (B ** 2)}`)
        console.log(`kiritilgan teng tomonli uchburchakning primetri: ${C * 3}, yuzasi esa ${Math.sqrt(3) / 4 * (C ** 2)}`)
    }

    else {
        console.log("error")
    }
}

triangle()
