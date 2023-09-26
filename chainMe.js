function chain(input, fs) {
    return fs.map(func => input = func(input))[fs.length-1]
    //return fns.reduce(function(v, fn) { return fn(v) }, v);
    }
console.log(chain(2, [add, mult]))

function add(num) {
    return num + 1;
  }
  
function mult(num) {
    return num * 30;
  }