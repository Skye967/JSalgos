function cakes( recipe, available ) {
    thecake = []
    cakefail = []
    for ( const [ key, value ] of Object.entries( recipe ) ) {
        var x = ( `${ value }` );
        var y = ( `${ key }` );
        cakefail.push( x )
        for ( const [ key, value ] of Object.entries( available ) ) {
            var x2 = ( `${ value }` );
            var y2 = ( `${ key }` );
            if ( y2 == y ) {
                result = Math.floor( x2 / x );
                thecake.push( result );
            }
        }
    }
    console.log( thecake )
    if ( thecake.length < cakefail.length ) {
        console.log( "false" );
        return 0
    }
    cakenum = Math.min( ...thecake );
    console.log( cakenum );
    return cakenum;
}



function cakes( recipe, available ) {
    return Object.keys( recipe ).reduce( function ( val, ingredient ) {
        return Math.min( Math.floor( available[ ingredient ] / recipe[ ingredient ] || 0 ), val )
    }, Infinity )
}


const cakes = ( needs, has ) => Math.min( ...Object.keys( needs ).map( key => Math.floor( has[ key ] / needs[ key ] || 0 ) ) )



function cakes( recipe, available ) {
    var numCakes = [];
    for ( var key in recipe ) {
        if ( recipe.hasOwnProperty( key ) ) {
            if ( key in available ) {
                numCakes.push( Math.floor( available[ key ] / recipe[ key ] ) );
            } else {
                return 0;
            }
        }
    }
    return Math.min.apply( null, numCakes );



    function cakes( recipe, available ) {
        let result = Infinity;
        for ( let x in recipe ) {
            result = Math.min( Math.floor( available[ x ] / recipe[ x ] ), result );
        };
        return result || 0;
    }