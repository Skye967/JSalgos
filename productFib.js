function productFib(prod){
    let fib1 = 1
    let fib2 = 1
    while(fib1 * fib2 < prod){
        fib2 += fib1
        fib1 = fib2 - fib1
    }
    return [fib1, fib2, fib1 * fib2 === prod]
  }
console.log(productFib(193864606))