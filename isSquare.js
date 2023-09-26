var isSquare = function(n){
    console.log(Math.sqrt(n))
    return Math.sqrt(n) % 1 === 0
  }
console.log(isSquare( 9))
console.log(isSquare( 23))