function shiftRight3() {

    let a = prompt()
    let b = prompt()
    let c = prompt()

    if (a != null && b != null && c != null) {
        let change1 = a
        a = c
        c = b
        b = change1

        console.log(a, b, c)
    }

}

shiftRight3()
