function likes(names) {
    switch(names.length){
        case 1 :
            return `${names[0]} likes this`

        case 2 :
            return `${names[0]} and ${names[1]} likes this`

        case 3 :
            return `${names[0]}, ${names[1]} and ${names[2]} likes this`

        case 0 :
        return 'no one likes this'

        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`
    }
  }
console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))