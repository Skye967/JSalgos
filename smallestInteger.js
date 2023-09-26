class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]))
console.log(sif.findSmallestInt([78,56,232,412,228]))