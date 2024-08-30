function mean() {
    let A = +prompt("1-sonni kiriting")
    let B = +prompt("2-sonni kiriting")
    let C = +prompt("3-sonni kiriting")
    let D = +prompt("4-sonni kiriting")

    //  a b 
    //  a C
    //  a d

    if (A != null && B != null && C != null && D != null) {
        console.log(`A va B sonlarining o'rta arifmetigi: ${(A + B) / 2}, o'rta geometrigi esa: ${Math.sqrt(A * B)}`)
        console.log(`A va C sonlarining o'rta arifmetigi: ${(A + C) / 2}, o'rta geometrigi esa: ${Math.sqrt(A * C)}`)
        console.log(`A va D sonlarining o'rta arifmetigi: ${(A + D) / 2}, o'rta geometrigi esa: ${Math.sqrt(A * D)}`)
    }

    else {
        console.log("error")
    }
}

mean()
