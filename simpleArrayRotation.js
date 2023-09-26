function solve (arr) {
    let sorted = arr.map(x => x).sort((a,b)=> a - b) 
    console.log(arr)
    console.log(sorted)
    if(sorted.join("") === arr.join("")){
        return "A"
    }
    if(sorted.reverse().join("") === arr.join("")){
        return "D"
    }

    let temp = arr.slice(arr.length - 2)

	return temp[0] < temp[1] ? "RA" : "RD"
}
console.log(solve([1,2,3,4,5,7]))
console.log(solve([2,3,4,5,7,12]))
console.log(solve([7,12,1,2,3,4,5]))
console.log(solve([9,8,7,6,5]))
console.log(solve([5,9,8,7,6]))