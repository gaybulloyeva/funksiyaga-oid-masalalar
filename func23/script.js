function quarter(x, y) {

    if (x > 0 && y > 0) {
        return "1-chorakda yotadi"
    }

    else if (x < 0 && y > 0) {
        return "2-chorakda yotadi"
    }

    else if (x < 0 && y < 0) {
        return "3-chorakda yotadi"
    }

    else if (x > 0 && y < 0) {
        return "4-chorakda yotadi"
    }

    else if (x == 0 && (y > 0 || y < 0)) {
        return "OY o'qida yotadi"
    }

    else if (y == 0 && (x > 0 || x < 0)) {
        return "OX o'qida yotadi"
    }

    else if (x == 0 && y == 0) {
        return "koordinatalar boshida yotadi"
    }

}


console.log(quarter(-4,-3))