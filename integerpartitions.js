function part( n ) {
    let partArr = [];
    for ( var x = 0; x < n; x++ ) {
        let newpart = [];
        let partnum = n;
        for ( var i = n - x; i >= 0; i-- ) {
            while ( partnum >= i ) {
                partnum -= i;
                newpart.push( i );
            }
            if ( partnum == 0 ) {
                partArr.push( newpart );
                break;
            }
        }
    }
    return partArr;
}
console.log( part( 6 ) );

Arr = [
    [ 7 ],
    [ 6, 1 ],
    [ 5, 2 ],
    [ 4, 3 ],
    [ 3, 3, 1 ],
    [ 2, 2, 2, 1 ],
    [
        1, 1, 1, 1,
        1, 1, 1
    ]
];
var subArr = Arr[ Arr.length - 1 ];
console.log( subArr[ subArr.length - 1 ] );
// enum( 4 ) - > [[ 4 ],[ 3, 1 ],[ 2, 2 ],[ 2, 1, 1 ],[ 1, 1, 1, 1 ]] and

// enum( 5 ) - > [[ 5 ],[ 4, 1 ],[ 3, 2 ],[ 3, 1, 1 ],[ 2, 2, 1 ],[ 2, 1, 1, 1 ],[ 1, 1, 1, 1, 1 ].



function part( n ) {
    let partArr = [];
    for ( var x = 0; x < n; x++ ) {
        let newpart = [];
        let partnum = n;
        for ( var i = n - x; i >= 0; i-- ) {
            while ( partnum >= i ) {
                partnum -= i;
                newpart.push( i );
            }
            if ( partnum == 0 ) {
                partArr.push( newpart );

                break;
            }
        }
    }
    return partArr;
}
console.log( part( 5 ) );


var testArr = [];
var buff = [ 4, 3 ];
testArr.push( buff );
for ( var j = buff[ buff.length - 1 ]; j > 0; j-- ) {
    console.log( j )
    while ( d )
}