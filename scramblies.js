
// console.log("abcdefghijklmnopqrstuvwxyz".repeat(10_000));

function scramble(str1, str2) {
    let letterArr = str2.toLowerCase().split("");
    let re = new RegExp(`[^${str2}]`, 'g')

    str1 = str1.replace(re, '')
    
    for (let i = 0; i < letterArr.length; i++){
        let reg = new RegExp(letterArr[i], 'i')
        if (!str1.includes(letterArr[i])) {
            return false
        } else {
            str1 = str1.replace(reg, "")
            console.log(str1)
        }
    }

  return true;
}
console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjavx", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));