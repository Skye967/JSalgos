let test1 = ( "2 / 2 + 3 * 4 - 6" );


const Calculator = function () {
    this.evaluate = string => {
        let stringArr = string.split( " " ).map( x => Number.isInteger( parseInt( x ) )? parseInt(x):x);
        console.log( stringArr );
        for ( let i = 0; i < stringArr.length; i++ ) {
            switch ( stringArr[ i ] ) {
                case '*':
                    stringArr.splice( i - 1, 3, stringArr[ i - 1 ] * stringArr[ i + 1 ] );
                    i--;
                    console.log( stringArr );
                    break;
                case '/':
                    stringArr.splice( i - 1, 3, stringArr[ i - 1 ] / stringArr[ i + 1 ] );
                    i--;
                    console.log( stringArr );
                    break;
                default:
                    console.log( stringArr);
                    continue;
            }
        }
        console.log( "this" );
        for ( let j = 0; j < stringArr.length; j++ ) {
            switch ( stringArr[ j ] ) {
                case '+':
                    stringArr.splice( j - 1, 3, stringArr[ j - 1 ] + stringArr[ j + 1 ] );
                    j--;
                    console.log( stringArr );
                    break;
                case '-':
                    stringArr.splice( j - 1, 3, stringArr[ j - 1 ] - stringArr[ j + 1 ] );
                    j--;
                    console.log( stringArr );
                    break;
                default:
                    console.log( stringArr );
                    continue;
            }
        }
        return stringArr[ 0 ];
    };
    
};
var calculate = new Calculator();
console.log( calculate.evaluate( test1 ) );

// let stringArr = string.split( " " ).map( x => Number.isInteger( parseInt( x ) )? parseInt(x):x);
// console.log( stringArr );