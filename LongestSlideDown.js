
function longestSlideDown ( pyramid ) {
    let arr = [];
    arr.push( pyramid[ 0 ][ 0 ] );
    if ( pyramid.length <= 1 ) {
        console.log( arr[ 0 ] );
        return arr[ 0 ];
    }
    for ( let i = 1; i <= 1; i++ ){
        let newArr = [];
        for ( let k = 0; k < pyramid[ i ].length - 1; k++ ){
            let num1 = [pyramid[ i ][ k ] + arr[ k ]];
            let num2 = [pyramid[ i ][ k + 1 ] + arr[ k ]];
            newArr.push( num1 );
            newArr.push( num2 );
            arr = newArr;
        }
    }
    for ( let j = 2; j < pyramid.length; j++ ){
        let nextArr = [];
        for ( let h = 0; h < pyramid[ j ].length; h++ ){
            let num = pyramid[ j ][ h ];
            let pushArr = [];
            if ( arr[ h ] ) {
                for ( let i = 0; i < arr[ h ].length; i++ ){
                    pushArr.push( arr[ h ][ i ] + num );
                }
            }
            if ( arr[ h - 1] ) {
                for ( let i = 0; i < arr[ h - 1 ].length; i++ ) {
                    pushArr.push( arr[ h - 1 ][ i ] + num );
                }
            }
            if ( pushArr.length > 20 ) {
                let sum = 0;
                for ( let i = 0; i < pushArr.length; i++ ){
                    sum += pushArr[ i ];
                }
                let avg = sum / pushArr.length;
                pushArr = pushArr.filter( x => x > avg );
                nextArr.push( pushArr );
            } else {
                nextArr.push( pushArr );
            }
        }
        arr = nextArr;
    }
    //console.log( arr );
    let lastArr = [];
    for ( let u = 0; u < arr.length; u++ ){
        lastArr.push( Math.max( ...arr[ u ] ) );
    }
    //console.log( lastArr );
    console.log( Math.max( ...lastArr ) );
    return Math.max( ...lastArr );
}

longestSlideDown(
    [
        [ 75 ],
        [ 95, 64 ],
        [ 17, 47, 82 ]
    ] );
    //1074

    [
                                   [ 75 ],
                                 [ 95, 64 ],
                               [ 17, 47, 82 ],
                             [ 18, 35, 87, 10 ],
                           [ 20, 4, 82, 47, 65 ],
                          [ 19, 1, 23, 75, 3, 34 ],
                        [ 88, 2, 77, 73, 7, 63, 67 ],
                      [99, 65, 4, 28, 6, 16, 70, 92 ],
                   [ 41, 41, 26, 56, 83, 40, 80, 70, 33 ],
                 [ 41, 48, 72, 33, 47, 32, 37, 16, 94, 29 ],
               [ 53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14 ],
             [ 70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57 ],
           [ 91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48 ],
          [ 63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31 ],
         [ 4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23 ]
    ]


    // function longestSlideDown( pyramid ) {
    //     return pyramid.reduceRight( ( last, current ) => current.map(
    //         ( v, i ) => v + Math.max( last[ i ], last[ i + 1 ] )
    //     ) )[ 0 ];
    // }