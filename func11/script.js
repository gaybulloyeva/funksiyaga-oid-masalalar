function minMax() {

    let a = prompt()
    let b = prompt()
    let c = prompt()
    let d = prompt()

    if (a != null && b != null && c != null && d != null) {
        let engKichik = Math.min(a, b, c, d)
        let engKatta = Math.max(a, b, c, d)

        let x = engKichik
        let y = engKatta


        console.log(`x= ${x}`)
        console.log(`y= ${y}`)
    }

}

minMax()