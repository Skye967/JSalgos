var countBits = function(n) {
    return n.toString(2).split("").filter(x => x == "1").length
  };
  console.log(countBits(7))
  console.log(countBits(9))