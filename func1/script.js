function powerA3() {
    let A = +prompt("1-sonni kiriting")
    let B = prompt("2-sonni kiriting")
    let C = prompt("3-sonni kiriting")
    let D = prompt("4-sonni kiriting")
    let E = prompt("5-sonni kiriting")

    if (A != null && B != null && C != null && D != null && E != null) {
        console.log(A + " ning 3-darajasi: " + (A ** 3))
        console.log(B + " ning 3-darajasi: " + (B ** 3))
        console.log(C + " ning 3-darajasi: " + (C ** 3))
        console.log(D + " ning 3-darajasi: " + (D ** 3))
        console.log(E + " ning 3-darajasi: " + (E ** 3))
    }

    else {
        console, log("error")
    }
}

powerA3()