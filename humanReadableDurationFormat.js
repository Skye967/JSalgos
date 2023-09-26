function formatDuration (seconds) {
    if(seconds === 0){
        return "now"
    }
    let years = seconds >= 31536000 ? Math.floor(seconds/31536000) : 0
    seconds -= (years * 31536000)
    let days = seconds >= 86400 ? Math.floor(seconds/86400) : 0
    seconds -= (days * 86400)
    let hours = seconds >= 3600 ? Math.floor(seconds/3600) : 0
    seconds -= (hours * 3600)
    let minutes = seconds >= 60 ? Math.floor(seconds/60) : 0
    seconds -= (minutes * 60)
    let y = years > 0 ? `${years} ${years > 1 ? "years" : "year"}` : ""
    let d = days > 0 ? `${years > 0 && (hours > 0 || minutes > 0 || seconds > 0) ? "," : ""}${years > 0 && hours === 0 && minutes === 0 && seconds === 0 ? " and" : "" } ${days} ${days > 1 ? "days" : "day" }` : ""
    let h = hours > 0 ? `${(years > 0 || days > 0) && (minutes > 0 || seconds > 0) ? "," : ""}${(years > 0 || days > 0) && minutes === 0 && seconds === 0 ? " and" : "" } ${hours} ${hours > 1 ? "hours" : "hour" }` : ""
    let m = minutes > 0 ? `${(years > 0 || days > 0 || hours > 0 ) && seconds > 0 ? "," : ""}${(years > 0 || days > 0 || hours > 0) && seconds === 0 ? " and" : "" } ${minutes} ${minutes > 1 ? "minutes" : "minute" }` : ""
    let s = seconds > 0 ? `${years > 0 || days > 0 || hours > 0 || minutes > 0 ? " and" : "" } ${seconds} ${seconds > 1 ? "seconds" : "second" }` : ""
    return (y + d + h + m + s).trim()
  }
console.log(formatDuration(67989978))
// console.log(formatDuration(62))
// console.log(formatDuration(120))
// console.log(formatDuration(10621))  
// console.log(formatDuration(3600))
