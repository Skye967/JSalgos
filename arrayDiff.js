function arrayDiff(a, b) {
//return a.filter(e => !b.includes(e));
  return a.map(x => b.find(y => y === x) === x ? '' : x).filter(z => z !== '')
}
console.log(arrayDiff([1,2,3], [1,2]))