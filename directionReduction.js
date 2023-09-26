function dirReduc(arr){
    let i = 0
    while(i !== arr.length){
        switch(arr[i]){
            case "NORTH":
                if(arr[i+1] === "SOUTH"){
                    arr.splice(i,2)
                    i = ''
                }
                break;
            case "SOUTH":
                if(arr[i+1] === "NORTH"){
                    arr.splice(i,2)
                    i = ''
                }
                break;
            case "EAST":
                if(arr[i+1] === "WEST"){
                    arr.splice(i,2)
                    i = ''
                }
                break;
            case "WEST":
                if(arr[i+1] === "EAST"){
                    arr.splice(i,2)
                    i = ''
                }
                break;
        }
         if(i === ''){
             i = 0
         }else{
             i ++
         }
    }
    return arr
  }
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]))