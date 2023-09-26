

function triangleType(a, b, c){
    let M = [a,b,c].sort((a,b) => {return a - b})
    
    const angleType = {
        0: "Not triangle",
        1: "Acute",
        2: "Right",
        3: "Obtuse",
    }
    console.log(M)

    if((M[2]*M[2]) >= (M[1]*M[1]+M[0]*M[0])*2){
        return angleType[0]

    } else if ((M[2]*M[2]) < (M[1]*M[1]+M[0]*M[0])){
        return angleType[1]

    } else if ((M[2]*M[2]) == (M[1]*M[1]+M[0]*M[0])){
        return angleType[2]

    } else if ((M[2]*M[2]) > (M[1]*M[1]+M[0]*M[0])){
        return angleType[3]

    } 

    return 0;
  }
console.log(triangleType(7,3,2))
console.log(triangleType(2,4,6))
console.log(triangleType(8,5,7))
console.log(triangleType(3, 4, 5))
console.log(triangleType(7, 12, 8))