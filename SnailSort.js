snail = function ( array ) {
    let newArr = array[ 0 ];
    array.shift();
    while ( array ) {
        for ( let i = 0; i < array.length; i++ ){
            newArr.push( array[ i ][ array[i].length - 1 ] );
            array[ i ].pop();
        }
        if ( array.length == 0 ) {
            return newArr;
        }
        for ( let j = array[ array.length - 1 ].length - 1; j >= 0; j-- ){
            newArr.push( array[ array.length - 1 ][ j ] );
            array[ array.length - 1 ].pop();
        }
        array.pop();
        if ( array.length == 0 ) {
            return newArr;
        }
        for ( let k = array.length - 1; k >= 0; k-- ){
            newArr.push( array[ k ][ 0 ] );
            array[ k ].shift();
        }
        if ( array.length == 0 ) {
            return newArr;
        }
        for ( let h = 0; h < array[ 0 ].length; h++ ){
            newArr.push( array[ 0 ][ h ] );
        }
        array.shift();
        if ( array.length == 0 ) {
            return newArr;
        }
    }
};
console.log(snail( [
    [ 1, 2, 3, 4, 5, 6 ],
    [ 20, 21, 22, 23, 24, 7 ],
    [ 19, 32, 33, 34, 25, 8 ],
    [ 18, 31, 36, 35, 26, 9 ],
    [ 17, 30, 29, 28, 27, 10 ],
    [ 16, 15, 14, 13, 12, 11 ]
] ) );
console.log( snail( [
    [ 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10 ],
    [ 11, 12, 13, 14, 15 ],
    [ 16, 17, 18, 19, 20 ],
    [ 21, 22, 23, 24, 25 ]
] ) );