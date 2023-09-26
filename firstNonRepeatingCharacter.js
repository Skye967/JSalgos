function firstNonRepeatingLetter(s) {
    if(s == ""){
        return s
    }
    thisString = s
    
    for(let i = 0; i < s.length; i++){
        letter = thisString[0]
        remove = new RegExp(`${letter}`, 'i')
        removeAll = new RegExp(`${letter}`, 'gi')
        thisString = thisString.replace(remove,'')
        if(!thisString.toLowerCase().includes(letter.toLowerCase())){
            return letter
        }
        thisString = thisString.replace(removeAll,'')
        if(thisString == ""){
            return ""
        }
    }
    return ""
  }

console.log(firstNonRepeatingLetter('abba'))
console.log(firstNonRepeatingLetter('Stress'))
console.log(firstNonRepeatingLetter('moonmen'))

function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }