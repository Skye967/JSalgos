function getSum(a, b)
{
    let sum = 0;
    let count = a;

    if(count >= b){
        while(count >= b){
            sum += count
            count--
        }
    } else{
        while(count <= b){
            sum += count
            count++
        }
    }

    return sum
} 
console.log(getSum(505,4))
console.log(getSum(445,218))
console.log(getSum(-5,5))
console.log(getSum(-2, 8))


// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }


//   function GetSum(a,b)
//   {
//     return (Math.abs(a - b) + 1) * (a+b) / 2;
//   }