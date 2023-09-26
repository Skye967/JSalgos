function incrementString (strng) {
    let number = strng
    let string = strng
    for(let i = strng.length - 1; i >= 0; i--){
        if(isNaN(strng[i])){
            number=number.slice(i+1,strng.length)
            console.log(number)
            string = string.slice(0,i+1)
            console.log(string)
            for(let x = number.length-1; x >= 0; x--){
                if(number[x]=='9'){
                    
                }
                console.log(Number(number[x]))
            }
            break
        } 

    }
    return ""
  }
console.log(incrementString ("foobar000"))
console.log(incrementString ("foobar00999"))
console.log(incrementString ("foo"))
console.log(incrementString ("009"))
console.log(incrementString ("fo99obar99"))
console.log()