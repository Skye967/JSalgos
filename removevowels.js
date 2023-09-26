var string = "This website is for losers LOL!"

function disemvowel( str ) {
    let characterArray = str.split( "" )
    var newStr = characterArray.map( character => {
        if ( /[aeiouyAEIOUY]/.test( character ) ) {
            character = "";
        } else {
            return character;
        }
    } ).join( "" );
    console.log( newStr );
    return newStr;
}




const {
    assert
} = require( 'chai' )

describe( "Basic tests", () => {
    it( "Testing for fixed tests", () => {
        assert.strictEqual( disemvowel( "This website is for losers LOL!" ), "Ths wbst s fr lsrs LL!" )
        assert.strictEqual( disemvowel( "No offense but,\nYour writing is among the worst I've ever read" ), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd" )
        assert.strictEqual( disemvowel( "What are you, a communist?" ), "Wht r y,  cmmnst?" )
    } )
} )