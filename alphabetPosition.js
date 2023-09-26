function alphabetPosition(text) {
    let alpha = ["a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
    return newText = text.toLowerCase().replace(/[^a-z]/gi, '').split('').map((x) => alpha.indexOf(x) + 1).join(" ");
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  console.log(alphabetPosition("The narwhal bacons at midnight."))
  console.log(alphabetPosition("|/*jj*^5"))
