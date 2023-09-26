function maskify(cc) {
    let result = cc.split("").map((x,i) => i < (cc.toString().length - 4) ? x = "#" : x).join("")
return result
}

console.log(maskify("4556364607935616"))


// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//   }

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
//   }