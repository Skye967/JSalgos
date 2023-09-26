function namehere( str ) {
    newstr = str.toLowerCase()
    var text = newstr.split( "" );
    if ( text.some( function ( v, i, a ) {
            return a.lastIndexOf( v ) != i;
        } ) ) {
        return false
    } else {
        return true
    }
}

function isIsogram( str ) {
    return !/(\w).*\1/i.test( str )
}

function isIsogram( str ) {
    return new Set( str.toUpperCase() ).size == str.length;
}