function longest(s1, s2) {
    return [...new Set(s1.concat(s2))].sort().join("")
  }

console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))