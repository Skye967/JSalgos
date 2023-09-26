// function twoHighest(arr) {
//     if(arr.length <= 1){
//         return arr
//     }

//     let highest = []
//     highest.push(Math.max(...arr))
    
  
//     let nextHighest = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] != highest[0] && arr[i] > nextHighest){
//             nextHighest = arr[i]
//         }
//     }

//     if(nextHighest != highest[0] && nextHighest != 0){
//         highest.push(nextHighest)
//     }

//     return highest
// }
// console.log(twoHighest([4, 10, 10, 9]))
// console.log(twoHighest([4, 6, 7, 8]))
// console.log(twoHighest([1,1,1]))
// console.log(twoHighest([4]))
// console.log(twoHighest([]))


function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
  }

