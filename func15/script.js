function shiftLeft3() {

    let a = prompt()
    let b = prompt()
    let c = prompt()

    if (a != null && b != null && c != null) {
        let change1 = a
        a = b
        b = c
        c = change1

        console.log(a, b, c)
    }

}

shiftLeft3()
