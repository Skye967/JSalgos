function findOdd(A) {
    return A.map((x) => (A.map(i => i === x ? 1 : 0).reduce(
        (a,b) => b+a, 0)) % 2 === 0 ? 0 : x ).filter(y => y !== 0)[0]
  }
  console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))

  function findOdd(A) {
    console.log(5 ^ 2)
    return A.reduce((a, b) => a ^ b);
  }
  console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))