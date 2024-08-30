function powerA234() {
    let A = prompt("1-sonni kiriting")
    let B = prompt("2-sonni kiriting")
    let C = prompt("3-sonni kiriting")

    if (A != null && B != null && C != null) {
        document.getElementById("demo").innerHTML = A + " ning 2-darajasi: " + (A ** 2) + ", 3-darajasi: " + (A ** 3) + ", 4-darajasi esa: " + (A ** 4) + " " + B + " ning 2-darajasi: " + (B ** 2) + ", 3-darajasi: " + (B ** 3) + ", 4-darajasi esa: " + (B ** 4) + " " + C + " ning 2-darajasi: " + (C ** 2) + ", 3-darajasi: " + (C ** 3) + ", 4-darajasi esa: " + (C ** 4)
    }

    else {
        document.getElementById("demo") = "error"
    }
}

powerA234()
