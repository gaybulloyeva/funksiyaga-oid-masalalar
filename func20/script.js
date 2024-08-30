function triangleP(a, b) {

    // p
    if (a > 0 && b > 0) {
        let c2 = (a ** 2) + (b ** 2)
        let c = Math.sqrt(c2)

        let P = a + b + c

        console.log(P)
    }

    else {
        console.log("error")
    }
}



triangleP(3, 4)


