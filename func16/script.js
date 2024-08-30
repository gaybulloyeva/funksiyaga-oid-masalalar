function ishora(num) {
    if (num > 0) {
        return 1
    }

    else if (num < 0) {
        return -1
    }

    else {
        return 0
    }


}



let a = 5
let b = 0
let result = ishora(a) + ishora(b)
console.log(result)
