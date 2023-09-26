function DNAStrand(dna){
    let result = dna.split("").map(x => x == "A" ? "T" : x == "T" ? "A" : x == "G" ? "C" : x == "C" ? "G" : x ).join("")
    return result
  }
console.log(DNAStrand("ATTGC"))

// function DNAStrand(dna){
//     return dna.split('').map(function(v){ return pairs[v] }).join('');
//   }
  
//   let pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }