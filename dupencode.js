function duplicateEncode( word ) {
    word = word.toLowerCase()
    word = word.split( "" );
    console.log( word )
    for ( var x = 0; x < word.length; x++ ) {
        if ( word[ x ] == "(" ) {
            word[ x ] = "1"
        }
        if ( word[ x ] == ")" ) {
            word[ x ] = "0"
        }
    }
    let findDuplicates = arr => arr.filter( ( item, index ) => arr.indexOf( item ) != index );
    dup = [ ...new Set( findDuplicates( word ) ) ]
    console.log( dup )
    for ( var i = 0; i < word.length; i++ ) {
        for ( var j = 0; j < dup.length; j++ ) {
            if ( word[ i ] == dup[ j ] ) {
                word[ i ] = ')';
            }
        }
    }
    console.log( ( /[a-zA-Z]/ ).test( word[ y ] ) )
    for ( var y = 0; y < word.length; y++ ) {
        if ( word[ y ] != ')' )
            word[ y ] = '(';
    }
    return word.join( "" )
}
console.log( duplicateEncode( "success" ) );


function duplicateEncode( word ) {
    return word
        .toLowerCase()
        .split( '' )
        .map( function ( a, i, w ) {
            return w.indexOf( a ) == w.lastIndexOf( a ) ? '(' : ')'
        } )
        .join( '' );
}

function duplicateEncode( word ) {

    var unique = '';
    word = word.toLowerCase();
    for ( var i = 0; i < word.length; i++ ) {
        if ( word.lastIndexOf( word[ i ] ) == word.indexOf( word[ i ] ) ) {
            unique += '(';
        } else {
            unique += ')';
        }
    }
    return unique;

}

function duplicateEncode( word ) {
    word = word.toLowerCase();
    return word.replace( /./g, m => word.indexOf( m ) == word.lastIndexOf( m ) ? '(' : ')' );
}