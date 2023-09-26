function findOutlier(integers){
    var even = integers.filter(a=>a%2==0);
    var odd = integers.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([3,1,5,7,8]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))
console.log(findOutlier([1,1,3,1,1]))
console.log(findOutlier([-163023478,-47315160, -188195304, 152048710,153197004,-143752570,63689204,141437022,-165945464,-173125608,8659864,173953796,-22047896,-194618722,-23864030,-86019886,173304360,-161838449,53174894, 72383884,-87077748,21459218,-71281214,-151258290,-179942548,100963156,-38342206,-165529600,78280248,149385286,-62396422,78526364,91018262,-26890258,55873322,9635462]))