let candyTokids = {}

function canForKids(n) {
    let k = 0
    let candy = n
    for(let i = 1; i <= n; i++){
       result = candy / i
       if(result % 1 !== 0){
           candy++
           i = 1
       }
    }
    candyTokids[n] = candy
    return candy;
  }

  console.log((nines(3)))
  console.log((nines(4)))
  console.log(candyTokids)
  console.log(candyTokids[4])