function sortdec3() {

    let a = prompt()
    let b = prompt()
    let c = prompt()
    let engKichik = Math.min(a, b, c)
    let engKatta = Math.max(a, b, c)

    if (a > engKichik && a < engKatta) {
        console.log(engKatta + "<" + a + "<" + engKichik)
    }

    else if (b > engKichik && b < engKatta) {
        console.log(engKatta + "<" + b + "<" + engKichik)
    }


    else if (c > engKichik && c < engKatta) {
        console.log(engKatta + "<" + c + "<" + engKichik)
    }

}

sortdec3()
