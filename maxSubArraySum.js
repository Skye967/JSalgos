// var maxSequence = function(arr){
//     let test = []
//     let final = 0
//     let restart = 0
//     for(let i = 0; i < arr.length; i ++){
//         test.push(arr[i])
//         let t = test.reduce((a,b) => Number(a) + Number(b), 0)
//         let f = final
//         if(t > f){
//             console.log("new")
//             final = t
//         }
//         console.log(t, f, test)
//         if(i === arr.length - 1){
//             console.log('works')
//             restart ++
//             i = restart - 1
//             test = []
//         }
//     }
//     return final
//   }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSequence([]))

var maxSequence = function(arr){
    let start = 0
    let end = 1
    result = 0
    while(start < arr.length - 1){
        sum = arr.reduce((a,b,c) => c >= start && c <= end ? Number(a) + Number(b) : a, 0)
        if(result < sum){
            result = sum
        }
        end ++
        if(end >= arr.length){
            console.log("start:", arr[start+1])
            end = start + 1
            start ++
        }
    }
    return result
  
  }
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))