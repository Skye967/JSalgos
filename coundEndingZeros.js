function countZeros(n) {
    let isPositive = n % 2 == 0 ? 2 : 1
    
    let num = BigInt(isPositive)

    for(let i = isPositive ; i <= n ; i += 2 ){
        num = num * BigInt(i)  
    }

    let arr = num.toString().split("").reverse()

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] != 0){
            return i
        }
    }

    return num;
  }

console.log(countZeros(7))
console.log(countZeros(8))
console.log(countZeros(14))
console.log(countZeros(30))
console.log(countZeros(500))
