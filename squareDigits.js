function squareDigits(num){
    return parseInt(Array.from(String(num)).map(x => Math.pow(x, 2)).join(''))
  }
  console.log(squareDigits(3212))