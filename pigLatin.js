// function pigIt(str){
//     let specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
//     return str.split(' ').map((x) => x.split('')).map(
//         (y,i) => !specialChars.test(y.join('')) ? (y.push(y[0] + 'ay') && y.shift() && y.join('')) : y).join(' ')
//   }


function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }
console.log(pigIt('Pig latin is cool'))
