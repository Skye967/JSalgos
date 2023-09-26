function add( a, b ) {
    let sum = ""; 
    let str1Length = a.length;
    let str2Length = b.length;
    if ( str2Length > str1Length ) {
        let temp = b;
        b = a;
        a = temp;
    }
    let carry = 0; 
    let x;
    let y;
    let temp;
    let digitSum;
    for ( let i = 0; i < a.length; i++ ) {
        x = parseInt( a.charAt( a.length - 1 - i ) ); 
        y = parseInt( b.charAt( b.length - 1 - i ) ); 
        y = ( y ) ? y : 0; 
        temp = ( carry + x + y ).toString(); 
        digitSum = temp.charAt( temp.length - 1 ); //
        carry = parseInt( temp.substr( 0, temp.length - 1 ) ); 
        carry = ( carry ) ? carry : 0; 
        sum = ( i === a.length - 1 ) ? temp + sum : digitSum + sum; 
    }
    return sum; 
}
console.log(add( '63829983432984289347293874', '90938498237058927340892374089' ));