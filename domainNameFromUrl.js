function domainName(url){
    //your code here
    return url.replace(/(https:\/\/|http:\/\/|www|com|net)/gi, '').split(".").join(" ").replace(/(\/)/gi," ").split(' ').reduce((a,b) => a.length >= b.length ? a : b)
  }
console.log(domainName("xfikm8i.br/default.html"))
console.log(domainName("http://googles.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com/kata"))