// function digital_root(n) {
//     let sum = String(n).split('').map(x => Number(x)).reduce((a,b) => b+a)
//     return sum.toString().length > 1 ? digital_root(sum) : sum
//   }
//   console.log(digital_root(456))


  function digital_root(n) {
      console.log((n) % 9)
    return (n - 1) % 9 + 1;
  }
  console.log(digital_root(16))