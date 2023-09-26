function sumTwoSmallestNumbers(numbers) {  
    return [...new Set(numbers)].filter(x => x >= 0).sort((a, b) => a - b).slice(0,2).reduce((a,b) => a+b)
  }
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([23, -71, -33, -82, -1]))
console.log(sumTwoSmallestNumbers([-23, 71, 33, 82, 0, -1]))