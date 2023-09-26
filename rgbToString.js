function rgb(r, g, b){
    const hex = (x) => {
        if(x <= 0){x = "00"}
        else if(x.length == 1 || x.toString(16).length == 1){x = "0" + x.toString(16).toUpperCase()}
        else if(x >= 255){x = "FF"}
        else{x = x.toString(16).toUpperCase()}
        return x
    }
    r = hex(r)
    g = hex(g)
    b = hex(b)
    // r = r < 10 ? "0" + r : r >= 255 ? "FF" : r.toString(16).toUpperCase()
    // g = g < 10 ? "0" + g : g >= 255 ? "FF" : g.toString(16).toUpperCase()
    // b = b < 10 ? "0" + b : b >= 255 ? "FF" : b.toString(16).toUpperCase()
    return r + g + b
  }
console.log(rgb( 15 , -2, 255))
// console.log(rgb(173,255, 47))
// console.log(rgb(300,255,255))