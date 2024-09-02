function Digit(k, n) {
    let numLeng = k.toString().length

    if (n > numLeng) {
        return -1;
    }

    else {
        return "kichikmas"
    }
}


let k = prompt()
let n = prompt()
console.log(Digit(k, n))