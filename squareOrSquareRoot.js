function squareOrSquareRoot(array) {
    return array.map(item => Math.sqrt(item) % 1 == 0 ? Math.sqrt(item) : Math.pow(item,2) )
  }
  console.log(squareOrSquareRoot([4,3,9,7,2,1]))
  //[2,9,3,49,4,1]