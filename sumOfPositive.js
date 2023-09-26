// function positiveSum(arr) {
//     var sum = 0;
//     arr.map((x) => x % 2 == 0 ? sum += x : sum);
//   return sum;
// }
// console.log(positiveSum([1,2,3,4,5]))

function positiveSum(arr) {
  return arr.reduce((a,b) => a + (b > 0 ? b : 0),0) ;
}
console.log(positiveSum([1,2,3,4,5]))