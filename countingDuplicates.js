function duplicateCount(text){
    const elementCounts = {};
    let newText = text.toLowerCase().split("")
    let count = 0

    newText.forEach(x => {
       elementCounts[x] = (elementCounts[x] || 0) + 1;
      });
      
    for(let key in elementCounts){
        if(elementCounts[key] > 1 ){
            count += 1
        }
    }

    console.log(count)
    return count
  }


//   function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//   }