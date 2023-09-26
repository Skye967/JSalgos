function doubleChar(str) {
    let tmp = str.split('').map(char => char + char).join('')
    console.log(tmp)
    return str
  }
  doubleChar("abcd")
  