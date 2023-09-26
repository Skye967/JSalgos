function validParentheses(parens) {
    let arr = parens.split('')
    let num1 = 0
    let num2 = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
            num1++
        }else{
            num2++
        }
        if(num2 > num1){
            return false
        }
    }
    console.log('num1: ', num1, ' num2: ', num2)
    if(num1 > num2){
        return false
    } else {
        return true
    }
  }
console.log(validParentheses("(())"));
console.log(validParentheses("(()))"));
console.log(validParentheses("()()(((())"))
