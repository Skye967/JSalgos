function getMiddle( s ) {
    arr = s.split( "" )
    if ( s.length % 2 == 1 ) {
        num = Math.floor( arr.length / 2 );
        return arr[ num ]
    } else {
        num = Math.floor( arr.length / 2 )
        return ( arr[ num - 1 ] + arr[ num ] )
    }
}
console.log( getMiddle( "solid" ) )
console.log( getMiddle( "sollid" ) )


function getMiddle( s ) {
    return s.substr( Math.ceil( s.length / 2 - 1 ), s.length % 2 === 0 ? 2 : 1 );
}


function getMiddle( s ) {
    var middle = s.length / 2;
    return ( s.length % 2 ) ?
        s.charAt( Math.floor( middle ) ) :
        s.slice( middle - 1, middle + 1 );
}


function getMiddle( s ) {
    return s.slice( ( s.length - 1 ) / 2, s.length / 2 + 1 );
}