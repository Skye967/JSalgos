function descendingOrder(n){
    return parseInt(Array.from(String(n)).map(Number).sort((a,b) => b-a).join(''))
  }
  console.log(descendingOrder(341562457))