function isValidWalk(walk) {
    if(walk.length !== 10 ){
        return false
    }
    let x = 0
    let y = 0
    for(let i = 0; i < walk.length; i ++){
        switch(walk[i]){
            case "n":
                y += 1
                break;
            case "s":
                y -= 1
                break;
            case "e":
                x += 1
                break;
            case "w":
                x -=1
                break;
        }
    }
    if(x == 0 && y == 0){
        return true
    } else {
        return false
    }

  }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))