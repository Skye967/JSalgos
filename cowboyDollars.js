
var left = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'],

right = ['',
 '   ,|___|,',
 '   |     |',
 '   |     |',
 '   |     |',
 '   | ==  |',
 '   |     |',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'];
var boots = [left.join('\n'),right.join('\n')];

var tester  = ['',
'   ,|___|,',
'   |[(1)]|',
'   |     |',
'   |[(1)]|',
'   | ==  |',
'   |[(1)]|',
'   /    &|',
".-'`  ,   )****",
'|         |   **',
'`~~~~~~~~~~    ^'];


function cowboysDollars(boots) {
    let found = boots.toString().split("~~~~~~~~~~")
    found[0] = (found[0].match(/\|\[\(+1\)\]\|/g)|| []).length
    found[1] = (found[1].match(/\|\[\(+1\)\]\|/g)|| [] ).length

    console.log(found)
    
    return `This Rhinestone Cowboy has ${found[1]} dollar bills in his right boot and ${found[0]} in the left`
    }

console.log(cowboysDollars(boots))

// function cowboysDollars(b) {
//     var c = s => s.split('|[(1)]|').length-1;
//     return `This Rhinestone Cowboy has ${c(b[1])} dollar bills in his right boot and ${c(b[0])} in the left`;
//   }

//   console.log(cowboysDollars(boots))