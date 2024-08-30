function swap() {

    let a = prompt()
    let b = prompt()
    let c = prompt()
    let d = prompt()


    if (a != null && b != null) {
        let change1 = a
        a = b
        b = change1
        console.log(a, b)
    }

    if (d != null && c != null) {
        let change2 = c
        c = d
        d = change2
        console.log(c,d)
    }


}

swap()