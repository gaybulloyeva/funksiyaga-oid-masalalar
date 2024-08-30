function sortlnc3() {

    let a = prompt()
    let b = prompt()
    let c = prompt()
    let engKichik = Math.min(a, b, c)
    let engKatta = Math.max(a, b, c)

    if (a > engKichik && a < engKatta) {
        console.log(engKichik + "<" + a + "<" + engKatta)
    }

    else if (b > engKichik && b < engKatta) {
        console.log(engKichik + "<" + b + "<" + engKatta)
    }


    else if (c > engKichik && c < engKatta) {
        console.log(engKichik + "<" + c + "<" + engKatta)
    }

}

sortlnc3()

// || b > engKichik && b < engKatta || c > engKichik && c < engKatta