function seven(a){
    return a === undefined ? a = 7 : typeof a === 'string' ? eval('7' + a ) : 7
}

function times(num){
    return '*' + num
}

function five(a){
    return a === undefined ? 5 : typeof a === 'string' ? eval('5' + a) : 5
}



console.log(five(times(seven())))