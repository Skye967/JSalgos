function generateHashtag (str) {
    return str.replace(/\s/g, '').length === 0 || str.replace(/\s/g, '').length >= 140 ?
     false : "#" + str.replace(/\b\w/gi,x => x.toUpperCase()).replace(/\s/g, '')
}
// console.log(generateHashtag("do we have A hashtag"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
// console.log(generateHashtag(" ".repeat(200)))
// console.log(generateHashtag("codewars"))
// console.log(generateHashtag("Codewars Is Nice"))
// console.log(generateHashtag("a".repeat(139)))
// console.log(generateHashtag("a".repeat(140)))