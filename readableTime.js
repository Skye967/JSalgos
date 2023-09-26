function humanReadable (seconds) {
    if(seconds > 359999){
        return false
    }
    let hours = Math.floor(seconds/60/60)
    let minutes =  Math.floor(seconds/60) - (hours*60)
    seconds = seconds - (minutes*60) - (hours*60*60)
    let time = [hours, minutes, seconds]
    return time.map(x => x < 10 ? x = '0' + x.toString() : x.toString()).join(':')
  }
console.log(humanReadable(45296))