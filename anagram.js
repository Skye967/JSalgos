function anagrams(word, words) {
    return words.map(x => x.split('').sort().join('') === word.split('').sort().join('') ? x : 0).filter(y => y !== 0)
}
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))