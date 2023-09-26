function highAndLow(numbers){
    let result = numbers.split(' ').map(Number).sort((a,b) => b-a)
    result.splice(1, result.length-2)
    result = String(result.join(' '))
    return result.split(' ').length == 2 ? result : result + ' ' + result
  }
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
  console.log(highAndLow("45"))

//   function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }