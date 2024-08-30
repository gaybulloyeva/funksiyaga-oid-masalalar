function solve(a, b, c) {
    let D = (b ** 2) - 4 * a * c


    if (a != 0) {
        if (D > 0) {
            let x1 = (-b + Math.sqrt(D)) / 2 * a
            let x2 = (-b - Math.sqrt(D)) / 2 * a

            return x1, x2
        }

        else if (D == 0) {
            let x = -b / (2 * a)

            return x
        }

        else {
            return "haqiqiy yechimi yo'q"
        }
    }

    else {
        console.log("error")
    }

}

let a = 1
let b = -3
let c = 2

let result = solve(a, b, c)
console.log(result)


