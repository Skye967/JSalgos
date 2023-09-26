function XO(str) {
    let X = 0
    let O = 0
    str.toLowerCase().split("").map(v => v == "x" ? X += 1 : v == "o" ? O += 1 : 0)
    return X == O ? true : false
}
console.log(XO("mm"))