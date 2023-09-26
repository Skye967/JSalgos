

String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, v => v.toUpperCase())
  };
  

  var str = "Trees are never sad look at them every once in awhile they\'re quite Beautiful.";
  console.log(str.toJadenCase())