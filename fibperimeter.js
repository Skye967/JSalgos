function perimeter( n ) {
    fibnum = 0;
    fibseq = [ 1, 1 ];
    var sum = 0;
    if ( n == 0 ) {
        return 4;
    }
    for ( var i = 1; i < Infinity; i++ ) {
        fibnum = fibseq[ fibseq.length - 1 ] + fibseq[ fibseq.length - 2 ];
        fibseq.push( fibnum );
        if ( fibseq.length >= n + 1 ) {
            sum = fibseq.reduce( function ( a, b ) {
                return a + b;
            }, 0 );
            var result = sum * 4;
            return result;
        }

    }
}



function perimeter( n ) {
    let arr = [ 1, 1 ];
    for ( let i = 0; i < n - 1; i++ ) {
        arr.push( arr[ arr.length - 1 ] + arr[ arr.length - 2 ] );
    }
    return 4 * arr.reduce( ( sum, num ) => sum + num, 0 );
}