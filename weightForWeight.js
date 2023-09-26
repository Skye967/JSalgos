function orderWeight(strng) {
    return strng.split(' ').map(x => x.split('')).map(y => y.map(z => Number(z))).sort(
        (a,b) => a.reduce((x,y) => x+y) !== b.reduce((x,y) => x+y) ?
                a.reduce((x,y) => x+y) - b.reduce((x,y) => x+y) :
                (a.map(x => x.toString()).join('') < b.map(x => x.toString()).join('') ? -1 : +1)
        ).map(x => x.map(y => y.toString()).join('')).join(' ')
}
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))

// function orderWeight(s) {
//     return s.split(' ').sort((a,b) => sum(a) - sum(b) || a.localeCompare(b)).join(' ');
//   }
//   function sum(s) { return s.split('').reduce((s,v) => s + +v, 0); }