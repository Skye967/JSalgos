function fakeBin(x){
    return x.split('').map(y => y < 5 ? 0 : 1).join('')
    //return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
console.log(fakeBin('45385593107843568'))