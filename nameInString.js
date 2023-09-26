function nameInStr(str, name){
    name = name.toLowerCase()
    console.log(name)
    let replace = new RegExp("[^" + name + "]", 'g')
    let newString = str.toLowerCase().replaceAll(replace, "");
    let count = 0
    for(let i = 0; i < newString.length; i ++){
        
        if(name[count] == newString[i]){
            count++
            console.log(count)
        }
        if(name.length == count){
            return true
        }
    }
  return false;
}
console.log(nameInStr('Across the rivers', 'Chris'))
console.log(nameInStr('Across the rivers', 'chris'))
console.log(nameInStr('Under a sea', 'chris'))
console.log(nameInStr('A crew that boards the ship', 'chris'))