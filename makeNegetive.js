function makeNegative(num) {
    return num > 0 ? parseFloat("-" + num)  : num;
  }
  console.log(makeNegative(42))

//   function makeNegative(num) {
//     return -Math.abs(num);
//   }