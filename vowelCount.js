function getCount(str) {
    //return  str.split('').map(item => item == 'a' || item == 'e' || item == 'i' ||
    // item == 'o' || item == 'u' ? item : '').join('').length
    return str.match(/[aeiou]/g).length
  }
  console.log(getCount("abrecudobri"))