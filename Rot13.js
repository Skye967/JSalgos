function rot13(message){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
    let arr = message.split('')
    let index = (t) => alphabet.findIndex(x => x === arr[t].toUpperCase())
    let char = (x) => x >= 13 ? alphabet[x - 13] : alphabet[x + 13]
    return arr.map((c,i) => specialChars.test(c) === true ? c : c === c.toLowerCase() ?
     char(index(i)).toLowerCase() :  char(index(i)).toUpperCase()).join('')
  }
  console.log(rot13("10+2 is twelve"))